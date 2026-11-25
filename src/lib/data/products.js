// Content for the five "product-style" pages (Integrations, Tools, Restaurants, Hotels, Hospitality).
const toolsBase = {
  sub: 'Everything your restaurant needs to manage daily operations, teams, food safety, and compliance in one platform.',
  heroImg: 'rrQzUfpOCmHYEhPahce4WOpEyZo.png',
  pEyebrow: 'The Product',
  pTitle: 'Built for the work that happens every shift.',
  pIntro: 'Standardize daily tasks, simplify workflows, and keep every restaurant running consistently.',
  big: {
    t: 'Built Around Your Workflows',
    d: 'Create standardized workflows for every restaurant. Keep tasks, procedures, and daily operations consistent across every shift.',
    img: 'DHWPrx6r3N7PpcAIv17sTskeqic.png'
  },
  cards: [
    ['Daily operations', 'Manage opening, closing, cleaning, and shift tasks.'],
    ['Food safety', 'Track temperatures, inspections, and compliance.'],
    ['Team management', 'Keep employees aligned with tasks and shift information.']
  ],
  tEyebrow: 'The Product',
  tTitle: 'Teams that stopped managing restaurants on paper.',
  quote: 'Replace paper checklists, spreadsheets, and scattered messages with one connected operations platform.',
  avatar: 'Savle5DZHOWqtAcOxHiJI3UY.png',
  who: 'James R.',
  role: 'CEO, CloudPlex',
  stat: ['92%', 'routing accuracy']
};

export const products = {
  intergrations: { ...toolsBase, eyebrow: 'Intergrations', h1: 'Intergrations' },
  tools: { ...toolsBase, eyebrow: 'Tools', h1: 'Tools for the operations' },
  restaurants: {
    ...toolsBase,
    eyebrow: 'Restaurants',
    h1: 'Restaurant operations',
    heroImg: 'aKNlm9CiVi2nf0tfCAaQ7BemY84.png',
    big: { ...toolsBase.big, img: 'IwFTwnVy1Hihf9wojM1oG3uHd4Y.png' },
    quote: 'Before SessionPilot OPS, we managed everything using paper checklists. Now every restaurant follows the same standards.',
    role: 'Operation Manager'
  },
  hotels: {
    eyebrow: 'Hotels',
    h1: 'Hotel Operations, Simplified.',
    sub: 'Manage housekeeping, maintenance, guest services, staff tasks, and daily hotel operations from one platform.',
    heroImg: 'mBD73pGQ02frAcIWtggELz0.png',
    pEyebrow: 'The product',
    pTitle: 'Every shift matters.',
    pIntro: 'SessionPilot keeps hotel teams organized with clear workflows for housekeeping, maintenance, guest services, and daily operations.',
    big: null,
    soloImg: '2LvanmRboAkVVcphHdEY2MGi8I.png',
    cards: [
      ['Housekeeping', 'Manage room cleaning, inspections, and housekeeping tasks across every shift.'],
      ['Maintenance', 'Track maintenance requests, equipment issues, repairs, and follow-ups.'],
      ['Guest Services', 'Coordinate daily guest requests, service tasks, and operational handovers.']
    ],
    tEyebrow: 'In Production',
    tTitle: 'Hotels that stopped managing operations on paper',
    quote: 'We reduced missed opening tasks by over 90%.',
    avatar: 'XFKsIZRI4mxNoJj3C4tv0S9qk.png',
    who: 'Sophie K.',
    role: 'Restaurent Owner',
    stat: ['90%', 'more demos booked from inbound']
  },
  hospitality: {
    eyebrow: 'Hospitality',
    h1: 'Hospitality Operations, Simplified.',
    sub: 'Coordinate daily tasks, guest services, staff operations, maintenance, and compliance across your hospitality business.',
    heroImg: 'NB4ItoMYEZHMHEgWRzdMRPzB8.png',
    pEyebrow: 'The product',
    pTitle: 'Built for the operation that never stops.',
    pIntro: 'Keep every department organized with clear tasks, workflows, and real-time operational visibility.',
    big: {
      t: 'Centralized daily operations',
      d: 'Manage guest requests, staff tasks, maintenance, cleaning, and operational procedures from one connected platform.',
      img: 'nh2v4fTXfKEV2ri04A7gZdrpWo0.png'
    },
    cards: [
      ['Guest Services', 'Coordinate guest requests, service tasks, and follow-ups across your team.'],
      ['Staff Operations', 'Manage daily tasks, schedules, attendance, and shift handovers.'],
      ['Property Management', 'Track cleaning, maintenance, inspections, and operational issues across your property.']
    ],
    tEyebrow: 'In Production',
    tTitle: 'Hospitality teams that stopped managing operations on paper',
    quote: 'Our payroll preparation now takes minutes instead of hours.',
    avatar: 'KnorwvqN1HtowWhMecWMyaG6dws.png',
    who: 'Paul M.',
    role: 'HR Manager',
    stat: null
  }
};
