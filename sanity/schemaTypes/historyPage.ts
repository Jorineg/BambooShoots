import { defineType, defineField } from 'sanity'
import { localizedString, localizedText } from './i18n'

export default defineType({
    name: 'historyPage',
    title: 'History Page',
    type: 'document',
    fields: [
        localizedString('pageTitle', 'Page Title'),
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
