import AnalysisDescription from './method-descriptions/analysis';

export default {
  navigation: {
    maxItems: 7,
  },
  items: [
    {
      key: 'analysis',
      value: 'Business analysis',
      component: AnalysisDescription,
    },
    {
      key: 'planning',
      value: 'Planning',
      component: AnalysisDescription,
    },
    {
      key: 'design',
      value: 'UX/UI design',
      component: AnalysisDescription,
    },
    {
      key: 'developmentandtesting',
      value: 'Development and testing',
      component: AnalysisDescription,
    },
    {
      key: 'maintenanceandsupport',
      value: 'Maintenance and support',
      component: AnalysisDescription,
    },
    {
      key: 'deployment',
      value: 'Deployment',
      component: AnalysisDescription,
    },
  ],
};
