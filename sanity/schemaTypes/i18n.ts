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

export const localizedObject = (name: string, title: string, fields: any[]) => defineField({
    name,
    title,
    type: 'object',
    groups: [
        { name: 'de', title: 'DE', default: true },
        { name: 'en', title: 'EN' },
        { name: 'kh', title: 'KH' }
    ],
    fields: [
        { name: 'de', title: 'Deutsch', type: 'object', group: 'de', fields },
        { name: 'en', title: 'English', type: 'object', group: 'en', fields },
        { name: 'kh', title: 'ភាសាខ្មែរ', type: 'object', group: 'kh', fields }
    ]
})

export const localizedImage = (name: string, title: string) => defineField({
    name,
    title,
    type: 'object',
    groups: [
        { name: 'de', title: 'DE', default: true },
        { name: 'en', title: 'EN' },
        { name: 'kh', title: 'KH' }
    ],
    fields: [
        { name: 'de', title: 'Deutsch', type: 'image', group: 'de', options: { hotspot: true } },
        { name: 'en', title: 'English', type: 'image', group: 'en', options: { hotspot: true } },
        { name: 'kh', title: 'ភាសាខ្មែរ', type: 'image', group: 'kh', options: { hotspot: true } }
    ]
})


