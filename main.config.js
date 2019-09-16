import mainNavigation from './navigation/main.json';
import servicesWebDevelopmentElements from './navigation/servicesWebDevelopment.json';
import servicesMobileDevelopmentElements from './navigation/servicesMobileDevelopment.json';
import servicesOutstaffingElements from './navigation/servicesOutstaffing.json';
import techAppsElements from './navigation/techApps.json';
import techFrontEndElements from './navigation/techFrontEnd.json';
import techBackEndElements from './navigation/techBackEnd.json';
import techDatabaseElements from './navigation/techDatabase.json';
import techApiIntegrationElements from './navigation/techApiIntegration.json';
import worksElements from './navigation/works.json';

const maskTitle = technology => `${technology} Development`;
const maskDescription = technology => `Looking to hire ${technology} developers?
  KeenEthics, a ${technology} development company, specializes in ${technology} development services.
  Hire our ${technology} developers today.`;

const maskMapper = (t) => {
  const { name, metaTitle, metaDescription } = t;

  t.metaTitle = metaTitle || maskTitle(name);
  t.metaDescription = metaDescription || maskDescription(name);

  return t;
};

export const COMPANY_LINKS = {
  linkedin: 'https://www.linkedin.com/company/keen-ethics',
  github: 'https://github.com/keenethics',
  twitter: 'https://twitter.com/keen_ethics',
  upwork: 'https://www.upwork.com/o/companies/~0106b5437592391f94/',
  facebook: 'https://www.facebook.com/KeenEthics.development',
  instagram: 'https://www.instagram.com/keen_ethics',
};

export const config = {
  navigationMinPointsHeight: 90,
  navigation: mainNavigation,
  social: [
    {
      name: 'Facebook',
      class: 'soc-1',
      href: COMPANY_LINKS.facebook,
    },
    {
      name: 'Linkedin',
      class: 'soc-2',
      href: COMPANY_LINKS.linkedin,
    },
    {
      name: 'GitHub',
      class: 'soc-3',
      href: COMPANY_LINKS.github,
    },
    {
      name: 'Twitter',
      class: 'soc-5',
      href: COMPANY_LINKS.twitter,
    },
    {
      name: 'Upwork',
      class: 'soc-6',
      href: COMPANY_LINKS.upwork,
    },
    {
      name: 'Instagram',
      class: 'soc-instagram',
      href: COMPANY_LINKS.instagram,
    },
  ],
};
export const servicesWebDevelopmentTabs = () => servicesWebDevelopmentElements.map((e) => {
  e.metaDescription = maskDescription(e.name);
  return e;
});

export const servicesMobileDevelopment = () => servicesMobileDevelopmentElements.map((e) => {
  e.metaDescription = maskDescription(e.name2);
  return e;
});

export const servicesOutstaffing = () => servicesOutstaffingElements.map((e) => {
  e.metaDescription = maskDescription(e.name2);
  return e;
});

export const techApps = () => techAppsElements.map(maskMapper);
export const techFrontEnd = () => techFrontEndElements.map(maskMapper);
export const techBackEnd = () => techBackEndElements.map(maskMapper);
export const techDatabase = () => techDatabaseElements.map(maskMapper);
export const techApiIntegration = () => techApiIntegrationElements.map(maskMapper);

export const spaceships = {
  astronaut: {
    capacity: 2,
  },
  midshipman: {
    capacity: 3,
  },
  capt_lieutenant: {
    capacity: 3,
  },
  corvette_captain: {
    capacity: 3,
  },
  frigate_captain: {
    capacity: 4,
  },
  spaceship: {
    capacity: 1,
  },
};

export const works = worksElements;
