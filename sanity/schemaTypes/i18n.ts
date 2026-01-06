import { defineField } from 'sanity'

export const localizedFields = (type: 'string' | 'text') => (name: string, title: string) => defineField({
    name,
    title,
    type: 'object',
    groups: [
        { name: 'de', title: 'DE', default: true },
        { name: 'en', title: 'EN' },
        { name: 'kh', title: 'KH' }
    ],
    fields: [
        { name: 'de', title: 'Deutsch', type, group: 'de' },
        { name: 'en', title: 'English', type, group: 'en' },
        { name: 'kh', title: 'ភាសាខ្មែរ', type, group: 'kh' }
    ]
})

export const localizedString = localizedFields('string')
export const localizedText = localizedFields('text')
