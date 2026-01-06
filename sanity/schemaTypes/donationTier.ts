import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'donationTier',
    title: 'Donation Tier',
    type: 'document',
    fields: [
        defineField({
            name: 'amount',
            title: 'Amount (€)',
            type: 'number',
            description: 'Leave empty for "free amount" tier'
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'object',
            fields: [
                { name: 'de', title: 'Deutsch', type: 'string' },
                { name: 'en', title: 'English', type: 'string' },
                { name: 'kh', title: 'ភាសាខ្មែរ', type: 'string' }
            ]
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'object',
            fields: [
                { name: 'de', title: 'Deutsch', type: 'text' },
                { name: 'en', title: 'English', type: 'text' },
                { name: 'kh', title: 'ភាសាខ្មែរ', type: 'text' }
            ]
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number'
        })
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }]
        }
    ],
    preview: {
        select: {
            title: 'title.de',
            amount: 'amount'
        },
        prepare({ title, amount }) {
            return {
                title: amount ? `${amount} € – ${title}` : `Freier Betrag – ${title}`
            }
        }
    }
})
