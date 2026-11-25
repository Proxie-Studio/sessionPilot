// Site-wide constants (links, navigation).
export const APP = 'https://app.sessionpilot.nl';
export const APPSTORE = 'https://apps.apple.com/us/app/session-pilot-ops/id6795077651';
export const PLAY =
  'https://play.google.com/store/apps/details?id=com.proxiestudio.web.sessionpilotops.session_pilot_ops';
export const LINKEDIN = 'https://www.linkedin.com/company/session-pilot/posts/?feedView=all';

export const NAV = [
  {
    label: 'Industries',
    href: '/industries',
    // Shown in the hover dropdown under "Industries"
    children: [
      { label: 'Restaurants', href: '/restaurants' },
      { label: 'Hotels', href: '/hotels' },
      { label: 'Hospitality', href: '/hospitality' }
    ]
  },
  { label: 'Features', href: '/features' },
  { label: 'POS', href: '/pos' },
  { label: 'Integrations', href: '/intergrations' },
  { label: 'Tools', href: '/tools' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Articles', href: '/article' }
];

export const asset = (f) => `/assets/${f}`;
