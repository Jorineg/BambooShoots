import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'teamMember',
    title: 'Team Member',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'object',
            fields: [
                { name: 'de', title: 'Deutsch', type: 'string' },
                { name: 'en', title: 'English', type: 'string' },
                { name: 'kh', title: 'ភាសាខ្មែរ', type: 'string' }
            ]
        }),
        defineField({
            name: 'image',
            title: 'Photo',
            type: 'image',
            options: { hotspot: true }
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
            name: 'order',
            title: 'Display Order',
            type: 'number'
        })
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }]
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role.de',
            media: 'image'
        }
    }
})
