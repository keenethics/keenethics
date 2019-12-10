import AnalysisDescription from './content/analysis';

export default {
  navigation: {
    maxItems: 7,
  },
  items: [
    {
      key: 'analysis',
      value: 'Business analysis',
      component: AnalysisDescription,
      href: '',
    },
    {
      key: 'planning',
      value: 'Planning',
      component: AnalysisDescription,
      href: '',
    },
    {
      key: 'design',
      value: 'UX/UI design',
      component: AnalysisDescription,
      href: '',
    },
    {
      key: 'developmentandtesting',
      value: 'Development and testing',
      component: AnalysisDescription,
      href: '',
    },
    {
      key: 'maintenanceandsupport',
      value: 'Maintenance and support',
      component: AnalysisDescription,
      href: '',
    },
    {
      key: 'deployment',
      value: 'Deployment',
      component: AnalysisDescription,
      href: '',
    },
  ],
};
