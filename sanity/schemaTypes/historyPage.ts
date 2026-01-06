import { defineType, defineField } from 'sanity'

// Helper for creating localized text fields
const localizedString = (name: string, title: string) => defineField({
    name,
    title,
    type: 'object',
    fields: [
        { name: 'de', title: 'Deutsch', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'kh', title: 'ភាសាខ្មែរ', type: 'string' }
    ]
})

const localizedText = (name: string, title: string) => defineField({
    name,
    title,
    type: 'object',
    fields: [
        { name: 'de', title: 'Deutsch', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
        { name: 'kh', title: 'ភាសាខ្មែរ', type: 'text' }
    ]
})

export default defineType({
    name: 'historyPage',
    title: 'History Page',
    type: 'document',
    fields: [
        defineField({
            name: 'pageTitle',
            title: 'Page Title',
            type: 'object',
            fields: [
                { name: 'de', title: 'Deutsch', type: 'string' },
                { name: 'en', title: 'English', type: 'string' },
                { name: 'kh', title: 'ភាសាខ្មែរ', type: 'string' }
            ]
        }),
        localizedString('heroTitle', 'Hero Title'),
        localizedText('intro', 'Introduction Text'),

        // Cambodia Background
        defineField({
            name: 'cambodiaBackground',
            title: 'Cambodia Background',
            type: 'object',
            fields: [
                localizedString('title', 'Section Title'),
                localizedText('geography', 'Geography Text'),
                localizedText('history', 'History Text'),
                localizedText('economy', 'Economy Text'),
                localizedText('education', 'Education Text'),
                localizedText('challenges', 'Challenges Text')
            ]
        }),

        // Bamboo Shoots History
        defineField({
            name: 'orgHistory',
            title: 'Organization History',
            type: 'object',
            fields: [
                localizedString('title', 'Section Title'),
                localizedText('intro', 'Introduction'),
                localizedString('timelineTitle', 'Timeline Title')
            ]
        }),

        defineField({
            name: 'currentStatus',
            title: 'Current Status',
            type: 'object',
            fields: [
                localizedString('title', 'Title'),
                localizedText('text', 'Text')
            ]
        })
    ],
    preview: {
        prepare() {
            return { title: 'History Page' }
        }
    }
})
