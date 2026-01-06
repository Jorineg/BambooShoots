import { defineType, defineField } from 'sanity'
import { localizedString, localizedText } from './i18n'

export default defineType({
    name: 'timelineEvent',
    title: 'Timeline Event',
    type: 'document',
    fields: [
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        localizedString('title', 'Title'),
        localizedText('description', 'Description'),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true }
        })
    ],
    orderings: [
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
                title: `${year}: ${title}`,
                media
            }
        }
    }
})
