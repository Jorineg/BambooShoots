import { defineType, defineField, defineArrayMember } from 'sanity'
import { localizedString, localizedText } from './i18n'

export default defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        // Hero Section
        defineField({
            name: 'hero',
            title: 'Hero Section',
            type: 'object',
            fields: [
                localizedString('title', 'Title'),
                localizedString('titleAccent', 'Title Accent (Terracotta)'),
                localizedString('subtitle', 'Subtitle'),
                localizedText('description', 'Description'),
                defineField({
                    name: 'image',
                    title: 'Hero Image',
                    type: 'image',
                    options: { hotspot: true }
                })
            ]
        }),

        // Welcome Section
        defineField({
            name: 'welcome',
            title: 'Welcome Section',
            type: 'object',
            fields: [
                localizedString('greeting', 'Greeting'),
                localizedText('text', 'Text')
            ]
        }),

        // Mission Section
        defineField({
            name: 'mission',
            title: 'Mission Section',
            type: 'object',
            fields: [
                localizedString('title', 'Title'),
                localizedText('text', 'Text'),
                localizedString('quote', 'Quote'),
                localizedString('quoteSource', 'Quote Source')
            ]
        }),

        // Cambodia Teaser (links to history page)
        defineField({
            name: 'cambodiaTeaser',
            title: 'Cambodia Teaser',
            type: 'object',
            fields: [
                localizedString('title', 'Title'),
                localizedText('text', 'Teaser Text'),
                localizedString('linkText', 'Link Text'),
                defineField({
                    name: 'image',
                    title: 'Background Image',
                    type: 'image',
                    options: { hotspot: true }
                })
            ]
        }),

        // Programs Section
        localizedText('programsIntro', 'Programs Section Description'),
        defineField({
            name: 'programs',
            title: 'Programs',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        localizedString('title', 'Title'),
                        localizedText('description', 'Description'),
                        defineField({
                            name: 'features',
                            title: 'Features',
                            type: 'array',
                            of: [
                                defineArrayMember({
                                    name: 'feature',
                                    title: 'Feature',
                                    type: 'object',
                                    groups: [
                                        { name: 'de', title: 'DE', default: true },
                                        { name: 'en', title: 'EN' },
                                        { name: 'kh', title: 'KH' }
                                    ],
                                    fields: [
                                        { name: 'de', title: 'Deutsch', type: 'string', group: 'de' },
                                        { name: 'en', title: 'English', type: 'string', group: 'en' },
                                        { name: 'kh', title: 'ភាសាខ្មែរ', type: 'string', group: 'kh' }
                                    ]
                                })
                            ]
                        }),
                        defineField({
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: { hotspot: true }
                        })
                    ],
                    preview: {
                        select: { title: 'title.de' },
                        prepare({ title }) {
                            return { title: title }
                        }
                    }
                })
            ]
        }),

        // Visit Section
        defineField({
            name: 'visit',
            title: 'Visit Us Section',
            type: 'object',
            fields: [
                localizedString('title', 'Title'),
                localizedText('text', 'Text'),
                defineField({
                    name: 'image',
                    title: 'Background Image',
                    type: 'image',
                    options: { hotspot: true }
                })
            ]
        }),

    ],
    preview: {
        prepare() {
            return { title: 'Home Page' }
        }
    }
})
