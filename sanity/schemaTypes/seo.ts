import { defineField } from 'sanity'
import { localizedString, localizedText } from './i18n'

export const seo = (name = 'seo', title = 'SEO & Social Media') => defineField({
    name,
    title,
    type: 'object',
    options: { collapsible: true, collapsed: false },
    fields: [
        localizedString('metaTitle', 'Meta Title'),
        localizedText('metaDescription', 'Meta Description'),
        defineField({
            name: 'shareImage',
            title: 'Share Image (Open Graph)',
            type: 'image',
            description: 'Recommended size: 1200x630px. If not set, global share image from Site Settings will be used.',
            options: { hotspot: true }
        })
    ]
})
