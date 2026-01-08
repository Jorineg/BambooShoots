import siteSettings from './siteSettings'
import homePage from './homePage'
import historyPage from './historyPage'
import galleryPage from './galleryPage'
import teamMember from './teamMember'
import donationTier from './donationTier'
import historyEntry from './historyEntry'

export const schemaTypes = [
    // Singleton documents
    siteSettings,
    homePage,
    historyPage,
    galleryPage,

    // Collection documents
    teamMember,
    donationTier,
    historyEntry
]
