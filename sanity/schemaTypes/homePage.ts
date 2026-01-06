import { defineType, defineField, defineArrayMember } from 'sanity'

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
                localizedString('linkText', 'Link Text')
            ]
        }),

        // Programs Section
        defineField({
            name: 'programs',
            title: 'Programs',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        { name: 'icon', title: 'Icon (Emoji)', type: 'string' },
                        localizedString('title', 'Title'),
                        localizedText('description', 'Description'),
                        defineField({
                            name: 'features',
                            title: 'Features',
                            type: 'array',
                            of: [
                                defineArrayMember({
                                    type: 'object',
                                    fields: [
                                        { name: 'de', title: 'Deutsch', type: 'string' },
                                        { name: 'en', title: 'English', type: 'string' },
                                        { name: 'kh', title: 'ភាសាខ្មែរ', type: 'string' }
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
                        select: { title: 'title.de', icon: 'icon' },
                        prepare({ title, icon }) {
                            return { title: `${icon || ''} ${title}` }
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
                localizedText('text', 'Text')
            ]
        }),

        // Gallery
        defineField({
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        defineField({
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'object',
                            fields: [
                                { name: 'de', title: 'Deutsch', type: 'string' },
                                { name: 'en', title: 'English', type: 'string' },
                                { name: 'kh', title: 'ភាសាខ្មែរ', type: 'string' }
                            ]
                        }),
                        defineField({
                            name: 'caption',
                            title: 'Caption',
                            type: 'object',
                            fields: [
                                { name: 'de', title: 'Deutsch', type: 'string' },
                                { name: 'en', title: 'English', type: 'string' },
                                { name: 'kh', title: 'ភាសាខ្មែរ', type: 'string' }
                            ]
                        })
                    ]
                })
            ]
        })
    ],
    preview: {
        prepare() {
            return { title: 'Home Page' }
        }
    }
})
