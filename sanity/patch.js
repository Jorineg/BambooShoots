
import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function patch() {
    const id = '30c992d9-31a1-4299-b357-92eefa9b1773'
    const draftId = `drafts.${id}`

    const patches = {
        set: {
            siteTitle: {
                de: 'Bamboo Shoots',
                en: 'Bamboo Shoots',
                kh: 'Bamboo Shoots e.V.'
            },
            globalSeo: {
                metaTitle: {
                    de: 'Bamboo Shoots | Bildung & Perspektiven für Kinder in Kambodscha',
                    en: 'Bamboo Shoots | Education & Perspectives for Children in Cambodia'
                },
                metaDescription: {
                    de: '„Time to grow“ – Wir fördern Kinder in ländlichen Regionen bei Siem Reap mit Bildung, täglichen Mahlzeiten und Gemeinschaft. Entdecken Sie unsere Vision für Kambodscha.',
                    en: '“Time to grow” – We support children in rural regions near Siem Reap with education, daily meals, and community. Discover our vision for Cambodia.'
                }
            }
        },
        unset: ['shareImage']
    }

    try {
        console.log('Patching published document...')
        await client.patch(id).set(patches.set).unset(patches.unset).commit()
        console.log('Patching draft document...')
        await client.patch(draftId).set(patches.set).unset(patches.unset).commit()
        console.log('Success!')
    } catch (err) {
        console.error('Error patching:', err.message)
    }
}

patch()
