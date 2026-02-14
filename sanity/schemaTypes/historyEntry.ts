import { defineType, defineField } from 'sanity'
import { localizedString, localizedText } from './i18n'

export default defineType({
    name: 'historyEntry',
    title: 'History Entry',
    type: 'document',
    fields: [
        localizedString('year', 'Year/Label'),
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
            by: [{ field: 'year.de', direction: 'asc' }]
        }
    ],
    preview: {
        select: {
            title: 'title.de',
            year: 'year.de',
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
