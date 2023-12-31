import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter, fetchGlobals } from '../../_api/fetchGlobals'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
import { Gutter } from '../Gutter'
import { CMSLink } from '../Link'

import classes from './index.module.scss'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the footer without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  const navItems = footer?.navItems || []

  const year = new Date().getFullYear()

  return (
    <footer className={classes.footer}>
      <Gutter className={classes.wrap}>
        <div className={classes.brand}>
          <Link href="/">
            <picture>
              <img
                className={classes.logo}
                alt="White text version of the EMINENT logo."
                src="/white-text.png"
              />
            </picture>
          </Link>
          <div className={classes.socials}>
            <Link href="http://discord.emnt.co" target="_blank">
              <Image alt="Discord" src="/icons/discord.svg" width={18} height={18} />
            </Link>
            <Link href="https://twitch.tv/emntco" target="_blank">
              <Image alt="Twitch" src="/icons/twitch.svg" width={18} height={18} />
            </Link>
            <Link href="https://x.com/emntco" target="_blank">
              <Image alt="X" src="/icons/x.svg" width={18} height={18} />
            </Link>
            <Link href="https://youtube.com/@emntco" target="_blank">
              <Image alt="YouTube" src="/icons/youtube.svg" width={18} height={18} />
            </Link>
          </div>
        </div>
        <div className={classes.links}>
          <span className={classes.copy}>{year} &copy; All rights reserved.</span>
          <nav className={classes.nav}>
            {/* <ThemeSelector />
          {navItems.map(({ link }, i) => {
            return <CMSLink key={i} {...link} />
          })} */}
            {/* <CartLink /> */}
            {navItems.map(({ link }, i) => {
              return <CMSLink key={i} {...link} appearance="none" />
            })}
            {/* <CartLink /> */}
          </nav>
        </div>
      </Gutter>
    </footer>
  )
}
