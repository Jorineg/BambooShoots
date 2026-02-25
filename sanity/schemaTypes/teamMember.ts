import { defineType, defineField } from 'sanity'
import { localizedString, localizedText } from './i18n'

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
        localizedString('role', 'Role'),
        defineField({
            name: 'image',
            title: 'Photo',
            type: 'image',
            options: { hotspot: true }
        }),
        localizedText('description', 'Description'),
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
