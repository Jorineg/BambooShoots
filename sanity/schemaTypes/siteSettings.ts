import { defineType, defineField } from 'sanity'
import { localizedString, localizedText, localizedObject } from './i18n'
import { seo } from './seo'

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        seo('globalSeo', 'Global SEO & Social Media'),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'donationBgImage',
            title: 'Donation Section Background',
            type: 'image',
            options: { hotspot: true }
        }),
        localizedString('siteTitle', 'Display Title (Header)'),
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
        localizedObject('bankAccount', 'Bank Account', [
            { name: 'name', title: 'Account Name', type: 'string' },
            { name: 'bank', title: 'Bank Name', type: 'string' },
            { name: 'iban', title: 'IBAN / SWIFT', type: 'string' },
            { name: 'bic', title: 'BIC / Account Number', type: 'string' },
            { name: 'note', title: 'Note / Tax Info', type: 'text', rows: 3 }
        ]),

        // UI Labels & Common Phrases
        defineField({
            name: 'labels',
            title: 'UI Labels',
            type: 'object',
            fields: [
                localizedString('donateNow', 'Donate Now Button'),
                localizedString('supportNow', 'Support Now Button'),
                localizedString('ourMission', 'Our Mission Label'),
                localizedString('scroll', 'Scroll Label'),
                localizedString('sendMessage', 'Send Message Button'),
                localizedString('seeAllTeams', 'See All Team Members'),
                localizedString('backToHome', 'Back to Home Link'),
                localizedString('contact', 'Contact Label'),
                localizedString('donateAccount', 'Donate Account Label'),
                localizedString('germany', 'Germany Label'),
                localizedString('cambodia', 'Cambodia Label'),
                localizedString('legal', 'Legal Label'),
                localizedString('imprint', 'Imprint Label'),
                localizedString('privacy', 'Privacy Policy Label'),
                localizedString('nonprofit', 'Non-profit Note'),
                localizedString('followUs', 'Follow Us Label'),
                localizedString('copyright', 'Copyright Text'),
                localizedString('navStart', 'Nav: Start'),
                localizedString('navPrograms', 'Nav: Programs'),
                localizedString('navTeam', 'Nav: Team'),
                localizedString('navDonate', 'Nav: Donate'),
                localizedString('navHistory', 'Nav: History'),
                localizedString('navGallery', 'Nav: Gallery')
            ]
        }),

        // Global Donation Section Info
        defineField({
            name: 'donateSection',
            title: 'Donate Section Labels',
            type: 'object',
            fields: [
                localizedString('title', 'Section Title'),
                localizedText('intro', 'Section Intro'),
                localizedString('onlineDonate', 'Online Donate Title'),
                localizedString('bankTransfer', 'Bank Transfer Title'),
                localizedString('accountHolder', 'Account Holder Label'),
                localizedString('bankName', 'Bank Name Label'),
                localizedString('footerInfo', 'Donation Footer Text')
            ]
        })
    ],
    preview: {
        prepare() {
            return { title: 'Site Settings' }
        }
    }
})
