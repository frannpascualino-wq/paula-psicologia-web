import { doctorData } from './data/doctorData';

// Compatibility layer: existing components can keep importing these constants.
export const EMAIL = doctorData.profile.email;
export const PHONE = doctorData.profile.phone;
export const WHATSAPP_URL = doctorData.links.whatsapp;
export const CALENDAR_URL = doctorData.links.doctoralia;
export const DOCTORALIA_URL = doctorData.links.doctoralia;
export const GOOGLE_MAPS_URL = doctorData.links.maps;
export const MAPS_EMBED_URL = doctorData.links.mapsEmbed;
export const LOGO_URL = doctorData.assets.logo;
export const PROFILE_IMAGE_URL = doctorData.assets.profilePhoto;
export const PROFILE_FALLBACK_IMAGE_URL = doctorData.assets.profileFallbackPhoto;
export const DOCTORALIA_WIDGET = doctorData.integrations.doctoraliaWidget;
