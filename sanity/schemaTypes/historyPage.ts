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
                localizedString('title', 'Geography Section Title'),
                localizedText('geography', 'Geography Text'),
                localizedString('historyTitle', 'History Section Title'),
                localizedText('history', 'History Text'),
                localizedString('economyTitle', 'Economy Section Title'),
                localizedText('economy', 'Economy Text'),
                localizedString('educationTitle', 'Education Section Title'),
                localizedText('education', 'Education Text'),
                defineField({
                    name: 'educationList',
                    title: 'Education Challenges List',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            { name: 'de', type: 'string', title: 'DE' },
                            { name: 'en', type: 'string', title: 'EN' },
                            { name: 'kh', type: 'string', title: 'KH' }
                        ]
                    }]
                }),
                localizedString('educationHighlight', 'Education Highlight Box'),
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
