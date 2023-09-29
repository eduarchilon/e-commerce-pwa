import { SocialMedia } from '../model/social-media.model';
import { MAT_ICONS } from './mat-icon.data';

const urls: any[] = [
  { url: 'www.google.com' },
  { url: 'www.google.com' },
  { url: 'www.google.com' },
  { url: 'www.google.com' },
];

export const SOCIAL_MEDIA_FOOTER: SocialMedia[] = MAT_ICONS.map(
  (smf, index) => {
    return {
      icon: smf,
      url: urls[index].url,
    };
  }
);
