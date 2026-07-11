export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/fahimpyto', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/fahimpyto', icon: 'linkedin' },
  { platform: 'Email', url: 'mailto:fahimpyto@email.com', icon: 'mail' },
  { platform: 'Facebook', url: 'https://www.facebook.com/fahimpyto', icon: 'facebook' },
  { platform: 'WhatsApp', url: 'https://wa.me/8801577388669', icon: 'whatsapp' },
];

export default socialLinks;
