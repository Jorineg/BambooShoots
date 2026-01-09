import { defineType, defineField } from 'sanity'
import { localizedString, localizedText } from './i18n'
import { seo } from './seo'

export default defineType({
    name: 'historyPage',
    title: 'History Page',
    type: 'document',
    fields: [
        seo(),
        localizedString('heroTitle', 'Hero Title'),
        localizedText('intro', 'Introduction Text'),

        // Cambodia Background
        defineField({
            name: 'cambodiaBackground',
            title: 'Cambodia Background',
            type: 'object',
            fields: [
                localizedString('title', 'Main Section Title'),
                defineField({
                    name: 'sections',
                    title: 'Background Sections',
                    type: 'array',
                    of: [{
                        type: 'object',
                        name: 'backgroundSection',
                        fields: [
                            localizedString('title', 'Title'),
                            localizedText('content', 'Content'),
                            defineField({
                                name: 'image',
                                title: 'Image',
                                type: 'image',
                                options: { hotspot: true }
                            })
                        ],
                        preview: {
                            select: {
                                title: 'title.de',
                                media: 'image'
                            }
                        }
                    }]
                }),
                localizedString('educationTitle', 'Education Section Title'),
                localizedText('education', 'Education Text'),
                defineField({
                    name: 'educationImage',
                    title: 'Education Section Image',
                    type: 'image',
                    options: { hotspot: true }
                }),
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
        })
    ],
    preview: {
        prepare() {
            return { title: 'History Page' }
        }
    }
})
