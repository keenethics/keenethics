import React from 'react';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';

const baseColor = '#fe6340';

const ProjectPrix = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">OneRemission</h2>
              <p className="description">Making the lives of cancer survivors easier</p>
              <PortfolioTechnologyTags tags={['Healhcare', 'E-Commerce']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <div className="macbook--screen">
                  <img src="/static/portfolio/one-remission/one-remission.jpg" alt="OneRemission" />
                </div>
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <p>
              OneRemission is a company headquartered in New York but with the team members across
              4 continents. It aims at making the lives of cancer survivors, fighters, and
              supporters easier, safer, and more enjoyable.
            </p>
            <h2 className="title">What Is OneRemission?</h2>
            <p>
              OneRemission was launched with the aim to help cancer survivors, fighters,
              and supporters learn more about cancer and post-cancer health care. It is one of
              the major apps in the field of Integrative Oncology, which encompasses post-cancer
              nutrition, exercise, sleep, and stress management practices. For the OneRemission
              team, a user’s physical, psychological, and emotional
              well-being is the highest priority.
            </p>
            <h2 className="title">How OneRemission Came to Be?</h2>
            <p>
              OneRemission, Inc. have mounted an immense challenge for themselves: to launch a
              company with the needs and interests of cancer survivors in mind, which would let
              them not feel lost after leaving the hospital.
            </p>
            <p>They successfully beat it off, and today, they challenge others.</p>
            <div className="project-content-chapter" style={{ padding: '0 5%' }}>
              <p className="chapter-paragraph italic quote">
                “Are you ready to join our team to
                disrupt the big pharma industry by making a new norm when every cancer survivor
                will have only One Remission?”
              </p>
            </div>
          </div>
          <div className="oneremission-app-img-wrap">
            <img src="/static/portfolio/one-remission/oneremission-img-1.png" alt="OneRemission App" />
          </div>
          <div className="project-content-more">
            <h2 className="title">What Makes OneRemission Special?</h2>
            <div style={{ paddingLeft: '10%' }}>
              <h3><b>Providing Valuable Knowledge</b></h3>
              <p>
                The app features a comprehensive knowledge base of diets, exercises, and
                post-cancerpractices. It is curated by Integrative Medicine experts, whose
                goal is to let one live a safe and enjoyable life. For instance, a user can
                search for the information on cancer-related risks and benefits of a
                certain food product.
              </p>
              <h3><b>Providing a Sense of Confidence</b></h3>
              <p>
                The app helps patients who have recently left the hospital become self-sufficient
                and manage their lives by themselves, knowing that they do everything right
                without a constant need to consult a practitioner.
              </p>
              <h3><b>Providing Urgent Help</b></h3>
              <p>
                If there is a question that requires urgent help of a doctor, the app enables
                a user to consult with an online oncologist 24/7. Surely, it cannot substitute
                actual medical help in emergency cases. While the app does not offer a diagnosis
                or medical prescriptions, it is a perfect solution for informational purposes.
              </p>
            </div>
          </div>
          <div style={{ backgroundColor: '#f5f5f5', marginBottom: '20px' }}>
            <img src="/static/portfolio/one-remission/oneremission-img-2.png" alt="OneRemission App" style={{ marginLeft: 0 }} />
          </div>
          <div className="project-content-more">
            <h2 className="title">Our Cooperation</h2>
            <div>
              <h3><b>Challenges</b></h3>
              <p>
                When we started our partnership, we had two major objectives: to upgrade BotPress
                and to refactor the code. These measures were to optimize the performance of the
                app and to boost its productivity.
              </p>
              <h3><b>Team</b></h3>
              <p>
                Two devoted software developers and one professional Project Manager from
                KeenEthics were glad to help OneRemission pursue their great goal.
              </p>
              <h3><b>Technologies</b></h3>
              <p>Currently, the application has been developed only for the iOS platform.</p>
            </div>
            <div className="tags-blog" style={{ marginTop: '40px' }}>
              <p>The technologies we used include:</p>
              <PortfolioTechnologyTags tags={['Node js', 'Mongo', 'Wit.ai', 'BotPress', 'WebSocket']} />
            </div>
          </div>
          <img src="/static/portfolio/one-remission/oneremission-img-3.jpg" alt="OneRemission App" />
          <div className="project-content-more">
            <a
              href="http://oneremission.com/"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="link"
              style={{ background: baseColor }}
            >
              Look at the project
            </a>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectPrix;
