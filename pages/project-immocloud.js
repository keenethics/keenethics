import React from 'react';

import Link from 'next/link';
import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import ProjectWhatIsHeader from '../components/project/ProjectWhatIsHeader';
import ProjectCooperationHeader from '../components/project/ProjectCooperationHeader';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import CallToActionButton from '../components/content/CallToActionButton';

const baseColor = '#1ea9a4';

const ProjectImmocloud = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
            <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h1 className="title">Immocloud</h1>
              <p className="description">A property management platform, which lets you go digital and get rid of all the paperwork</p>
              <PortfolioTechnologyTags tags={['Real Estate']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img loading="lazy" src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img loading="lazy" src="/static/portfolio/immocloud/screen-image.png" alt="Immocloud" className="macbook--screen" />
              </div>
            </div>
            <Background />
          </div>

          <div className="project-content-more">
            <h2 className="text-center">
              <b>Immocloud</b>
            </h2>
            <p className="center text-italic" style={{ marginBottom: '40px' }}>
              A property management platform, which lets you go digital and get rid of all the paperwork
            </p>
            <img
              loading="lazy"
              src="/static/portfolio/immocloud/immocloud-image-main.png"
              alt="Self Leaders"
              className="image-gaps"
            />

            <section>
              <h2 className="title">What Is Immocloud?</h2>
              <ProjectWhatIsHeader
                projectName='Immocloud'
                industries={['Real Estate']}
                size='>10'
                location='Düsseldorf, Germany 🇩🇪'
                logo='/static/portfolio/immocloud/immocloud-logo.png'
              />
              <p>
                Immocloud is a property management platform, which connects renters and tenants. Real estate owners can manage their property
                easily and independently. The benefits of this platform include intuitive operation, personalized dashboards, digital document
                management, finance automation, online communication with tenants, and personalized support. Ultimately, going digital and
                getting rid of all the paperwork is a valuable opportunity that Immocloud offers.
              </p>
              <img
                loading="lazy"
                src="/static/portfolio/immocloud/immocloud-image-w-i.png"
                alt="Self Leaders"
                className="image-gaps"
              />
            </section>

            <section>
              <h2>Our Cooperation</h2>
              <ProjectCooperationHeader 
                platforms={
                  <>
                    <Link href='/services-mobile-development'><a>Cross-platform mobile app</a></Link>
                    &nbsp;(<Link href='/services-mobile-development-apple'><a>iOS</a></Link>, <Link href='/services-mobile-development-android'><a>Android</a></Link>)
                  </>
                }
                technologies={
                  <>
                    React,
                    &nbsp;<Link href='/tech-apps-react-native'><a>React Native</a></Link>,
                    &nbsp;Redux
                  </>
                }
                methodology='Agile'
                team='1 PM, 1 QA, and 1 full-stack developer'
              />
              <h3 className="red-italic-title">Challenges & Solutions</h3>
              <p>
                The first challenge we faced was data security. Our client took it very seriously  — they could not afford to risk or lose precious data
                of their users. To address their concern, we have implemented SSL encryption.
              </p>

              <h3 className="red-italic-title">Our Team</h3>
              <p>
                Our agile team involved one Project Manager, one full-stack mobile developer, and one Quality Assessment specialist.
              </p>

              <h3 className="red-italic-title">Technologies</h3>
              <p>
                The web platform for Immocloud has already been developed by our predecessors. In turn, we have created a cross-platform
                mobile app for both Android and iOS using the means of <b>React Native</b>. For managing screens and routing, we used
                <b>react-navigation (4.x)</b> — it was selected instead of react-native-navigation due to big amount of custom headers and navigation
                views. To manage shared state, mostly for chat screens, we used <b>Redux</b>. For building data charts and for date utils, we used <b>D3.js</b>
                and <b>moment.js</b> respectively. To simplify network requests, <b>axios</b> was used. Finally, to implement everything that was missing in JS,
                we used <b>lodash</b>.
              </p>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img loading="lazy" src="/static/portfolio/technologies/react-logo.svg" alt="react" />
                </li>
                <li className="technologies-item">
                  <img loading="lazy" src="/static/portfolio/technologies/react-native.png" alt="react native" />
                </li>
                <li className="technologies-item">
                  <img loading="lazy" src="/static/portfolio/technologies/redux-logo.png" alt="redux" />
                </li>
              </ul>

              <h3 className="red-italic-title">Methodology</h3>
              <p>
                Our cooperation with Immocloud was quite flexible. We did not strictly implement any particular Project Management methodology
                but organized the work on the project using Agile practices.
              </p>
            </section>

            <section>
              <h2>What Makes Immocloud Special?</h2>
              <p>
                Immocloud is a unique property management platform due to the ten fundamental features it offers.
              </p>

              <p className='red-italic-title'>1. Multiple properties management</p>
              <p>
                Those owners who have a few properties can monitor and compare the financial performance of their real estate objects using
                Immocloud. Financial datasets on every property are united in a single dashboard  — managing multiple properties has never been
                so simple.
              </p>

              <p className='red-italic-title'>2. Contact management</p>
              <p>
                Immocloud lets you keep all the important contacts at hand — phone number and emails of tenants, partners, service providers, and craftspeople.
              </p>

              <p className='red-italic-title'>3. Rent management</p>
              <p>
                Immocloud implements a rent management function, which lets the users see all the received and pending rent payments.
              </p>

              <p className='red-italic-title'>4. Finance management</p>
              <p>
                Rents are not the only financial transactions that take place in property management. Immocloud also lets you record other profits
                and expenses — to see the bigger picture of the total cash flow.
              </p>

              <p className='red-italic-title'>5. Advanced finance management</p>
              <p>
                The advanced finance management function gives you an opportunity to go beyond the Immocloud system, email receipts to your
                inbox, and process transactions there.
              </p>

              <p className='red-italic-title'>6. Document management</p>
              <p>
                Immocloud provides a space for storing and sharing images, agreements, receipts, and other documents that you might need. Now,
                you do not need to have a paper copy of your agreement with a renter — you both can sign a digital version of it. 
              </p>

              <p className='red-italic-title'>7. Communication management</p>
              <p>
                Another function that Immocloud offers is sending SMS or email messages to your contacts directly vie the platform.
              </p>

              <p className='red-italic-title'>8. Operating cost  management</p>
              <p>
                Immocloud offers you a digital assistance, who will compile operating costs statements for you. This process will take only a few minutes.
              </p>

              <p className='red-italic-title'>9. Communication portal</p>
              <p>
                You can invite your tenants to the Immocloud portal, communicate with the there, share documents, gather feedback — all you
                need to provide a better service.
              </p>

              <p className='red-italic-title'>10. Mailing management</p>
              <p>
                Immocloud handles the necessity to send mails to your contacts. Instead of going to the post office, arrange letters via the platform,
                and Immocloud will send it.
              </p>
              
              <p className='red-italic-title'>P.s. Information security</p>
              <p>
                Also, Immocloud pays particular attention to the question of security. “Your real estate is your personal security. We will do the rest.”,
                they say. This platform is compliant with GDPR, stores data in a highly secured, ISO 27001 certified data center in Germany, uses SSL
                encryption, and backups all the data regularly.
              </p>
            </section>

            <section>
              <h2>Do You Have a Similar Project Idea?</h2>
              <CallToActionButton
                title="SHARE YOUR IDEA"
                buttonBefore={(
                  <a
                    href="https://www.immocloud.de/"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                  >
                    <button type="button" className="call-to-cation-btn -secondary">
                      Check The Project
                    </button>
                  </a>
                )}
              />
            </section>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectImmocloud;
