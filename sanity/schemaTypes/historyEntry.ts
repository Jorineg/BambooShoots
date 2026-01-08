import { defineType, defineField } from 'sanity'
import { localizedString, localizedText } from './i18n'

export default defineType({
    name: 'historyEntry',
    title: 'History Entry',
    type: 'document',
    fields: [
        defineField({
            name: 'year',
            title: 'Year/Label',
            type: 'string',
            description: 'E.g. 2003 or "Today". Used for sorting and as a small label.'
        }),
        localizedString('title', 'Title'),
        localizedText('content', 'Content'),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            initialValue: 0
        })
    ],
    orderings: [
        {
            title: 'Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }]
        },
        {
            title: 'Year',
            name: 'yearAsc',
            by: [{ field: 'year', direction: 'asc' }]
        }
    ],
    preview: {
        select: {
            title: 'title.de',
            year: 'year',
            media: 'image'
        },
        prepare({ title, year, media }) {
            return {
                title: year ? `${year}: ${title}` : title,
                media
            }
        }
    }
})
