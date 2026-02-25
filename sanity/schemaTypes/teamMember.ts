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
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Leitung', value: 'directors' },
                    { title: 'Lehrer', value: 'teachers' },
                    { title: 'Team', value: 'team' }
                ],
                layout: 'radio'
            },
            initialValue: 'team',
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
            media: 'image',
            category: 'category'
        },
        prepare({ title, subtitle, media, category }) {
            const labels: Record<string, string> = { directors: 'Leitung', teachers: 'Lehrer', team: 'Team' }
            return {
                title,
                subtitle: `${labels[category] || category} – ${subtitle || ''}`,
                media
            }
        }
    }
})
