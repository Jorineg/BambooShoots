import { defineType, defineField } from 'sanity'
import { localizedString, localizedBlockContent } from './i18n'

export default defineType({
    name: 'newsEntry',
    title: 'News Entry',
    type: 'document',
    fields: [
        localizedString('title', 'Title'),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            validation: (rule) => rule.required()
        }),
        localizedBlockContent('body', 'Body'),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true }
        })
    ],
    orderings: [
        {
            title: 'Date (newest first)',
            name: 'dateDesc',
            by: [{ field: 'date', direction: 'desc' }]
        }
    ],
    preview: {
        select: {
            title: 'title.de',
            date: 'date',
            media: 'image'
        },
        prepare({ title, date, media }) {
            return {
                title: title || 'Untitled',
                subtitle: date,
                media
            }
        }
    }
})
