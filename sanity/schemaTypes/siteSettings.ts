import { defineType, defineField } from 'sanity'
import { localizedString } from './i18n'

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true }
        }),
        localizedString('siteTitle', 'Site Title'),
        localizedString('tagline', 'Tagline'),
        defineField({
            name: 'socialMedia',
            title: 'Social Media Links',
            type: 'object',
            fields: [
                { name: 'facebook', title: 'Facebook URL', type: 'url' },
                { name: 'instagram', title: 'Instagram URL', type: 'url' },
                { name: 'youtube', title: 'YouTube URL', type: 'url' }
            ]
        }),
        defineField({
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'string'
        }),
        defineField({
            name: 'contactEmailCambodia',
            title: 'Contact Email Cambodia',
            type: 'string'
        }),
        defineField({
            name: 'donationLinks',
            title: 'Donation Links',
            type: 'object',
            fields: [
                { name: 'betterplace', title: 'BetterPlace URL', type: 'url' },
                { name: 'paypal', title: 'PayPal URL', type: 'url' }
            ]
        }),
        defineField({
            name: 'bankAccount',
            title: 'Bank Account Germany',
            type: 'object',
            fields: [
                { name: 'name', title: 'Account Name', type: 'string' },
                { name: 'bank', title: 'Bank Name', type: 'string' },
                { name: 'iban', title: 'IBAN', type: 'string' },
                { name: 'bic', title: 'BIC', type: 'string' }
            ]
        })
    ],
    preview: {
        prepare() {
            return { title: 'Site Settings' }
        }
    }
})
