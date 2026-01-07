import { defineType, defineField, defineArrayMember } from 'sanity'
import { localizedString, localizedText } from './i18n'

export default defineType({
    name: 'galleryPage',
    title: 'Gallery Page',
    type: 'document',
    fields: [
        localizedString('title', 'Page Title'),
        localizedText('description', 'Page Description'),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        localizedString('caption', 'Caption'),
                        defineField({
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string',
                            description: 'Important for accessibility and SEO'
                        })
                    ]
                })
            ]
        })
    ],
    preview: {
        prepare() {
            return { title: 'Gallery Page' }
        }
    }
})
