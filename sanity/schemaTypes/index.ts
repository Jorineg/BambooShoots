import siteSettings from './siteSettings'
import homePage from './homePage'
import historyPage from './historyPage'
import galleryPage from './galleryPage'
import teamMember from './teamMember'
import donationTier from './donationTier'
import timelineEvent from './timelineEvent'

export const schemaTypes = [
    // Singleton documents
    siteSettings,
    homePage,
    historyPage,
    galleryPage,

    // Collection documents
    teamMember,
    donationTier,
    timelineEvent
]
