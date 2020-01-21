/* eslint-disable */

import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import './services-education-software-development';

import Works from '../components/portfolio/works';
import CallToActionButton from '../components/content/CallToActionButton';
import FeaturesList from '../components/content/FeaturesList';
import { getPostsList } from '../lib/contentful';
import LetsStart from './home-page-lets-start';

import { works } from '../main.config';

const whyStaffAugmentation = [
  {
    icon: '/static/services/settings.svg',
    alt: 'Maintaining control',
    description: (<span>
      <b>Maintaining control:</b> When you want to manage resources and keep control over the staff yourself, a dedicated development team works best for you.
    </span>),
  },
  {
    icon: '/static/services/working-impeccably.svg',
    alt: 'Improving team skillset',
    description: (<span>
      <b>Improving team skillset:</b> Outstaffing services let you add best talents, skills, knowledge, experience, and ideas to your project development team.
    </span>),
  },
  {
    icon: '/static/services/star.svg',
    alt: 'Gaining expertise',
    description: (<span>
      <b>Gaining expertise:</b> An outstaffing company lets you fill gaps in the technical and industry-specific expertise of your original project team.
    </span>),
  },
  {
    icon: '/static/services/shuffle.svg',
    alt: 'Facing rapidly changing HR needs',
    description: (<span>
      <b>Facing rapidly changing HR needs:</b> If your company has dynamically changing staffing requirements, dedicated development team is the solution.
    </span>),
  },
  {
    icon: '/static/services/piggy-bank.svg',
    alt: 'Reducing HR expenses',
    description: (<span>
      <b>Reducing HR expenses:</b> The greatest advantage of a dedicated software development team is being able to cut down on internal skill development.
    </span>),
  },
  {
    icon: '/static/services/upload.svg',
    alt: 'Meeting pressing deadlines',
    description: (<span>
      <b>Meeting pressing deadlines:</b> Dedicated development team lets you meet aggressive project deadlines. Outstaffing will help you complete the project on time.
    </span>),
  },
  {
    icon: '/static/services/heart.svg',
    alt: 'Keeping healthy corporate culture',
    description: (<span>
      <b>Keeping healthy corporate culture:</b> Your team will perceive outstaffing better than outsourcing. If you outsource a project, they will feel insecure.
    </span>),
  },
];

const webDevelopmentWorks = works.filter(({ title }) => ['The Check Network', 'Banker Advisor', 'Paceup'].includes(title));

class ServicesOutstaffing extends React.Component {
  constructor() {
    super();
    this.state = {
      isMobile: false,
      isTablet: false,
      posts: [],
    };
  }

  async componentDidMount() {
    const { posts } = this.state;
    if (!posts || !posts.length) {
      const blogPosts = await getPostsList();
      if (blogPosts && blogPosts.items) {
        this.setState({ posts: blogPosts.items });
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', ({ target }) => {
        if (target) {
          this.setState({
            isTablet: target.innerWidth <= 768 && target.innerWidth > 480,
            isMobile: target.innerWidth <= 480,
          });
        }
      });

      this.setState({
        isTablet: window.innerWidth <= 768 && window.innerWidth > 480,
        isMobile: window.innerWidth <= 480,
      });
    }
  }

  render() {
    const { isMobile, isTablet, posts } = this.state;

    return (
      <Layout>
        <ContentNavigation />
        <div className="content-block service-team">
          <section>
            <h1 className="text-center">Dedicated Development Team</h1>
            <p className="text-center text-italic">Maintaining control, improving team skill set, and reducing HR costs</p>
          </section>
          <section>
            <h2 style={{ fontSize: '40px', fontWeight: 900 }}>$507.2 billion</h2>
              <p className="text-center">
                is the projected size of the global software market in 2021, according to&nbsp;
                <Link href="https://www.statista.com/statistics/963597/software-revenue-worldwide/">
                  <a target="_blank" rel="noopener noreferrer nofollow">Statista</a>
                </Link>
                .
              </p>
            <h2>What Is a Dedicated Development Team?</h2>
            <p>Outstaffing is the process of hiring professional software developers to assist you with a project. These specialists work at the premises of their own agency. Meanwhile, your company manages and controls them. The greatest advantage of outstaffing is the simplicity of it. Do you realize the need for more team members on your project? Contact the agency providing dedicated development team and talk to developers they offer. As soon as you say “Deal!”, these specialists can start working on your project at once. Yes, it is that simple.</p>
            <p>Requesting outstaffing services is the way you bring the best talents into your development team without going through the typical HR recruitment and training routine.</p>
          </section>
          <section>
            <h2>Portfolio</h2>
            <p>
              These are some of the applications and websites that we have developed as a
              web application development company:
            </p>
            <Works works={webDevelopmentWorks} />
          </section>
          <section>
            <h2>Why Dedicated Development Team Services?</h2>
            <FeaturesList list={whyStaffAugmentation} />
            <CallToActionButton href="/contacts" title="HIRE DEDICATED DEVELOPERS" />
          </section>
          <section>
            <h2>Do You Need a Dedicated Development Team?</h2>
            <p>
              A dedicated development team is not a one-fits-all solution. The effectiveness of a dedicated software development team depends on project characteristics.
            </p>
            <p>
              <b>Project size: any</b>
              <br />
              Hiring a dedicated software development team equally suits projects of all sizes, from small to large.
            </p>
            <p>
              <b>Project duration: any</b>
              <br />
              You can engage in outstaffing at any stage of your project development. It is equally easy for augmented resources to start a new project from scratch or to hop on the existing one.
            </p>
            <p>
              <b>Project cost: any</b>
              <br />
              Evidently, the cost of your project depends on its scope, timeline, and quality. Yet, it will turn out to be cheaper if you engage in outstaffing rather than outsourcing.
            </p>
            <p>
              <b>Requirements: changing</b>
              <br />
              A dedicated software development team can easily adapt to changing requirements since these specialists should be professional and agile.
            </p>
            <p>
              <b>Client Control: high</b>
              <br />
              As in the case of project outsourcing, you cannot just leave it alone. If you are engaged in staff augmentation, you need to monitor the project continuously.
            </p>
            <p>
              <b>Methodology: Agile</b>
              <br />
              Since communication among team members needs to be continuous and requirements may change regularly, Agile Project Management technology is what you need. You can use Scrum, Kanban, XP, or Lean – whatever suits your needs best.
            </p>
            <img style={{ margin: '30px auto' }} src="/static/services/outstaffing/outstaffing-img.png" alt="Outstaffing features" />
          </section>
          <section>
            <h2>Why KeenEthics?</h2>

            <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>1</span> Empowering growth</h3>
            <p>Your project will grow with us because that is what you hire dedicated developers for. We will provide the most skillful professionals that you ask us for. If you need UI/UX designers, software developers, QA specialists, AI or IoT specialists, or Cloud Architects – <Link href="/contacts">contact us</Link> with no hesitation.</p>

            <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>2</span> Building value</h3>
            <p>Whatever cooperation model we base our partnership on, we strive for our business relationship to be open, transparent, and mutually beneficial. We employ the ethical approach towards our clients and partners. Here at KeenEthics, we believe that a pleasant atmosphere on the project and effective communication are the two pillars of business success. Read more about our <Link href="/blog/1548831600000-creating-corporate-culture">ethical values and corporate culture</Link>.</p>

            <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>3</span> Launching in a matter of weeks</h3>
            <p>We understand that time is the most precious asset you have. We want to waste neither your energy nor your patience. Thus, our specialists will start working on your project as a dedicated development team as soon as you confirm your willingness to cooperate with us and we solve all legal questions.</p>

            <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>4</span> Bringing tech expertise</h3>
            <p>Our team members are experts in what they do, but we are still working to improve their performance. At KeenEthics, internal and external knowledge-sharing events take place regularly. We conduct code evaluation, pair programming, and brainstorming sessions. In the unlikely case of your dissatisfaction with us, we offer a warranty period for our team services. To learn more about it, please <Link href="/contacts">contact our representative</Link>.</p>

            <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>5</span> Protecting your data</h3>
            <p>Your <Link href="/blog/1543388400000-your-data-is-safe-in-ukraine">data safety</Link> is our priority. Our dedicated software development team will make sure that your application is immune to safety errors or external attacks. Regardless of the industry you are in or the tech stack you use, KeenEthics experts understand the need to protect your project and know which safety measures to take.</p>
          </section>
          <section>
            <h2>Portfolio</h2>
            <p>These are some of our business partners whom we provide outstaffing services with:</p>
            <div>
              <h3>WorldLabs</h3>
              <p>WordLabs is a web platform for startuppers, entrepreneurs, and business owners. It helps the global business community push forward innovative ideas. The idea of this project is to empower people to drive technological progress. WordLabs is not a typical business incubator. It is a revolutionary business communication platform built with the needs of society in mind.</p>
              <div>
                <div style={{ marginBottom: '5px' }}><b>Platform</b>: <Link href="/services-web-development"><a>Web</a></Link></div>
                <div style={{ marginBottom: '5px' }}><b>Technologies</b>: <Link href="/tech-data-base-mongo"><a>MongoDB</a></Link>, <Link href="/tech-back-end-meteor"><a>Meteor</a></Link> and <Link href="/tech-front-end-react"><a>React</a></Link></div>
                <div style={{ marginBottom: '5px' }}><b>Methodology</b>: <Link href="/blog/how-to-choose-your-optimal-development-methodology"><a>Kanban</a></Link></div>
              </div>
              <Works works={works.filter(({ title }) => ['WorldLabs'].includes(title))} />
            </div>
            <div>
              <h3>My Grass Growth</h3>
              <p>My Grass Growth is an agricultural web app. The purpose of it is to help farmers manage the feeding process of their herds. The app offers forecasts on grazing and mowing paddocks, which are based on the user's data and some agricultural formulas.</p>
              <div>
                <div style={{ marginBottom: '5px' }}><b>Platform</b>: <Link href="/services-web-development"><a>Web</a></Link></div>
                <div style={{ marginBottom: '5px' }}><b>Technologies</b>: <Link href="/tech-back-end-meteor"><a>Meteor</a></Link> and Blaze</div>
                <div style={{ marginBottom: '5px' }}><b>Methodology</b>: <Link href="/blog/how-to-choose-your-optimal-development-methodology"><a>Scrum</a></Link></div>
              </div>
              <Works works={works.filter(({ title }) => ['My Grass Growth'].includes(title))} />
            </div>
            <div>
              <h3>OneRemission</h3>
              <p>OneRemission is a custom healthcare mobile solution.  The idea of it is to help patients who survived cancer and their families minimize the risk of cancer recurrence. As of now, it is one of the best and most popular chatbot-based Integrative Oncology applications. It encompasses best diet, exercise, sleep, and stress management practices for cancer and post-cancer care.</p>
              <div>
                <div style={{ marginBottom: '5px' }}><b>Platform</b>: <Link href="/services-mobile-development-apple"><a>iOS</a></Link></div>
                <div style={{ marginBottom: '5px' }}><b>Technologies</b>: <Link href="/services-web-development-node"><a>Node.js</a></Link>, <Link href="/tech-data-base-mongo"><a>MongoDB</a></Link>, Wit.ai, <Link href="/services-web-development-chatbot"><a>BotPress</a></Link>, WebSocket</div>
                <div style={{ marginBottom: '5px' }}><b>Methodology</b>: <Link href="/blog/how-to-choose-your-optimal-development-methodology"><a>Kanban</a></Link></div>
              </div>
              <Works works={works.filter(({ title }) => ['OneRemission'].includes(title))} />
            </div>
          </section>
        </div>
        <LetsStart />
      </Layout>
    );
  }
}

export default ServicesOutstaffing;
