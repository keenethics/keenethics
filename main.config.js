const maskTitle = technology => `${technology} Development`;
const maskDescription = technology => `Looking to hire ${technology} developers?
  Keenethics, a ${technology} development company, specializes in ${technology} development services.
  Hire our ${technology} developers today.`;

const maskMapper = (t) => {
  const { name, metaTitle, metaDescription } = t;
  return {
    ...t,
    metaTitle: metaTitle || maskTitle(name),
    metaDescription: metaDescription || maskDescription(name),
  };
};

export const COMPANY_LINKS = {
  linkedin: 'https://www.linkedin.com/company/keen-ethics',
  github: 'https://github.com/keenethics',
  googlePlus: 'https://plus.google.com/103030720036135400511/about',
  twitter: 'https://twitter.com/keen_ethics',
  upwork: 'https://www.upwork.com/o/companies/~0106b5437592391f94/',
  facebook: 'https://www.facebook.com/KeenEthics.development',
};

export const config = {
  navigationMinPointsHeight: 90,
  navigation: [
    {
      name: 'Services',
      points: [
        {
          name: 'Web Development',
          description: 'Responsive and user-oriented web coding',
          metaTitle: 'Custom Web Development Company - Keenethics',
          metaDescription: 'Looking to hire web developers? Keenethics, a web development company, specializes in web development services. Hire our web developers today',
          href: '/services-web-development',
          icon: {
            name: 'web',
            alt: 'Web development',
          },
          type: 'icon',
        },
        {
          name: 'Desktop Applications',
          description: 'Native applications with flawless workflow',
          metaTitle: 'Desktop Application Development Company & Desktop Software App Development - Keenethics',
          metaDescription: 'Looking to hire Desktop Application developers? Keenethics, a desktop app development company, specializes in Desktop Application  development services. Hire our desktop app developers today',
          href: '/services-desktop-applications',
          icon: {
            name: 'dapp',
            alt: 'Desktop applications',
          },
          type: 'icon',
        },
        {
          name: 'Mobile Development',
          description: 'Slick and fast iOS and Android apps for your needs',
          metaTitle: 'Mobile App Development | Professional App Development Company - Keenethics',
          metaDescription: 'Looking to hire mobile app developers? Keenethics, a mobile app development company, specializes in mobile application development services. Hire our mobile app developers today',
          href: '/services-mobile-development',
          icon: {
            name: 'mdev',
            alt: 'Mobile development',
          },
          type: 'icon',
        },
        {
          name: 'Outstaffing',
          description: 'Process of using by one company another`s company staff',
          metaTitle: 'Outstaffing company that helps to find highly qualified developers - Keenethics',
          metaDescription: '',
          href: '/services-outstaffing',
          icon: {
            name: 'outs',
            alt: 'Outstaffing',
          },
          type: 'icon',
        },
        {
          name: 'Proof of Concept',
	        metaTitle: 'The Proof Of Concept Solution - Keenethics',
          description:
            'Realization of a certain method or idea in order to demonstrate its feasibility',
          href: '/services-proof',
          icon: {
            name: 'pcon',
            alt: 'Proof of concept',
          },
          type: 'icon',
        },
      ],
    },
    {
      name: 'Approach',
      points: [
        {
          name: 'Lean Approach',
          description: 'Systematic method for the elimination of waste',
          href: '/approach-lean-approach',
          icon: {
            name: 'lean',
            alt: 'Lean approach',
          },
          type: 'icon',
        },
        {
          name: 'Agile Project Management',
          description:
            'Alterative, incremental method of managing the design and build activities of engineering',
          href: '/approach-agile-project-management',
          metaTitle: 'Agile project management companies',
          metaDescription: 'Agile Project Management services and Agile solutions from Keenethics services help deliver your business software on time and on budget.',
          icon: {
            name: 'agile',
            alt: 'Agile project management',
          },
          type: 'icon',
        },
        {
          name: 'Minimum Viable Product',
          description:
            'A product with just enough features to gather validated learning about the product',
          metaTitle: 'MVP development company',
          metaDescription: 'Outsource your MVP development and let us build a product your customers will love. We do prototyping, design (UX/UI) and everything in between.',
          href: '/approach-minimum-viable-product',
          icon: {
            name: 'min-valuable',
            alt: 'Minimum viable product',
          },
          type: 'icon',
        },
        {
          name: 'Cutting Edge Technologies',
          description:
            'We use only the best and the most up-to-date technologies',
          href: '/approach-cutting-edge',
          icon: {
            name: 'cutting',
            alt: 'Cutting edge technologies',
          },
          type: 'icon',
        },
        {
          name: 'High Performance',
          description: 'Why our team is very creative and productive',
          href: '/approach-high-performance',
          icon: {
            name: 'high-performance',
            alt: 'High performance',
          },
          type: 'icon',
        },
        {
          name: 'High Quality Software',
          description: 'Well-tested, carefully-crafted masterpiece',
          href: '/approach-high-quality',
          icon: {
            name: 'high-quality',
            alt: 'High quality software',
          },
          type: 'icon',
        },
      ],
    },
    {
      name: 'Technologies',
      points: [
        {
          name: 'Apps',
          description: 'Slick mobile apps for both, Android and iOS',
          href: '/tech-apps',
          icon: {
            name: 'apps',
            alt: 'Apps',
          },
          type: 'icon',
        },
        {
          name: 'Front-End',
          description:
            'Front-end development is a process of the creation site’s client-side',
          href: '/tech-front-end',
          icon: {
            name: 'front-end',
            alt: 'Front-end',
          },
          type: 'icon',
        },
        {
          name: 'Back-End',
          description: 'Flawless code with no exceptions',
          href: '/tech-back-end',
          icon: {
            name: 'back-end',
            alt: 'Back-end',
          },
          type: 'icon',
        },
        {
          name: 'DataBase',
          description: 'Tons of information precisely used and securely stored',
          href: '/tech-data-base',
          icon: {
            name: 'data-base',
            alt: 'Database',
          },
          type: 'icon',
        },
        {
          name: 'API Integration',
          description: 'We will integrate everything you need',
          href: '/tech-api-integration',
          icon: {
            name: 'API-integration',
            alt: 'API integration',
          },
          type: 'icon',
        },
      ],
    },
    {
      name: 'Portfolio',
      description: '???',
      metaTitle: 'Portfolio Keenethics',
      metaDescription: '???',
      href: '/portfolio',
      points: [
        {
          name: 'All',
          href: '/portfolio?chosen=All',
        },
        {
          name: 'Business apps',
          href: '/portfolio?chosen=Business apps',
        },
        {
          name: 'Educational apps',
          href: '/portfolio?chosen=Educational apps',
        },
        {
          name: 'Consumer apps',
          href: '/portfolio?chosen=Consumer apps',
        },
        {
          name: 'Other',
          href: '/portfolio?chosen=Other',
        },
      ],
    },
    {
      name: 'Blog',
      description: 'Articles based on our experience',
      metaTitle: 'Web Development News & Ideas - Blog Keenethics',
      metaDescription: 'Read the latest news and opinions about software development from Keenethics Blog - all articles are based on our experience!',
      href: '/blog',
    },
    {
      name: 'Careers',
      description: '',
      metaTitle: 'Careers at Software Development Company - Keenethics',
      metaDescription: 'Careers at software development company Keenethics',
      href: '/careers',
    },
    {
      name: 'About',
      points: [
        {
          name: 'Team',
          description: 'Meat our Squad',
          href: '/about-team',
          icon: {
            name: 'team',
            alt: 'Team',
          },
          type: 'icon',
        },
        {
          name: 'Open Source',
          description: 'Ethical support for the community',
          href: '/about-open-source',
          icon: {
            name: 'open-source',
            alt: 'Open source',
          },
          type: 'icon',
        },
      ],
    },
    {
      name: 'Contacts',
      description: 'Have an idea? We can`t wait to help you implement it!',
      metaTitle: 'Contacts - Office And Locations - Keenethics',
      metaDescription: 'Have an idea? We can`t wait to help you implement it! Contact Keenethics software development company to get a professional insight into your business idea!',
      href: '/contacts',
      type: 'hidden',
    },
  ],
  careers: [
    {
      position: 'Full Stack js Capt-lieutenant',
      experience: '5 years of experience',
      description: `<p>Mobile app development is a time-consuming and creative process at the same
      time. If we want to make a mobile app that is talked about, downloaded and opened again
      and again, it&apos;s not enough to make just a technically perfect product.</p>
      <p>We need to invest in it all the knowledge and inspiration. Both, the app developers team
      and business side must ${'get'} involved to a process.</p>`,
      image: 'corvette_captain',
    },
    {
      position: 'Meteor js Astronaut',
      experience: '12 years of experience',
      description: `<p>Time-consuming and creative downloaded process at the same time. If we want to
      make a mobile app that is talked about, and opened again and invest again, it&apos;s not
      enough to make just a technically perfect product.</p>
      <p>We need to invest in it all the knowledge and inspiration. Both, the app developers team and
      business side must and opened agai ${'get'} involved to a process.</p>`,
      image: 'astronaut',
    },
    {
      position: 'Full Stack js MidShipman',
      experience: '2 years of experience',
      description: `<p>Time-consuming and creative downloaded process at the same time. If we want to
      make a mobile app that is talked about, and opened again and invest again, it&apos;s not
      enough to make just a technically perfect product.</p>
      <p>We need to invest in it all the knowledge and inspiration. Both, the app developers team and
      business side must and opened agai ${'get'} involved to a process.</p>`,
      image: 'counter_admiral',
    },
    {
      position: 'Full Stack js Capt',
      experience: '5 years of experience',
      description: `<p>Mobile app development is a time-consuming and creative process at the same
      time. If we want to make a mobile app that is talked about, downloaded and opened again
      and again, it&apos;s not enough to make just a technically perfect product.</p>
      <p>We need to invest in it all the knowledge and inspiration. Both, the app developers team
      and business side must ${'get'} involved to a process.</p>`,
      image: 'corvette_captain',
    },
    {
      position: 'Meteor js',
      experience: '12 years of experience',
      description: `<p>Time-consuming and creative downloaded process at the same time. If we want to
      make a mobile app that is talked about, and opened again and invest again, it&apos;s not
      enough to make just a technically perfect product.</p>
      <p>We need to invest in it all the knowledge and inspiration. Both, the app developers team and
      business side must and opened agai ${'get'} involved to a process.</p>`,
      image: 'astronaut',
    },
    {
      position: 'Full Stack js',
      experience: '2 years of experience',
      description: `<p>Time-consuming and creative downloaded process at the same time. If we want to
      make a mobile app that is talked about, and opened again and invest again, it&apos;s not
      enough to make just a technically perfect product.</p>
      <p>We need to invest in it all the knowledge and inspiration. Both, the app developers team and
      business side must and opened agai ${'get'} involved to a process.</p>`,
      image: 'counter_admiral',
    },
  ],
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
      name: 'GooglePlus',
      class: 'soc-4',
      href: COMPANY_LINKS.googlePlus,
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
  ],
};
export const servicesWebDevelopmentTabs = () => {
  const elements = [
    {
      href: '/services-web-development-e-commerce',
      name: 'E-Commerce',
      metaTitle: 'eCommerce Software Development Company | eCommerce Developers - Keenethics',
      description: 'Building amazing e-commerce products',
      icon: 'icon-e',
    },
    {
      href: '/services-web-development-chatbot',
      name: 'Chat Bots',
      metaTitle: 'Chatbot Development Company | Microsoft Bot Framework Development - Keenethics',
      description: 'Talking to AI was never that easy',
      icon: 'icon-chat-bots',
    },
    {
      href: '/services-web-development-node',
      name: 'Website Node JS',
      metaTitle: 'Node.Js Development Company | Node.js Website Development - Keenethics',
      description: 'Leading and rule-breaking technology',
      icon: 'icon-node',
    },
    {
      href: '/services-web-development-meteor',
      name: 'Meteor.js',
      metaTitle: 'Meteor JS Development Company‎ - Keenethics',
      description: 'An ambitious fullstack-framework',
      icon: 'icon-meteor',
    },
    {
      href: '/services-web-development-programmable-voice',
      name: 'Programmable Voice',
      metaTitle: 'Programmable Voice Development - Keenethics',
      description: 'When computer can replace a human',
      icon: 'icon-voice',
    },
  ];
  return elements.map(e => ({
    ...e,
    metaDescription: maskDescription(e.name),
  }));
};

export const servicesMobileDevelopment = () => {
  const elements = [
    {
      href: '/services-mobile-development-apple',
      name: 'iOS development',
      name2: 'iOS',
      metaTitle: 'iOS Development Company | App Design & Development‎ - Keenethics',
      tabsDescription: '14 apps developed',
      description: 'Mobile applications for popular platform',
      icon: 'icon-apple',
    },
    {
      href: '/services-mobile-development-android',
      name: 'Android development',
      name2: 'Android',
      metaTitle: 'Android App Development Company - Keenethics',
      tabsDescription: '23 apps developed',
      description: 'Most popular Linux-based mobile OS',
      icon: 'icon-android',
    },
  ];
  return elements.map(e => ({
    ...e,
    metaDescription: maskDescription(e.name2),
  }));
};

export const servicesOutstaffing = () => {
  const elements = [
    {
      href: '/services-outstaffing-senior',
      name: 'Senior developer',
      name2: 'Senior',
      metaTitle: 'Outstaffing company that helps to find highly qualified Senior developers - Keenethics',
      tabsDescription: '4 in our team',
      description: 'Best skills and expertise',
      icon: 'icon-o-1',
    },
    {
      href: '/services-outstaffing-team',
      name: 'Dedicated team',
      name2: 'Dedicated team',
      metaTitle: 'Dedicated Team Of Developers. Offshore Outsourcing Software Development‎ - Keenethics',
      tabsDescription: '4-8 people',
      description: 'Great developers who already have multiple projects behind',
      icon: 'icon-o-2',
    },
    {
      href: '/services-outstaffing-technical-consultancy',
      name: 'Technical consultancy',
      name2: 'Technical consultancy',
      metaTitle: 'Technical consulting | Technical consultancy‎ - Keenethics',
      tabsDescription: '24 hours for an answer',
      description: '24 hours for an answer',
      icon: 'icon-o-3',
    },
  ];

  return elements.map(e => ({
    ...e,
    metaDescription: maskDescription(e.name2),
  }));
};

export const techApps = () => {
  const elements = [
    {
      href: '/tech-apps-phonegap',
      name: 'PhoneGap',
      description:
        'Framework for building mobile applications reusing existing codebase',
      icon: 'icon-pg',
    },
    {
      href: '/tech-apps-electron',
      name: 'Electron',
      description: 'JS-application on your desktop',
      icon: 'icon-en',
    },
    {
      href: '/tech-apps-accelerated-mobile-pages',
      name: 'Accelerated Mobile Pages (AMP)',
      metaTitle: 'Accelerated Mobile Pages (AMP) Development Company - Keenethics',
      description: 'Accelerated Mobile Pages improve user experience and load instantly within search results page in mobile devices. Contact Keenethics team for AMP Website Design and Development Services.',
      icon: 'icon-acc',
    },
    {
      href: '/tech-apps-progressive-web-apps',
      name: 'Progressive Web Apps',
      description: 'Working with web-applications offline',
      icon: 'icon-prog',
    },
    {
      href: '/tech-apps-react-native',
      name: 'React Native',
      description: 'Using native mobile UI-elements with crossplatform JS-code',
      icon: 'icon-rn',
    },
    {
      href: '/tech-apps-cordova',
      name: 'Cordova',
      description:
        'Open-source framework for cross-platform mobile applications',
      icon: 'icon-cv',
    },
  ];
  return elements.map(maskMapper);
};

export const techFrontEnd = () => {
  const elements = [
    {
      href: '/tech-front-end-react',
      name: 'React',
      description: 'Library for blazing-fast UI-rendering va virtual-DOM',
      icon: 'icon-rn',
    },
    {
      href: '/tech-front-end-redux',
      name: 'Redux',
      description: 'Organizing state in React-applciation',
      icon: 'icon-redux',
    },
    {
      href: '/tech-front-end-angular',
      name: 'Angular',
      description: 'Google-backed frontend-framework',
      icon: 'icon-ang',
    },
    {
      href: '/tech-front-end-aurelia',
      name: 'Aurelia',
      description:
        'Ambitious Angular-competitor by one of former Angular-deveopers',
      icon: 'icon-aurelia',
    },
    {
      href: '/tech-front-end-react-native',
      name: 'React Native',
      description:
        'Speeding up hybrid mobile-apps by using native mobile UI-elements',
      icon: 'icon-rn',
    },
    {
      href: '/tech-front-end-angular-2',
      name: 'Angular 2.0',
      description: 'Next-generation frontend-framework',
      icon: 'icon-ang',
    },
    {
      href: '/tech-front-end-vue',
      name: 'Vue JS',
      description: 'Popular lightweight library for UI',
      icon: 'icon-vue',
    },
    {
      href: '/tech-front-end-next',
      name: 'Next JS',
      description:
        'Fullstack framework aiming simplicity combined with powerful features',
      icon: 'icon-next',
    },
  ];
  return elements.map(maskMapper);
};

export const techBackEnd = () => {
  const elements = [
    {
      href: '/tech-back-end-express',
      name: 'Express',
      description: 'Most popular backend framework on top of node.js',
      icon: 'icon-ex',
    },
    {
      href: '/tech-back-end-meteor',
      name: 'Meteor',
      description: 'Fullstack real-time framework',
      icon: 'icon-meteor_',
    },
    {
      href: '/tech-back-end-hapi',
      name: 'HAPI',
      description: 'node.js-based backend framework',
      icon: 'icon-hapi',
    },
  ];
  return elements.map(maskMapper);
};

export const techDatabase = () => {
  const elements = [
    {
      href: '/tech-data-base-mongo',
      name: 'Mongo',
      description: 'Fast noSQL database',
      icon: 'icon-mongo',
    },
    {
      href: '/tech-data-base-mysql',
      name: 'MySQL',
      description: 'Most popular SQL-database',
      icon: 'icon-mysql',
    },
    {
      href: '/tech-data-base-postgresql',
      name: 'PostgreSQL',
      description: 'SQL-database with advanced features',
      icon: 'icon-post',
    },
  ];
  return elements.map(maskMapper);
};

export const techApiIntegration = () => {
  const elements = [
    {
      href: '/tech-api-integration-rest',
      name: 'REST',
      description: 'Organizing your backend endpoints',
      icon: 'icon-rest',
    },
    {
      href: '/tech-api-integration-paypal',
      name: 'PayPal',
      description: 'Sending and receiving money online',
      icon: 'icon-paypal',
    },
    {
      href: '/tech-api-integration-graphql',
      name: 'GraphQL',
      description: 'Smart organizing of dataflow between frontend and backend',
      icon: 'icon-grap',
    },
    {
      href: '/tech-api-integration-braintree',
      name: 'Braintree',
      description:
        'Solution for accepting, splitting andprocessing payments online',
      icon: 'icon-brain',
    },
    {
      href: '/tech-api-integration-elastic-search',
      name: 'Elastic Search',
      description: 'Popular search-engine',
      icon: 'icon-el',
    },
    {
      href: '/tech-api-integration-stripe',
      name: 'Stripe',
      description: 'Developer-friendly payments service',
      icon: 'icon-stripe',
    },
  ];
  return elements.map(maskMapper);
};

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

export const team = [
  {
    position: 'Missions control',
    key: 'spaceship',
    people: [
      {
        name: 'Oleksiy P.',
        position: 'Chief of Meteor Flight Research Center',
        description: 'He has spent the third-longest time in Meteor.js space of any person. He supervises research and development of Meteor flights.',
        avatar: 'alex_p.jpg',
      },
      {
        name: 'Max S.',
        position: 'Chief of The Astronaut Office',
        description: 'His responsibilities are coordination, scheduling, and control of all Keenethics astronauts activities.',
        avatar: 'maks_s.jpg',
      },
      {
        name: 'Viktoria M.',
        position: 'Astronaut Interaction Specialist',
        description: 'Victoria keeps track of all the movement between the missions, helps new Astronauts adopt and remain in shape over the course of their journey on our ship.',
        avatar: 'viktoria_m.jpg',
      },
      {
        name: 'Alexandr S.',
        position: 'Mission Support Officer',
        description: 'Knows the structure of the ship by heart. He has a unique feeling that helps him find breakages and ensure astronauts safety.',
        avatar: 'sasha_s.jpg',
      },
      {
        name: 'Ihor F.',
        position: 'Recruitment&Brand Mission Specialist',
        description: 'Knows no boundaries, he will find anyone anywhere. Don’t even try to hide from him.',
        avatar: 'ihor_f.jpg',
      },
      {
        name: 'Oksana P.',
        position: 'Space Pixel Commander',
        description: 'Can turn a few words or a code line into something beautiful.',
        avatar: 'oksana_p.jpg',
      },
      {
        name: 'Liuba S.',
        position: 'Spaceflight Mission Specialist',
        description: 'Discipline is her forte, she is the most punctual astronaut.',
        avatar: 'liuba_s.jpg',
      },
      {
        name: 'Artem S.',
        position: 'Mission Support Officer',
        description: '',
        avatar: 'artem_s.jpg',
      },
      {
        name: 'Ulyana L.',
        position: 'Space Talants Searcher',
        description: '',
        avatar: 'ulyana_l.jpg',
      },
      {
        name: 'Anna D.',
        position: 'Spaceflight Mission Specialist',
        description: '',
        avatar: 'anna_d.jpg',
      },
      {
        name: 'Tamara A.',
        position: 'Space Office Manager',
        description: '',
        avatar: 'tamara_a.jpg',
      },
    ],
  },
  {
    position: 'Frigate captain',
    key: 'frigate_captain',
    people: [
      {
        name: 'Vlad O.',
        position: 'Full-stack js Frigate Captain',
        description:
          'Has a medal "For Merit in Space Exploration" for achievements in outer space researching, development and reconnaissance.',
        avatar: 'vlad_o.jpg',
      },
      {
        name: 'Sergey G.',
        position: 'Full-stack js Frigate captain',
        description:
          'A Strong pilot with cool UX and UI feeling and game development background. Leads gamification at Keenethics flagship.',
        avatar: 'sergei_g.jpg',
      },
    ],
  },
  {
    position: 'Corvette capt',
    key: 'corvette_captain',
    people: [
      {
        name: 'Yara M.',
        position: 'Full-stack js Corvette Capt',
        description:
          'She is the first woman to have flown in Keenethics space, having been selected from more than five finalists to pilot Keen project applicants.',
        avatar: 'yara_m.jpg',
      },
      {
        name: 'Taras Y.',
        position: 'Full-stack js Corvette Capt',
        description:
          'Was chosen from a final pool of 13 candidates to fly on Reaction Commerce first manned space mission.',
        avatar: 'taras_y.jpg',
      },
      {
        name: 'Serhii S.',
        position: 'Full-stack js Corvette Capt ',
        description:
          'Super friendly, quiet and hard-working astronaut.',
        avatar: 'serhii_s.jpg',
      },
      {
        name: 'Yanul M.',
        position: 'Full-stack js Corvette Capt',
        description:
          'Space hot fire-show amateur, got an honors diploma in the flight school, acts as a hot second pilot in the hot shuttle mission.',
        avatar: 'maryna_y.png',
      },
      {
        name: 'Andrij T.',
        position: 'Full-stack js Corvette Capt',
        description:
          'Ph. D, he has firm and scientific approach to problem-solving and he used to be a pilot on several shuttle missions.',
        avatar: 'andrew_t.jpg',
      },
      {
        name: 'Max F.',
        position: 'Full-stack js Corvette Capt',
        description:
          'Space gamer. He is also one of the pilots who flies on one of the biggest Meteor Shuttle mission in the world.',
        avatar: 'maksym_f.jpg',
      },
      {
        name: 'Mykhailo F.',
        position: 'Full-stack js Corvette Capt',
        description:
          'Has space banking background and is good at front-end and mobile fields.',
        avatar: 'misha_f.jpg',
      },
      {
        name: 'Arsen T.',
        position: 'Full-stack js Corvette Capt',
        description:
          'Space sweet Karmaman astronaut. He knows how to keep your Karma clean.',
        avatar: 'arsen_t.jpg',
      },
      {
        name: 'Golomb Y.',
        position: 'Full-stack js Corvette Capt',
        description:
          'Participated in large battles as a Rookie and dreams about leading his own squad',
        avatar: 'ura_g.jpg',
      },
    ],
  },
  {
    position: 'Capt-lieutenant',
    key: 'capt_lieutenant',
    people: [
      {
        name: 'Ihor V.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'The youngest midshipman from outer space. Cool and steady even when approaching black hole.',
        avatar: 'igor_v.jpg',
      },
      {
        name: 'Yuriy S.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'Was able to capture new alien ship on his first flight. Due to excellent communicative skills, first comes into contact with unknown galactic creatures.',
        avatar: 'yurii_s.jpg',
      },
      {
        name: 'Volodymyr A.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'He was able to transform his shuttle into cluster of micro-ships that are able to self-repair. This cluster is the most resilient fleet in the world.',
        avatar: 'volodiy_a.jpg',
      },
      {
        name: 'Taras P.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'He has a diligent approach to every task. He is patient having long commutes to the station every day. Fond of remote missions in deep space.',
        avatar: 'taras_p.jpg',
      },
      {
        name: 'Rostyslav T.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'Was create AI-bots powered space craft. You may never be sure whether you are talking to him, or to his AI.',
        avatar: 'rostyk_t.jpg',
      },
      {
        name: 'Vlad E.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'Literally knows what «with fire and sword» means.',
        avatar: 'vlad_e.jpg',
      },
    ],
  },
  {
    position: 'Midshipman',
    key: 'midshipman',
    people: [
    ],
  },
  {
    position: 'Astronaut',
    key: 'astronaut',
    people: [
      {
        name: 'Taras K.',
        position: 'Full-stack js Astronaut',
        description: '',
        avatar: 'taras_k.jpg',
      },
      {
        name: 'Oleh K.',
        position: 'Full-stack js Astronaut',
        description: '',
        avatar: 'oleh_k.jpg',
      },
      {
        name: 'Max S.',
        position: 'Full-stack js Astronaut',
        description: '',
        avatar: 'max_s.jpg',
      },
      {
        name: 'Vadym S.',
        position: 'Full-stack js Astronaut',
        description: '',
        avatar: 'vadym_s.jpg',
      },
      {
        name: 'Dmytro P.',
        position: 'Full-stack js Astronaut',
        description: '',
        avatar: 'dmytro_p.jpg',
      },
    ],
  },
];

export const works = [
  {
    title: 'Knotel',
    href: '/project-knotel',
    imgSrc: 'Knotel.jpg',
    category: {
      main: ['Consumer apps'],
      additional: ['Real Estate'],
    },
    description: 'Headquarters as a Service',
  },
  {
    title: 'The Check Network',
    href: '/project-the-check-network',
    imgSrc: 'The-Check-Network.jpg',
    category: {
      main: ['Consumer apps'],
      additional: ['E-commerce'],
    },
    description: 'Commerce platform for effective SEO , It also allows for combining of several commerce platforms in one',
  },
  {
    title: 'Pollen',
    href: '/project-pollen',
    imgSrc: 'Pollen.jpg',
    category: {
      main: ['Educational apps'],
    },
    description: 'Organizing social-campaigns via Gmail contacts',
  },
  {
    title: 'Wargaming',
    href: '/project-wargaming',
    category: {
      main: ['Business apps'],
    },
    imgSrc: 'Wargaming.jpg',
    description: 'Platform for forecasting and validation of business strategies for companies.',
  },
  {
    title: 'BarFrogs',
    href: '/project-barfrogs',
    category: {
      main: ['Consumer apps'],
    },
    imgSrc: 'BarFrogs.jpg',
    description: 'Find an event you are interested in',
  },
  {
    title: 'Black Book',
    href: '/project-black-book',
    category: {
      main: ['Business apps'],
    },
    imgSrc: 'Black-Book.jpg',
    description: 'Display the statistics of company employees',
  },
  {
    title: 'ComicEnglish',
    href: '/project-comic-english',
    imgSrc: 'ComicEnglish.jpg',
    category: {
      main: ['Educational apps'],
      additional: ['E-Learning'],
    },
    description: 'Learn English while chatting with AI',
  },
  {
    title: 'Paceup',
    href: '/project-paceup',
    imgSrc: 'paceup.png',
    category: {
      main: ['Business apps'],
      additional: ['AI'],
    },
    description: 'Increasing loyalty of existing clients',
  },
  {
    title: 'Knote',
    href: '/project-knote',
    imgSrc: 'Knote.jpg',
    category: {
      main: ['Business apps'],
      additional: ['Team collaboration tool'],
    },
    description: 'A tool for online collaboration and task-management',
  },
  {
    title: 'My Grass Growth',
    href: '/project-my-grass-growth',
    imgSrc: 'My-Grass-Growth.jpg',
    category: {
      main: ['Business apps'],
      additional: ['Farming'],
    },
    description: 'Keep you cows healthy and well-fed',
  },
  {
    title: 'WorkBooking',
    href: '/project-workbooking',
    imgSrc: 'Workbooking.jpg',
    category: {
      main: ['Consumer apps'],
      additional: ['Job platform'],
    },
    description: 'Get hired or find someone to do the job for you',
  },
  {
    title: 'Tetrami',
    href: '/project-tetrami',
    imgSrc: 'Tetrami.jpg',
    category: {
      main: ['Consumer apps'],
      additional: ['E-commerce'],
    },
    description: 'Online discounting',
  },
  {
    title: 'Phenix',
    href: '/project-phenix',
    imgSrc: 'Phenix.jpg',
    category: {
      main: ['Business apps'],
    },
    description: 'Online video-streaming',
  },
  {
    title: 'Plutio',
    href: '/project-plutio',
    imgSrc: 'Plutio.jpg',
    category: {
      main: ['Business apps'],
    },
    description: 'Business management platform',
  },
  {
    title: 'SelfLeaders',
    href: '/project-self-leaders',
    imgSrc: 'SelfLeaders.jpg',
    category: {
      main: ['Educational apps'],
      additional: ['E-Learning'],
    },
    description: 'Personal Growth Tool',
  },
  {
    title: 'Pree',
    href: '/project-pree',
    imgSrc: 'Pree.jpg',
    category: {
      main: ['Consumer apps'],
      additional: ['IoT'],
    },
    description: 'Stop losing your stuff',
  },
];
