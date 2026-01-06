import { defineType, defineField } from 'sanity'

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
        defineField({
            name: 'title',
            title: 'Title',
            type: 'object',
            fields: [
                { name: 'de', title: 'Deutsch', type: 'string' },
                { name: 'en', title: 'English', type: 'string' },
                { name: 'kh', title: 'ភាសាខ្មែរ', type: 'string' }
            ]
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'object',
            fields: [
                { name: 'de', title: 'Deutsch', type: 'text' },
                { name: 'en', title: 'English', type: 'text' },
                { name: 'kh', title: 'ភាសាខ្មែរ', type: 'text' }
            ]
        }),
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
