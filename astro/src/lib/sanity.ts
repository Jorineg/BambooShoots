import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanityClient = createClient({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || '',
    dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
    useCdn: true,
    apiVersion: '2024-01-01'
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}

// Fetch site settings
export async function getSiteSettings() {
    return sanityClient.fetch(`*[_type == "siteSettings"][0]`);
}

// Fetch home page content
export async function getHomePage() {
    return sanityClient.fetch(`*[_type == "homePage"][0]`);
}

// Fetch history page content
export async function getHistoryPage() {
    return sanityClient.fetch(`*[_type == "historyPage"][0]`);
}

// Fetch gallery page content
export async function getGalleryPage() {
    return sanityClient.fetch(`*[_type == "galleryPage"][0]`);
}

// Fetch team members
export async function getTeamMembers() {
    return sanityClient.fetch(`*[_type == "teamMember"] | order(order asc)`);
}

// Fetch donation tiers
export async function getDonationTiers() {
    return sanityClient.fetch(`*[_type == "donationTier"] | order(order asc)`);
}

// Fetch history entries
export async function getHistoryEntries() {
    return sanityClient.fetch(`*[_type == "historyEntry"] | order(order asc, year asc)`);
}
