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
  // googlePlus: 'https://plus.google.com/112805808227871069931',
  twitter: 'https://twitter.com/keen_ethics',
  upwork: 'https://www.upwork.com/o/companies/~0106b5437592391f94/',
  facebook: 'https://www.facebook.com/KeenEthics.development',
  instagram: 'https://www.instagram.com/keen_ethics',
};

export const config = {
  navigationMinPointsHeight: 90,
  navigation: mainNavigation,
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
    // {
    //   name: 'GooglePlus',
    //   class: 'soc-4',
    //   href: COMPANY_LINKS.googlePlus,
    // },
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
export const servicesWebDevelopmentTabs = () => servicesWebDevelopmentElements.map(e => ({
  ...e,
  metaDescription: maskDescription(e.name),
}));

export const servicesMobileDevelopment = () => servicesMobileDevelopmentElements.map(e => ({
  ...e,
  metaDescription: maskDescription(e.name2),
}));

export const servicesOutstaffing = () => servicesOutstaffingElements.map(e => ({
  ...e,
  metaDescription: maskDescription(e.name2),
}));

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

export const team = [
  {
    position: 'Missions control',
    key: 'spaceship',
    people: [
      {
        name: 'Max S.',
        position: 'Chief Executive Officer',
        description: 'I represent KeenEthics to the world. I define the business development strategy and make sure that it is working. KeenEthics has become my life, not my work, primarily due to our amazing team. These are the people striving to do their job to the best of their possibilities.',
        avatar: 'maks_s.jpg',
      },
      {
        name: 'Oleksiy P.',
        position: 'Chief Technical Officer',
        description: 'I am responsible for setting up development processes, ensuring code quality, mentoring both newbies and experienced developers, and choosing optimal stack and best architecture for incoming projects. I am devoted to our ambitious team, and I am passionate about the goals we pursue.',
        avatar: 'alex_p.jpg',
      },
    ],
  },
  {
    position: 'Frigate captain',
    key: 'frigate_captain',
    people: [
      {
        name: 'Vlad O.',
        position: 'Senior Software Developer',
        description: 'My central objective is to create, educate, and motivate acceptance and appreciation of interests and ideas. Courage to take on challenges is the feature I enjoy and appreciate about KeenEthics the most.',
        avatar: 'vlad_o.jpg',
      },
      {
        name: 'Sergey G.',
        position: 'Full-Stack Software Developer',
        description:
          'My strengths include React, Node, Meteor, and chit-chatting. No wonder that I like to talk: KeenEthics is the best company ever with the most outstanding people.',
        avatar: 'sergei_g.jpg',
      },
      {
        name: 'Viktoria M.',
        position: 'HR manager',
        description: 'I ensure that onboarding processes are smooth, and each member feels valued. I am also responsible for training, consulting, and assisting KeenEthics people. I love the opportunity to generate new ideas and to work with the best team.',
        avatar: 'viktoria_m.jpg',
      },
      {
        name: 'Alexandr S.',
        position: 'Project Manager and QA Specialist',
        description: 'My main job is to prevent project issues from occurring and to detect them if any have yet slipped through. My KeenEthics life is full of fun and various opportunities, which turns this company into something more important than a mere place of employment.',
        avatar: 'sasha_s.jpg',
      },
      {
        name: 'Ihor F.',
        position: 'Recruitment Manager',
        description: 'My job is to bring the best talents into the company, find efficient lecturers, strengthen the team, and organize various events to improve the company’s brand. I am inspired by the dynamic development of KeenEthics and active involvement of each team member in this process.',
        avatar: 'ihor_f.jpg',
      },
      {
        name: 'Oksana P.',
        position: 'UI/UX Designer',
        description: 'My job is to understand the business requirements of a client and the needs of their users, to transform them into an exceptional User Experience and a beautiful clean design. KeenEthics wins me over with open-mindedness, receptiveness to new ideas, and readiness to expand horizons.',
        avatar: 'oksana_p.jpg',
      },
      {
        name: 'Artem S.',
        position: 'Quality Assurance Engineer',
        description: 'I aim at determining, negotiating, and agreeing on in-house quality procedures, standards, and specifications. We as a KeenEthics team strive to maintain healthy relationships and to balance our personal and professional connections.',
        avatar: 'artem_s.jpg',
      },
      {
        name: 'Ulyana L.',
        position: 'Talent Researcher',
        description: 'My job is to look for smart and intelligent people to join our amazing team. In fact, these people are actually my most favorite part about working for KeenEthics, and I am always glad to help them make their first steps in the company.',
        avatar: 'ulyana_l.jpg',
      },
      {
        name: 'Tamara A.',
        position: 'Office Manager',
        description: 'My responsibility is to keep our team members warm, fed, and comfortable. I am also the one to extinguish the fire should it happen, but fortunately, there was no any yet. The loyalty of our team members and leaders is what makes KeenEthics stand out among other companies.',
        avatar: 'tamara_a.jpg',
      },
      {
        name: 'Andrii T.',
        position: 'Project Manager',
        description: 'My job is to get everything done leaving everyone happy and facilitate communication. I help my team to achieve our goals with all the support I can provide. The opportunity to work in an open and friendly environment is what I value about KeenEthics the most.',
        avatar: 'andrii_t.jpg',
      },
    ],
  },
  {
    position: 'Corvette capt',
    key: 'frigate_captain',
    people: [
      {
        name: 'Yara M.',
        position: 'Full-Stack Software Developer',
        description:
          'I write a high-quality, reusable, and maintainable code following the business idea of a client. With the KeenEthics team, there is not a single challenge that cannot be solved.',
        avatar: 'yara_m.jpg',
      },
      {
        name: 'Taras Y.',
        position: 'Middle JS Developer',
        description:
          'I am creating and working with web applications. I like Keenethics because of the people working here, ethical principles and values we cherish, interesting projects we work on, and flexible working hours.',
        avatar: 'taras_y.jpg',
      },
      {
        name: 'Serhii S.',
        position: 'Back-End Software Developer',
        description:
          'I am making sure that everything between the database and the browser works as efficiently as possible. Flexibility, personal freedom, professional development, and challenging tasks are the most outstanding benefits of working for KeenEthics.',
        avatar: 'serhii_s.jpg',
      },
      {
        name: 'Maryna Y.',
        position: 'Middle JS Developer',
        description:
          'I develop a clean, efficient, and reusable code, which would meet all the requirements and expectations of the client. I am always ready to back up my team since I truly enjoy what I am doing and the positive people I am working with.',
        avatar: 'maryna_y.png',
      },
      {
        name: 'Max F.',
        position: 'Full-Stack Software Developer',
        description:
          'Writing a high-quality code is both my job and my passion. The fact that KeenEthics promotes the idea of a healthy lifestyle is what I like about the company the most.',
        avatar: 'maksym_f.jpg',
      },
      {
        name: 'Arsen T.',
        position: 'Full-Stack Software Developer',
        description:
          'My job is to write a clean and efficient code, which would meet all the expectations of a client. The KeenEthics team is what inspires me to wake up early in the morning and to spend long hours working hard on our mutual projects.',
        avatar: 'arsen_t.jpg',
      },
    ],
  },
  {
    position: 'Capt-lieutenant',
    key: 'frigate_captain',
    people: [
      {
        name: 'Ihor V.',
        position: 'Middle Full-Stack Software Developer',
        description:
          'My job is to implement the ideas of a client in an effective code. Flexibility is what I value the most about working for KeenEthics.',
        avatar: 'igor_v.jpg',
      },
      {
        name: 'Yuriy S.',
        position: 'Full Stack Developer',
        description:
          'My major duties include developing software, managing a team, estimating projects, and carrying out meetings. Yet, my favorite things about KeenEthics are the feeling of support provided by our outstanding CEO and CTO and the professionals I get to meet on a daily basis.',
        avatar: 'yurii_s.jpg',
      },
      {
        name: 'Volodymyr A.',
        position: 'Full-Stack Software Developer',
        description:
          'I design, develop, and maintain a software product on all the stages of its lifecycle. At KeenEthics, I appreciate flexible hours, a comfortable office, and understandable executives.',
        avatar: 'volodiy_a.jpg',
      },
      {
        name: 'Taras P.',
        position: 'Full-Stack JS Developer',
        description:
          'My primary responsibility is to write clean and efficient code and estimate incoming projects. Readiness to pursue innovative ideas is my most favorite things about working for KeenEthics.',
        avatar: 'taras_p.jpg',
      },
      {
        name: 'Vlad E.',
        position: 'Software Engineer',
        description:
          'This position has enabled me to turn my passion for coding into a dream job. The opportunity to freely manage my working day and week is the most appealing to me thing in KeenEthics.',
        avatar: 'vlad_e.jpg',
      },
    ],
  },
  {
    position: 'Midshipman',
    key: 'frigate_captain',
    people: [
    ],
  },
  {
    position: 'Astronaut',
    key: 'frigate_captain',
    people: [
      {
        name: 'Oleh K.',
        position: 'Full-Stack JavaScript Developer',
        description: 'Creating software that will meet all the expectations and requirements is my central objective. There is not a single thing I find imperfect about working for KeenEthics. So far, so good.',
        avatar: 'oleh_k.jpg',
      },
      {
        name: 'Max S.',
        position: 'HTML Coder',
        description: 'All the tasks related to the development of web interfaces lie upon my shoulders. Friendly team and flexible working hours are what motivates me to keep going as a part of the KeenEthics team.',
        avatar: 'max_s.jpg',
      },
      {
        name: 'Dmytro P.',
        position: 'Full-Stack Software Developer',
        description: 'My central objective is to achieve an optimal result. At KeenEthics, I find the personal and professional freedom to be the most valuable benefit, which inspires and motivates me to devote myself to the common goal.',
        avatar: 'dmytro_p.jpg',
      },
      {
        name: 'Anton M.',
        position: 'Full-Stack Software Developer',
        description: 'My job is to provide maintainable clean code for the projects I am assigned to and to make sure that it is timely tested. The KeenEthics team is always willing to change for the sake of our common good and for the benefit of our partners.',
        avatar: 'anton_m.jpg',
      },
      {
        name: 'Iryna K.',
        position: 'Lead Generation Manager',
        description: 'I am responsible for lead generation and communication, marketing activities, and content management on LinkedIn and Twitter. I like that the KeenEthics team members are always open for a small chat during the coffee break and ready to provide professional help.',
        avatar: 'iryna_k.jpg',
      },
      {
        name: 'Marian Y.',
        position: 'Quality Assurance Engineer',
        description: 'I test software and make sure that our products are bug-free. My most favorite thing about KeenEthics is the professionalism of our team. The atmosphere in the office is favorable for creative thinking, brainstorming, learning, and advancing professional expertise.',
        avatar: 'marian_y.jpg',
      },
      {
        name: 'Ilona-Mariia Sh.',
        position: 'Lead Generation Manager',
        description: 'Communication with clients and marketing activities are my major job objectives. KeenEthics inspires me with an excellent atmosphere, great relationships between people, flexibility, and the ability to develop myself personally and professionally.',
        avatar: 'ilona_sh.jpg',
      },
      {
        name: 'Oleksandra G.',
        position: 'Quality Assurance Engineer',
        description: 'I am a person dealing with software testing and case writing processes. Great teamwork and readiness of each member to give a helping hand are what ensures the excellence of the KeenEthics services and a pleasant atmosphere in the office.',
        avatar: 'oleksandra_g.jpg',
      },
      {
        name: 'Valerii Sh.',
        position: 'Quality Assurance Engineer',
        description: 'I am searching for bugs and issues in code. The greatest thing about working for KeenEthics are the people I am working here with because each team member is an outstanding, interesting, and talented person.',
        avatar: 'valerii_sh.jpg',
      },
      {
        name: 'Borys K.',
        position: 'Full-Stack Software Developer',
        description: 'I am creating and managing clean applications. Each member of the KeenEthics team is an important and highly valued part, and the voice of every person matters. This is what makes KeenEthics stand out as a great employer and a reliable partner.',
        avatar: 'borys_k.jpg',
      },
      {
        name: 'Bohdana K.',
        position: 'Head of Business Development',
        description: 'My major duties include lead generation, communication with potential and existing customers, and social media content marketing. KeenEthics is appealing to me due to a responsible approach and an honest attitude to every customer and the agility of our team.',
        avatar: 'bohdana_k.jpg',
      },
      {
        name: 'Oleg Z.',
        position: 'Full-Stack Software Developer',
        description: 'I handle all the stages of creating a product, from managing databases and servers to engineering a system and communicating with a client. As I see it, amazing people and a friendly approach to partners and customers is the key to KeenEthics success.',
        avatar: 'oleh_zz.jpg',
      },
      {
        name: 'Yulia B.',
        position: 'Graphic Web Designer',
        description: 'My job is to create visual content for Keenethics: various logos, brochures, presentations, UI etc. I am relatively new to the team, but these friendly people have already conquered my heart.',
        avatar: 'yulia_b.jpg',
      },
      {
        name: 'Oksana V.',
        position: 'Project Manager',
        description: 'I coordinate the project team, communicate with clients, and bear principal responsibility for the execution of project deliverables. Here at KeenEthics, each team member is always heard because all the opinions matter.',
        avatar: 'oksana_v.jpg',
      },
      {
        name: 'Tania M.',
        position: 'Content Writer',
        description: 'My job is to communicate the vision of KeenEthics to the broad audience through various articles, newsletters, social media posts, and brochures. In my writing, I strive to prove that the KeenEthics team is determined to get the job done without compromising deadlines or quality.',
        avatar: 'tania_m.jpg',
      },
    ],
  },
];

export const works = worksElements;
