/* ── Site-wide constants and structured data ─────────────────────────────
   Single source of truth for business facts and schema.org entity IDs.
   Every page references these @ids so search engines and AI systems see
   one connected entity graph instead of duplicate, conflicting entities. */

export const BASE_URL = 'https://greentrackcc.com'

export const ORG_ID = `${BASE_URL}/#organization`
export const WEBSITE_ID = `${BASE_URL}/#website`
export const NICOLA_ID = `${BASE_URL}/#nicola-nevill`
export const DOUG_ID = `${BASE_URL}/#doug-nevill`

export const EMAIL = 'nicola@greentrackcc.com'

/* Towns covered in person. Used in schema areaServed and the local landing page. */
export const OXFORDSHIRE_AREAS = [
  'Oxford',
  'Abingdon',
  'Wantage',
  'Didcot',
  'Witney',
  'Henley-on-Thames',
  'Thame',
  'Bicester',
  'Banbury',
  'Wallingford',
  'Faringdon',
  'Newbury',
]

/* Serialise JSON-LD safely: escapes `<` so content can never break out of the script tag */
export function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, '\\u003c') }
}

/* ── Global entity graph (rendered once in the root layout) ─────────── */
export const siteGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'Organization'],
      '@id': ORG_ID,
      name: 'GreenTrack Coaching & Consulting',
      legalName: 'GreenTrack Coaching & Consulting Ltd',
      alternateName: ['GreenTrack Coaching', 'GreenTrack CC'],
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo-512.png`, width: 512, height: 512 },
      image: `${BASE_URL}/racetrack-hero.jpeg`,
      description:
        'Online executive coaching, leadership development, team facilitation and motorsport career mentoring for clients worldwide. Based in Wantage, Oxfordshire, with in-person sessions available locally.',
      email: EMAIL,
      foundingDate: '2025',
      founder: { '@id': NICOLA_ID },
      employee: [{ '@id': NICOLA_ID }, { '@id': DOUG_ID }],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2 The Old Estate Yard, High Street, East Hendred',
        addressLocality: 'Wantage',
        addressRegion: 'Oxfordshire',
        postalCode: 'OX12 8JY',
        addressCountry: 'GB',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 51.5974, longitude: -1.3744 },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Oxfordshire' },
        ...OXFORDSHIRE_AREAS.map((name) => ({ '@type': 'City', name })),
        { '@type': 'Country', name: 'United Kingdom' },
        'Worldwide',
      ],
      priceRange: 'Enquire for pricing',
      knowsAbout: [
        'Executive coaching',
        'Leadership development',
        'Team coaching',
        'Team facilitation',
        'Career transitions',
        'Motorsport careers',
        'Formula One engineering careers',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Coaching and mentoring services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Executive and Leadership Coaching',
              url: `${BASE_URL}/coaching`,
              provider: { '@id': NICOLA_ID },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Team Coaching and Facilitation',
              url: `${BASE_URL}/coaching`,
              provider: { '@id': NICOLA_ID },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Motorsport and Engineering Career Mentoring',
              url: `${BASE_URL}/mentoring`,
              provider: [{ '@id': DOUG_ID }, { '@id': NICOLA_ID }],
            },
          },
        ],
      },
      identifier: { '@type': 'PropertyValue', propertyID: 'Companies House', value: '16247877' },
      /* sameAs must only list profiles of THIS entity, never third-party homepages */
      sameAs: [
        'https://www.linkedin.com/company/greentrack-coaching-consulting/',
        'https://find-and-update.company-information.service.gov.uk/company/16247877',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: 'GreenTrack Coaching & Consulting',
      url: BASE_URL,
      inLanguage: 'en-GB',
      publisher: { '@id': ORG_ID },
    },
    {
      '@type': 'Person',
      '@id': NICOLA_ID,
      name: 'Nicola Nevill',
      alternateName: ['Nicola Salter', 'Nicky Nevill'],
      jobTitle: 'Executive Coach and Leadership Consultant',
      url: `${BASE_URL}/about`,
      image: `${BASE_URL}/nicola-portrait.jpg`,
      email: EMAIL,
      description:
        'Henley Business School qualified executive coach, ICF member and Chartered Fellow of the CIPD, with over 25 years supporting people and teams in high-performance environments including elite motorsport and advanced engineering.',
      worksFor: { '@id': ORG_ID },
      homeLocation: { '@type': 'Place', name: 'Oxfordshire, United Kingdom' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Henley Business School', url: 'https://www.henley.ac.uk/' },
      memberOf: [
        { '@type': 'Organization', name: 'International Coaching Federation', url: 'https://coachingfederation.org/' },
        { '@type': 'Organization', name: 'Chartered Institute of Personnel and Development', url: 'https://www.cipd.org/' },
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Professional Certificate in Executive Coaching',
          credentialCategory: 'Certificate',
          recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Henley Business School' },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Chartered Fellow, CIPD',
          credentialCategory: 'Professional fellowship',
          recognizedBy: { '@type': 'Organization', name: 'Chartered Institute of Personnel and Development' },
        },
      ],
      knowsAbout: [
        'Executive coaching',
        'Leadership development',
        'Team facilitation',
        'Organisational change',
        'Career transitions',
        'Systemic coaching',
        'Early-career development in motorsport',
      ],
      sameAs: ['https://www.linkedin.com/in/nicolasalter/'],
    },
    {
      '@type': 'Person',
      '@id': DOUG_ID,
      name: 'Doug Nevill',
      jobTitle: 'Technical and Engineering Career Mentor',
      url: `${BASE_URL}/mentoring/doug-nevill`,
      image: `${BASE_URL}/doug-portrait.jpg`,
      description:
        'Close to 30 years in Formula One car design, including leading a team of 30 engineers. Now works in World Endurance Racing and mentors engineers on motorsport careers.',
      worksFor: { '@id': ORG_ID },
      knowsAbout: [
        'Formula One car design',
        'Motorsport engineering',
        'World Endurance Racing',
        'Engineering careers',
        'Technical leadership',
      ],
      sameAs: ['https://www.linkedin.com/in/doug-nevill-bb0a382a/'],
    },
  ],
}

/* ── Per-page helpers ─────────────────────────────────────────────────── */

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  }
}

/* Builds FAQPage schema from the same array the page renders, so markup always matches visible text */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}
