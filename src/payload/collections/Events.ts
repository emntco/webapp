import { slateEditor } from '@payloadcms/richtext-slate'
import type { CollectionConfig } from 'payload/types'

export const Events: CollectionConfig = {
  slug: 'events',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'Start',
          type: 'date',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'End',
          type: 'date',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'details',
      type: 'richText',
      editor: slateEditor({
        admin: {
          elements: ['link'],
        },
      }),
    },
  ],
}
