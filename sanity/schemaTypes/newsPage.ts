import { defineType } from 'sanity'
import { localizedString } from './i18n'
import { seo } from './seo'

export default defineType({
    name: 'newsPage',
    title: 'News Page',
    type: 'document',
    fields: [
        seo(),
        localizedString('heroTitle', 'Page Title')
    ],
    preview: {
        prepare() {
            return { title: 'News Page' }
        }
    }
})
