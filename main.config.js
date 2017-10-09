const maskTitle = technology => `${technology} Development`;
const maskDescription = technology => `Looking to hire ${technology} developers?
  Appnovation, a ${technology} development company, specializes in ${technology} development services.
  Hire our ${technology} developers today.`;

export const config = {
  navigationMinPointsHeight: 90,
  navigation: [
    {
      name: 'Services',
      points: [
        {
          name: 'Web Development',
          description: 'Responsive and user-oriented web coding',
          metaTitle: 'Professional Web Design & Development Company',
          metaDescription: 'Looking to hire web developers? Appnovation, a web development company, specializes in web development services. Hire our web developers today',
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
          metaTitle: 'Desktop Application Development & Desktop Software App Development',
          metaDescription: 'Looking to hire Desktop Application developers? Appnovation, a desktop app development company, specializes in Desktop Application  development services. Hire our desktop app developers today',
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
          metaTitle: 'Mobile Application Development Services & Custom Apps Development Company',
          metaDescription: 'Looking to hire mobile app developers? Appnovation, a mobile app development company, specializes in mobile application development services. Hire our mobile app developers today',
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
          metaTitle: '',
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
      points: [
        {
          name: 'Knotel',
          description: 'Headquarters as a Service',
          href: '/project-knotel',
          number: '01',
          type: 'number',
        },
        {
          name: 'ComicEnglish',
          description: 'Learn English while chatting with AI',
          href: '/project-comic-english',
          number: '02',
          type: 'number',
        },
        {
          name: 'Pollen',
          description: 'Organizing social-campaigns via Gmail contacts',
          href: '/project-pollen',
          number: '03',
          type: 'number',
        },
        {
          name: 'Black Book',
          description: 'Display the statistics of company employees',
          href: '/project-black-book',
          number: '04',
          type: 'number',
        },
        {
          name: 'TheCheckNetwork',
          description: 'SEO-optimization as a service',
          href: '/project-the-check-network',
          number: '05',
          type: 'number',
        },
        {
          name: 'Wargaming',
          description: 'Economic wars game',
          href: '/project-wargaming',
          number: '06',
          type: 'number',
        },
        {
          name: 'Knote',
          description: 'A tool for online collaboration and task-management',
          href: '/project-knote',
          number: '07',
          type: 'number',
        },
        {
          name: 'My Grass Growth',
          description: 'Keep you cows healthy and well-fed',
          href: '/project-my-grass-growth',
          number: '08',
          type: 'number',
        },
        {
          name: 'WorkBooking',
          description: 'Get hired or find someone to do the job for you',
          href: '/project-workbooking',
          number: '09',
          type: 'number',
        },
        {
          name: 'BarFrogs',
          description: 'Find an event you are interested in',
          href: '/project-barfrogs',
          number: '10',
          type: 'number',
        },
        {
          name: 'Prix',
          description: 'Increasing loyalty of existing clients',
          href: '/project-prix',
          number: '11',
          type: 'number',
        },
        {
          name: 'CareCru',
          description: 'Increasing loyalty of existing clients',
          href: '/project-carecru',
          number: '12',
          type: 'number',
        },
        {
          name: 'Tetrami',
          description: 'Online discounting',
          href: '/project-tetrami',
          number: '13',
          type: 'number',
        },
        {
          name: 'Phenix',
          description: 'Online video-streaming',
          href: '/project-phenix',
          number: '14',
          type: 'number',
        },
        {
          name: 'Plutio',
          description: 'Business management platform',
          href: '/project-plutio',
          number: '15',
          type: 'number',
        },
        {
          name: 'SelfLeaders',
          description: 'Personal Growth Tool',
          href: '/project-self-leaders',
          number: '16',
          type: 'number',
        },
      ],
    },
    {
      name: 'Blog',
      description: 'Articles based on our experience',
      href: '/blog',
    },
    {
      name: 'Careers',
      description: '',
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
      href: 'https://www.facebook.com/KeenEthics.development',
    },
    {
      name: 'Linkedin',
      class: 'soc-2',
      href: 'https://www.linkedin.com/company/keen-ethics',
    },
    {
      name: 'Github',
      class: 'soc-3',
      href: 'https://github.com/keenethics',
    },
    {
      name: 'GooglePlus',
      class: 'soc-4',
      href: 'https://plus.google.com/103030720036135400511/about',
    },
    {
      name: 'Twitter',
      class: 'soc-5',
      href: 'https://twitter.com/keen_ethics',
    },
    {
      name: 'Upwork',
      class: 'soc-6',
      href: 'https://www.upwork.com/o/companies/~0106b5437592391f94/',
    },
    {
      name: 'Medium',
      class: 'soc-7',
      href: 'https://blog.keenethics.com/',
    },
  ],
};
export const servicesWebDevelopmentTabs = () => {
  const elements = [
    {
      href: '/services-web-development-e-commerce',
      name: 'E-Commerce',
      description: 'Building amazing e-commerce products',
      icon: 'icon-e',
    },
    {
      href: '/services-web-development-chatbot',
      name: 'Chat Bots',
      description: 'Talking to AI was never that easy',
      icon: 'icon-chat-bots',
    },
    {
      href: '/services-web-development-node',
      name: 'Website Node JS',
      description: 'Leading and rule-breaking technology',
      icon: 'icon-node',
    },
    {
      href: '/services-web-development-meteor',
      name: 'Meteor.js',
      description: 'An ambitious fullstack-framework',
      icon: 'icon-meteor',
    },
    {
      href: '/services-web-development-programmable-voice',
      name: 'Programmable Voice',
      description: 'When computer can replace a human',
      icon: 'icon-voice',
    },
  ];
  return elements.map(e => ({
    ...e,
    metaTitle: maskTitle(e.name),
    metaDescription: maskDescription(e.name),
  }));
};

export const servicesMobileDevelopment = () => {
  const elements = [
    {
      href: '/services-mobile-development-apple',
      name: 'iOS development',
      name2: 'iOS',
      tabsDescription: '14 apps developed',
      description: 'Mobile applications for popular platform',
      icon: 'icon-apple',
    },
    {
      href: '/services-mobile-development-android',
      name: 'Android development',
      name2: 'Android',
      tabsDescription: '23 apps developed',
      description: 'Most popular Linux-based mobile OS',
      icon: 'icon-android',
    },
  ];
  return elements.map(e => ({
    ...e,
    metaTitle: maskTitle(e.name2),
    metaDescription: maskDescription(e.name2),
  }));
};

export const servicesOutstaffing = () => {
  const elements = [
    {
      href: '/services-outstaffing-senior',
      name: 'Senior developer',
      name2: 'Senior',
      tabsDescription: '4 in our team',
      description: 'Best skills and expertise',
      icon: 'icon-o-1',
    },
    {
      href: '/services-outstaffing-team',
      name: 'Dedicated team',
      name2: 'Dedicated team',
      tabsDescription: '4-8 people',
      description: 'Great developers who already have multiple projects behind',
      icon: 'icon-o-2',
    },
    {
      href: '/services-outstaffing-technical-consultancy',
      name: 'Technical consultancy',
      name2: 'Technical consultancy',
      tabsDescription: '24 hours for an answer',
      description: '24 hours for an answer',
      icon: 'icon-o-3',
    },
  ];

  return elements.map(e => ({
    ...e,
    metaTitle: maskTitle(e.name2),
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
      name: 'Accelerated Mobile Pages',
      description: 'High speed for content loading and great Google-ranking',
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
  return elements.map(e => ({
    ...e,
    metaTitle: maskTitle(e.name),
    metaDescription: maskDescription(e.name),
  }));
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
  return elements.map(e => ({
    ...e,
    metaTitle: maskTitle(e.name),
    metaDescription: maskDescription(e.name),
  }));
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
  return elements.map(e => ({
    ...e,
    metaTitle: maskTitle(e.name),
    metaDescription: maskDescription(e.name),
  }));
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
  return elements.map(e => ({
    ...e,
    metaTitle: maskTitle(e.name),
    metaDescription: maskDescription(e.name),
  }));
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
  return elements.map(e => ({
    ...e,
    metaTitle: maskTitle(e.name),
    metaDescription: maskDescription(e.name),
  }));
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

export const superteam = [
  {
    name: 'Oleksiy P.',
    position: 'Chief of Meteor Flight Research Center',
    description:
      'He has spent the third-longest time in Meteor.js space of any person. He supervises research and development of Meteor flights.',
    avatar: 'alex_p.jpg',
  },
  {
    name: 'Max S.',
    position: 'Chief of The Astronaut Office',
    description:
      'His responsibilities are coordination, scheduling, and control of all Keenethics astronauts activities.',
    avatar: 'maks_s.jpg',
  },
  {
    name: 'Alexey H.',
    position: 'International Mission Specialist',
    description:
      'Intergalactic diplomat who speaks several alien languages. He is in constant search of new life forms outside our galaxy in order to establish contact and exchange resources.',
    avatar: 'alex_h.jpg',
  },
  {
    name: 'Viktoria M.',
    position: 'Astronaut Interaction Specialist',
    description:
      'Victoria keeps track of all the movement between the missions, helps new Astronauts adopt and remain in shape over the course of their journey on our ship.',
    avatar: 'viktoria_m.jpg',
  },
  {
    name: 'Sofia I.',
    position: 'Steward',
    description:
      'She has necessary organizational skills and she is good in orbital and interplanetary communication. She can even talk with creatures from outer space.',
    avatar: 'sofia_i.jpg',
  },
  {
    name: 'Alexandr S.',
    position: 'Mission Support Officer',
    description:
      'Knows the structure of the ship by heart. He has a unique feeling that helps him find breakages and ensure astronauts safety.',
    avatar: 'sasha_s.jpg',
  },
];

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
        name: 'Alexey H.',
        position: 'International Mission Specialist',
        description: 'Intergalactic diplomat who speaks several alien languages. He is in constant search of new life forms outside our galaxy in order to establish contact and exchange resources.',
        avatar: 'alex_h.jpg',
      },
      {
        name: 'Viktoria M.',
        position: 'Astronaut Interaction Specialist',
        description: 'Victoria keeps track of all the movement between the missions, helps new Astronauts adopt and remain in shape over the course of their journey on our ship.',
        avatar: 'viktoria_m.jpg',
      },
      {
        name: 'Sofia I.',
        position: 'Steward',
        description: 'She has necessary organizational skills and she is good in orbital and interplanetary communication. She can even talk with creatures from outer space.',
        avatar: 'sofia_i.jpg',
      },
      {
        name: 'Alexandr S.',
        position: 'Mission Support Officer',
        description: 'Knows the structure of the ship by heart. He has a unique feeling that helps him find breakages and ensure astronauts safety.',
        avatar: 'sasha_s.jpg',
      },
    ],
  },
  {
    position: 'Frigate captain',
    key: 'frigate_captain',
    people: [
      {
        name: 'Illya S.',
        position: 'Full-stack js Frigate Captain',
        description:
          'The most peaceful astronaut. He stays calm even in the most dangerous situations. This skill he has gained through intergalactic hitchhiking.',
        avatar: 'illya_s.jpg',
      },
      {
        name: 'Vlad O.',
        position: 'Full-stack js Frigate Captain',
        description:
          'Has a medal "For Merit in Space Exploration" for achievements in outer space researching, development and reconnaissance.',
        avatar: 'vlad_o.jpg',
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
        name: 'Taras B.',
        position: 'Full-stack js Corvette Capt',
        description:
          'Best sailor on duty. He does his work while the rest of spacecraft members are asleep.',
        avatar: 'taras_b.jpg',
      },
      {
        name: 'Mykhailo O.',
        position: 'Full-stack js Corvette Capt ',
        description:
          'Space Meteor.js Developer who has logged around 700 hours of moonwalk time on Upwork over five successful Meteor Shuttle missions.',
        avatar: 'michael_rich.jpg',
      },
    ],
  },
  {
    position: 'Capt-lieutenant',
    key: 'capt_lieutenant',
    people: [
      {
        name: 'Sergey G.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'A Strong pilot with cool UX and UI feeling and game development background. Leads gamification at Keenethics flagship.',
        avatar: 'sergei_g.jpg',
      },
      {
        name: 'Taras Y.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'Was chosen from a final pool of 13 candidates to fly on Reaction Commerce first manned space mission.',
        avatar: 'taras_y.jpg',
      },
      {
        name: 'Andrij T.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'Ph. D, he has firm and scientific approach to problem-solving and he used to be a pilot on several shuttle missions.',
        avatar: 'andrew_t.jpg',
      },
      {
        name: 'Yanul M.',
        position: 'Full-stack js Midshipman',
        description:
          'Space hot fire-show amateur, got an honors diploma in the flight school, acts as a hot second pilot in the hot shuttle mission.',
        avatar: 'maryna_y.png',
      },
      {
        name: 'Mykhailo P.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'Honorable and experienced combattant in Meteor space, has been working during many years in our space sector.',
        avatar: 'misha_p.jpg',
      },
      {
        name: 'Arsen T.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'Space sweet Karmaman astronaut. He knows how to keep your Karma clean.',
        avatar: 'arsen_t.jpg',
      },
      {
        name: 'Sasha B.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'Best student of Astronaut Training Center. He is JavaScript enthusiast, React evangelist, Space archeologist.',
        avatar: 'alex_b.jpg',
      },
      {
        name: 'Golomb Y.',
        position: 'Full-stack js Capt-lieutenant',
        description:
          'Participated in large battles as a Rookie and dreams about leading his own squad',
        avatar: 'ura_g.jpg',
      },
    ],
  },
  {
    position: 'Midshipman',
    key: 'midshipman',
    people: [
      {
        name: 'Max F.',
        position: 'Full-stack js Midshipman',
        description:
          'Space gamer. He is also one of the pilots who flies on one of the biggest Meteor Shuttle mission in the world.',
        avatar: 'maksym_f.jpg',
      },
      {
        name: 'Mykola M.',
        position: 'Full-stack js Midshipman',
        description:
          'Space illusionist, together with Stanley Kubrick he produced all the layouts for US Apollo missions at the time when there was no HTML/CSS. He is now carrying out full-stack missions in outer space.',
        avatar: 'mykola_m.jpg',
      },
      {
        name: 'Nazar K.',
        position: 'Full-stack js Midshipman',
        description:
          'Strong Pilot with will of adamant and suspended approach. Fond of space rockclimbing.',
        avatar: 'nazar_k.jpg',
      },
      {
        name: 'Ihor V.',
        position: 'Full-stack js Midshipman',
        description:
          'The youngest midshipman from outer space. Cool and steady even when approaching black hole.',
        avatar: 'igor_v.jpg',
      },
      {
        name: 'Yuriy S.',
        position: 'Full-stack js Midshipman',
        description:
          'Was able to capture new alien ship on his first flight. Due to excellent communicative skills, first comes into contact with unknown galactic creatures.',
        avatar: 'yurii_s.jpg',
      },
    ],
  },
  {
    position: 'Astronaut',
    key: 'astronaut',
    people: [
      {
        name: 'Taras P.',
        position: 'Full-stack js Astronaut',
        description:
          'He has a diligent approach to every task. He is patient having long commutes to the station every day. Fond of remote missions in deep space.',
        avatar: 'taras_p.jpg',
      },
      {
        name: 'Mykhailo F.',
        position: 'Full-stack js Astronaut',
        description:
          'Has space banking background and is good at front-end and mobile fields.',
        avatar: 'misha_f.jpg',
      },
      {
        name: 'Volodymyr A.',
        position: 'Full-stack js Astronaut',
        description:
          'He was able to transform his shuttle into cluster of micro-ships that are able to self-repair. This cluster is the most resilient fleet in the world.',
        avatar: 'volodiy_a.jpg',
      },
      {
        name: 'Rostyslav T.',
        position: 'Full-stack js Astronaut',
        description:
          'Was create AI-bots powered space craft. You may never be sure whether you are talking to him, or to his AI.',
        avatar: 'rostyk_t.jpg',
      },
    ],
  },
];
