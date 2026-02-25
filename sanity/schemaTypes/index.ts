import siteSettings from './siteSettings'
import homePage from './homePage'
import historyPage from './historyPage'
import galleryPage from './galleryPage'
import newsPage from './newsPage'
import teamMember from './teamMember'
import donationTier from './donationTier'
import historyEntry from './historyEntry'
import newsEntry from './newsEntry'

export const schemaTypes = [
    // Singleton documents
    siteSettings,
    homePage,
    historyPage,
    galleryPage,
    newsPage,

    // Collection documents
    teamMember,
    donationTier,
    historyEntry,
    newsEntry
]
