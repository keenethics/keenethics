import React from 'react';

import Link from 'next/link';
import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import CallToActionButton from '../components/content/CallToActionButton';

const baseColor = '#cc6a6a';

const ProjectOnlineStore = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h1 className="title">B2C Online Store</h1>
              <p className="description">An e-commerce B2C web platform with usual functionality but exceptional performance</p>
              <PortfolioTechnologyTags tags={['Business Administration']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <div className="macbook--screen">
                  <img src="/static/portfolio/b2c-online-store/b2c-online-store.png" alt="The Business Research Platform" />
                </div>
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <section className="clearfix">
              <h2 className="title">What Is the Online Store?</h2>
              <div className="columns" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="column">
                  <table>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Name</b>
                        :
                      </td>
                      <td style={{ border: 0 }}>B2C Online Store</td>
                    </tr>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Industry</b>
                        :
                      </td>
                      <td style={{ border: 0 }}>E-Commerce</td>
                    </tr>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Size</b>
                        :
                      </td>
                      <td style={{ border: 0 }}>
                        11-50 employees
                      </td>
                    </tr>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Location</b>
                        :
                      </td>
                      <td style={{ border: 0 }}>
                        United States
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="column">
                  <img src="/static/portfolio/b2c-online-store/img.png" style={{ width: '100px', marginBottom: '10px' }} alt="search logo" />
                </div>
              </div>
              <p>
                The project we have worked on is an equipment e-store for the American market.
                The functionality was nothing unusual. Instead, the partner wanted us to develop
                online store focused on performance. The question was how to develop an online
                store as responsive and swift as possible. Unfortunately, we are not able to
                disclose the name of this web platform so that you could test its performance
                yourself.
              </p>
              <p>
                We did not start working on this project from scratch but took it up halfway.
                The partner asked us to complete it as soon as possible because his business
                suffered huge losses while the web platform was inactive. We embarked on the
                development in only two days after all the legal papers were signed and project
                requirements were collected.
              </p>
            </section>
            <section>
              <h2 className="title">Our Cooperation</h2>
              <div className="columns" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="column">
                  <table>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Platform</b>
                        :
                      </td>
                      <td style={{ border: 0 }}>
                        <Link href="/services-web-development">Web</Link>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Technologies</b>
                        :
                      </td>
                      <td style={{ border: 0 }}>
                        <span className="technologies-links">
                          <span><Link href="/services-web-development-meteor">Meteor</Link></span>
                          ,
                          <span><Link href="/services-web-development-node">Node.js</Link></span>
                          ,
                          <span><a href="https://www.reactioncommerce.com/" target="_blank" rel="noopener noreferrer nofollow">Reaction Commerce</a></span>
                          ,
                          <span><Link href="/tech-data-base-mongo">MongoDB</Link></span>
                          ,
                          <span><a href="https://spreecommerce.org/" target="_blank" rel="noopener noreferrer nofollow">Spree Commerce</a></span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Methodology</b>
                        :
                      </td>
                      <td style={{ border: 0 }}><Link href="/blog/how-to-choose-your-optimal-development-methodology">Kanban</Link></td>
                    </tr>
                    <tr>
                      <td style={{ border: 0, paddingLeft: 0 }}>
                        <b>Team</b>
                        :
                      </td>
                      <td style={{ border: 0 }}>2 software developers</td>
                    </tr>
                  </table>
                </div>
              </div>
              <h3 className="text-bold">Challenges & Solutions</h3>
              <p>
                We stumbled upon the first difficulty when we had to migrate a&nbsp;
                <b>large database</b>
                &nbsp;of tags and products from the old version of the store,
                which was written on&nbsp;
                <a href="https://spreecommerce.org/" target="_blank" rel="noopener noreferrer nofollow">Spree</a>
                . Also, we have enhanced the performance and security of the&nbsp;
                <b>payment system</b>
                &nbsp;with the help of a visa solution&nbsp;
                <a href="https://www.authorize.net/" target="_blank" rel="noopener noreferrer nofollow">Authorize.Net</a>
                . As for the&nbsp;
                <b>delivery system</b>
                , we have implemented different types of delivery and
                address verification. We also configured FedEx and UPS.
              </p>
              <p>
                Besides, we had to implement&nbsp;
                <b>search</b>
                &nbsp;filters, which included the number of products in a certain category.
                These had to be based on the current product list and be reactive. Initially,
                this function was implemented on the client-side. Yet, this solution was cumbersome
                and slow if the number of products was large. To solve this issue, we had
                implemented an element of&nbsp;
                <Link href="/tech-apps-progressive-web-apps">PWA</Link>
                &nbsp;–&nbsp;
                <a href="https://www.w3schools.com/html/html5_webworkers.asp" target="_blank" rel="noopener noreferrer nofollow">web workers</a>
                . It gave a huge boost to the web platform speed. Do you face similar challenges?
                Let us know! We can develop your store online.
              </p>
              <h3>Our Team</h3>
              <p>
                The project was relatively small and had to be developed in the shortest terms,
                so two full-stack software developers have been working on it.
              </p>
              <h3>Technologies</h3>
              <p>
              This web platform has been developed with the help of
                <span className="technologies-links">
                  <span><Link href="/services-web-development-meteor">Meteor</Link></span>
                  ,
                  <span><Link href="/services-web-development-node">Node.js</Link></span>
                  ,
                  <span><Link href="/tech-data-base-mongo">MongoDB</Link></span>
                  ,
                  <span><a href="https://www.reactioncommerce.com/" target="_blank" rel="noopener noreferrer nofollow">Reaction Commerce</a></span>
                  &nbsp;and
                  <span><a href="https://spreecommerce.org/" target="_blank" rel="noopener noreferrer nofollow">Spree Commerce</a></span>
                  .
                </span>
              </p>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img src="/static/portfolio/b2c-online-store/meteor.png" alt="Meteor" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/b2c-online-store/spree.png" alt="Spree Commerce" />
                </li>
              </ul>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img style={{ maxHeight: '100px' }} src="/static/portfolio/b2c-online-store/reaction-com.png" alt="Reaction Commerce" />
                </li>
                <li className="technologies-item">
                  <img src="/static/portfolio/b2c-online-store/node-js.png" alt="Node.js" />
                </li>
                <li className="technologies-item">
                  <img style={{ maxHeight: '80px' }} src="/static/portfolio/b2c-online-store/mongo.png" alt="MongoDB" />
                </li>
              </ul>
              <h3>Methodology</h3>
              <p>
                The project was to be developed as quickly as possible, the requirements were
                constant and clear. Thus, there was neither time nor need to interact continuously.
                We chose to employ Waterfall to manage the project development. It was organized in
                linear sequential steps, which let us complete it in the shortest terms possible
                without losing in quality.
              </p>
            </section>
            <section>
              <h2>Do You Have a Similar Project Idea?</h2>
              <CallToActionButton
                title="SHARE YOUR IDEA"
                buttonBefore={(
                  <a
                    href="/portfolio"
                    target="_blank"
                  >
                    <button type="button" className="call-to-cation-btn -secondary">
                      CHECK OTHER PROJECT
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

export default ProjectOnlineStore;
