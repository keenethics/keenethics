import AnalysisDescription from './content/analysis';
import DesignDescription from './content/design';
import DevelopmentDescription from './content/developmentandtesting';
import DeploymentDescription from './content/softwaredeployment';
import MaintenanceDescription from './content/maintenanceandsupport';

export default {
  navigation: {
    maxItems: 7,
  },
  items: [
    {
      key: 'analysis',
      value: 'Business analysis',
      icon: 'method-icon-business-analysis',
      component: AnalysisDescription,
      href: '/services-business-analysis',
    },
    {
      key: 'design',
      value: 'UI/UX design',
      icon: 'method-icon-ux-ui-design',
      component: DesignDescription,
      href: '/services-ui-ux-design',
    },
    {
      key: 'developmentandtesting',
      value: 'Development and testing',
      icon: 'method-icon-development-and-testing',
      component: DevelopmentDescription,
      href: '/services-development-and-quality-assurance',
    },
    {
      key: 'softwaredeployment',
      value: 'Software deployment',
      icon: 'method-icon-software-deployment',
      component: DeploymentDescription,
      href: '/services-software-deployment',
    },
    {
      key: 'maintenanceandsupport',
      value: 'Maintenance and support',
      icon: 'method-icon-maintance-and-support',
      component: MaintenanceDescription,
      href: '/services-maintenance-and-support',
    },
  ],
};
