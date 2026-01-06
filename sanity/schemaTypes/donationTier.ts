import { defineType, defineField } from 'sanity'
import { localizedString, localizedText } from './i18n'

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
        localizedString('title', 'Title'),
        localizedText('description', 'Description'),
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
