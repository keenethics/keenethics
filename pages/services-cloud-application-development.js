import React from 'react';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import CallToActionButton from '../components/content/CallToActionButton';
import FeaturesList from '../components/content/FeaturesList';
import OfferList from '../components/content/OfferList';
import './services-education-software-development.scss';

import { works } from '../main.config';

import Works from '../components/portfolio/works';

const ServicesCloudAppDev = () => {
  const whatIsBusinessAnalysis = [
    {
      icon: '/static/services/cloud-app-dev/icons8-combo-chart-100.png',
      alt: 'Combo Chart',
      description:
  <>
    <b>Scalable</b>
    <br />
    Cloud solutions are perfectly scalable, and they easily adapt to workload fluctuations.
  </>,
    },
    {
      icon: '/static/services/cloud-app-dev/icons8-database-100.png',
      alt: 'Database',
      description:
  <>
    <b>Data-friendly</b>
    <br />
    Cloud apps can be seamlessly integrated with a database, data can be easily recovered.
  </>,
    },
    {
      icon: '/static/services/cloud-app-dev/icons8-data-transfer-100.png',
      alt: 'Data Transfer',
      description:
  <>
    <b>Reliable</b>
    <br />
    Cloud-based applications are designed to withstand a heavy data load.
  </>,
    },
    {
      icon: '/static/services/cloud-app-dev/icons8-user-100.png',
      alt: 'User',
      description:
  <>
    <b>Easily managed</b>
    <br />
    Cloud solutions are easier for the client to manage rather than
    traditional on-site solutions.
  </>,
    },
    {
      icon: '/static/services/cloud-app-dev/icons8-geography-100.png',
      alt: 'Geography',
      description:
  <>
    <b>Convenient</b>
    <br />
    Cloud-based solutions can be accessed from any location at any given point in time.
  </>,
    },
    {
      icon: '/static/services/cloud-app-dev/icons8-shield-100.png',
      alt: 'Shield',
      description:
  <>
    <b>Secure</b>
    <br />
    These solutions are dependable if they are built properly and all the regulations
    are followed.
  </>,
    },
  ];

  const offerList = [
    {
      icon: '/static/services/cloud-app-dev/cloud-computing2.png',
      alt: 'Cloud Computing',
      title: 'Custom Cloud Solutions Development',
    },
    {
      icon: '/static/services/cloud-app-dev/cloud-computing1.png',
      alt: 'Cloud Computing',
      title: 'Cloud Solutions Maintenance',
    },
    {
      icon: '/static/services/cloud-app-dev/cloud-computing3.png',
      alt: 'Cloud Services',
      title: 'Integration with Other Cloud Services',
    },
    {
      icon: '/static/services/cloud-app-dev/website.png',
      alt: 'Cloud Architecture',
      title: 'Cloud Architecture Development',
    },
    {
      icon: '/static/services/cloud-app-dev/laptop.png',
      alt: 'Laptop',
      title: 'Cloud Solutions Migration',
    },
    {
      icon: '/static/services/cloud-app-dev/support.png',
      alt: 'Cloud Support',
      title: 'Cloud Support and Consulting',
    },
  ];

  const webDevelopmentWorks = works.filter(
    ({ title }) => ['Business Research Platform', 'BankerAdvisor'].includes(title),
  );

  return (
    <Layout>
      <ContentNavigation />
      <div className="content-block">
        <section>
          <h1 className="text-center">
            Cloud Application Development
          </h1>
          <p className="text-center text-italic">
            Offering secure, reliable, and cost-efficient custom cloud solutions
          </p>
          <CallToActionButton />
          <h2 style={{ fontSize: '40px', fontWeight: 900 }}>$623.3 billion</h2>
          <p className="text-center">
            is the projected size of the global cloud computing market in 2023, according to&nbsp;
            <a href="https://www.marketsandmarkets.com/Market-Reports/cloud-computing-market-234.html" target="_blank" rel="noopener noreferrer nofollow">Markets and Markets.</a>
          </p>
        </section>
        <section>
          <h2>What Is Cloud Application Development?</h2>
          <p>
            Cloud application services range from building a custom solution from scratch to
            migrating your existing system into the cloud. Or you could integrate your solution
            with other cloud services, such as AWS or Azure. There are three methods of cloud
            software delivery: SaaS (Software as a Service), PaaS (Platform as a Service),
            and IaaS (Infrastructure as a Service). They let you as a client delegate a great
            share of responsibilities to outside vendors.
          </p>
          <p>
            If you develop a software product on-premises, you have to manage the application,
            data, runtime, middleware, operating system, servers, storage, virtualization,
            and networking on your own. If you choose to employ SaaS business model, you
            delegate all of these to your service providers. By employing PaaS, you delegate
            everything but applications and data. In turn, if you follow the IaaS approach,
            you delegate only servers, storage, and networking.
          </p>
        </section>
        <section>
          <img style={{ maxWidth: '80%' }} src="/static/services/saas.png" alt="Saas" />
        </section>
        <section>
          <h2>Why Cloud Application Development?</h2>
          <FeaturesList list={whatIsBusinessAnalysis} />
          <CallToActionButton
            title="Contact us"
            href="/contacts"
          />
        </section>
        <section>
          <h2>What Cloud Application Services We Offer?</h2>
          <OfferList list={offerList} />
        </section>
        <section>
          <h2>How Do We Do It?</h2>
          <p>
            These are the technologies and cloud application development platforms that
            help us do it:&nbsp;
            <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer nofollow">AWS</a>
            &nbsp;(SES, S3, Secrets Manager, Lambda, CloudWatch, ElasticSearch, Kibana),&nbsp;
            <a href="https://serverless.com/" target="_blank" rel="noopener noreferrer nofollow">Serverless</a>
            ,&nbsp;
            <a href="https://www.terraform.io/" target="_blank" rel="noopener noreferrer nofollow">Terraform</a>
            ,&nbsp;
            <a href="https://jenkins.io/" target="_blank" rel="noopener noreferrer nofollow">Jenkins</a>
            .
          </p>
          <div className="project-content-more">
            <ul className="technologies-list">
              <li className="technologies-item">
                <img src="/static/portfolio/the-business-research-platform/serverless.png" alt="Serverless" />
              </li>
              <li className="technologies-item">
                <img src="/static/portfolio/the-business-research-platform/jenkins.png" alt="Jenkins" />
              </li>
            </ul>
            <ul className="technologies-list">
              <li className="technologies-item">
                <img style={{ maxHeight: '100px' }} src="/static/portfolio/the-business-research-platform/aws-logo.png" alt="AWS" />
              </li>
              <li className="technologies-item">
                <img style={{ maxHeight: '100px' }} src="/static/portfolio/the-business-research-platform/terraform.png" alt="Terraform" />
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>Why KeenEthics?</h2>

          <h3 className="red-italic-title">
            <span style={{ fontSize: '28px', marginRight: '.5em' }}>1</span>
            &nbsp;Empowering growth
          </h3>
          <p>
            We treat your business as unique, and we take into account its needs. Our Partner
            Engagement specialist, Project Managers, and Business Analysts will gladly help
            you collect, analyze, and implement your project requirements.
            KeenEthics software engineers specialize not only in the technical aspect of
            programming but also in industry-specific matters, including&nbsp;
            <a href="/services-education-software-development">education software development services</a>
            ,&nbsp;
            <a href="/services-custom-healthcare-software-development">custom healthcare software development</a>
            , and&nbsp;
            <a href="/services-web-development-e-commerce">ecommerce software development</a>
            .
          </p>

          <h3 className="red-italic-title">
            <span style={{ fontSize: '28px', marginRight: '.5em' }}>2</span>
            &nbsp;Building value
          </h3>
          <p>
            We cooperate according to the payment model you prefer. Our pricing policy suits
            businesses of any size. We provide cost-efficient solutions without compromising
            the quality of your future software product. For more about the business
            value we have built,&nbsp;
            <a href="https://clutch.co/profile/keenethics#review-184570" target="_blank" rel="noopener noreferrer nofollow">seewhat our long-term partner has to say</a>
            .&nbsp;
            <a href="/contacts?activeform=estimate">Let us estimate your project</a>
            , and youwill see whether the business value is worth the effort.
          </p>

          <h3 className="red-italic-title">
            <span style={{ fontSize: '28px', marginRight: '.5em' }}>3</span>
            &nbsp;Launching in a matter of weeks
          </h3>
          <p>
            We prefer not to waste time on unnecessary organizational and bureaucratic tasks.
            The project development process can be organized and managed according to your wishes.
            You can hire our professional Project Managers, who will help you to organize
            cloud based application development and to&nbsp;
            <a href="/blog/how-to-choose-your-optimal-development-methodology">choose the optimal development methodology</a>
            . Otherwise, you can manage the project yourself, and our developers will gladly work
            under your supervision.
          </p>

          <h3 className="red-italic-title">
            <span style={{ fontSize: '28px', marginRight: '.5em' }}>4</span>
            Bringing tech expertise
          </h3>
          <p>
            Each person working in our company, should it be a UX / UI designer, a software
            developer, or a QA specialist, has sound knowledge and experience in the field.
            All our developers are full-stack for them to be in full control of a cloud computing
            software development project. Our designers develop responsive interfaces according
            to the latest trends in the field. The Quality Assurance department will make sure
            that your cloud application is bug-free and perfectly functioning.
          </p>

          <h3 className="red-italic-title">
            <span style={{ fontSize: '28px', marginRight: '.5em' }}>5</span>
            &nbsp;Protecting your data
          </h3>
          <p>
            We understand your concerns about&nbsp;
            <a href="/blog/1543388400000-your-data-is-safe-in-ukraine">information and data safety</a>
            &nbsp;as these are the most valuable assets in the 21st century. Our employees undergo
            data safety training, we ensure the physical safety of our servers, and the online data
            is properly encrypted. To prevent any leaks of information about our clients or
            operations, we sign NDAs with our partners and employees.
          </p>
        </section>
        <section>
          <h2>Portfolio</h2>
          <p>These are some of the cloud applications that we have developed:</p>
          <div><Works works={webDevelopmentWorks} /></div>
        </section>
        <h2>Now, let’s discuss your business idea!</h2>
        <CallToActionButton
          title="Contact us"
          href="/contacts"
        />
      </div>
    </Layout>
  );
};

export default ServicesCloudAppDev;
