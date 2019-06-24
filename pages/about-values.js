import React from 'react';

import Layout from '../components/layout/main';

export default class AboutValues extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Layout>
        <div className="content-wrap content-wrap-bg">
          <div className="content-socket content-socket-v">
            <div className="title-page">
              <div className="title">Values</div>
              <div className="title-s">What we consider worthy in our company</div>
            </div>
            <div className="orbit-wrap inner">
              <ul className="orbit">
                <li />
                <li />
                <li />
                <li />
              </ul>
              <div className="orbit-star orbit-star-1">
                <span />
              </div>
              <div className="orbit-star orbit-star-2">
                <span />
              </div>
              <div className="orbit-star orbit-star-3">
                <span />
              </div>
              <div className="orbit-star orbit-star-4">
                <span />
              </div>
            </div>
            <div className="stars-wrap">
              <div className="stars-1" />
              <div className="stars-2" />
              <div className="stars-3" />
              <div className="stars-4" />
            </div>
            <ul className="value-tabs">
              <li>
                <div className="ico">
                  <img width={45} src="/static/images/svg/ico-heart.svg" alt="Сonscience" />
                </div>
                <span>Сonscience</span>
              </li>
              <li>
                <div className="ico">
                  <img width={60} src="/static/images/svg/ico-pred.svg" alt="Predictability" />
                </div>
                <span>Predictability</span>
              </li>
              <li>
                <div className="ico">
                  <img width={70} src="/static/images/svg/ico-trans.svg" alt="Transparency to the Customer" />
                </div>
                <span>Transparency to the Customer</span>
              </li>
              <li>
                <div className="ico">
                  <img width={45} src="/static/images/svg/ico-health.svg" alt="Healthy Lifestyle" />
                </div>
                <span>Healthy Lifestyle</span>
              </li>
            </ul>
          </div>
          <div className="articles">
            <article className="article">
              <div className="image">
                <img src="/static/images/art-1.jpg" alt="art" />
              </div>
              <section>
                <p>
                  The main thing that we provide in the Keenethics team and bring to our clients is
                  honesty. The second thing is competency. The third - open development process. We
                  do believe that two sides take part in software development - both business and
                  developers.
                </p>
                <h2>
                  We have our own internal projects and so we do understand that even the perfect
                  technical solution without a proper business applying is meaningless.
                </h2>
                <p>
                  We are young and hungry-for-life. At the beginning it was a two part-time
                  freelancers. Today it’s more than 20 high skilled developers on our spaceboard
                  that are ready to make your business’ cosmic dreams come true. You want an app or
                  a website? Get in touch and we’ll discuss it.
                </p>
              </section>
            </article>
            <article className="article">
              <div className="image">
                <img src="/static/images/art-2.jpg" alt="art" />
              </div>
              <section>
                <p>
                  In Keenethics we believe that there’s plenty of improvements we can bring to the
                  industry to make software development more predictable, efficient and to make the
                  result closer to customer expectations. We make remote web development more keen
                  and ethical.
                </p>
                <h2>
                  We aim to develop cross functionality among our team.
                </h2>
                <p>
                  One day each astronaut on Keenethics board will independently perform and complete
                  any task - that’s our goal. This will allow us to follow the agile development
                  methodology just perfectly. We have a minimal management and maximum
                  self-management. Self-education plays huge role, cross code reviews and training
                  projects with new technologies helps our team to stay up-to-date developers.
                </p>
              </section>
            </article>
            <article className="article">
              <div className="image">
                <img src="/static/images/art-1.jpg" alt="art" />
              </div>
              <section>
                <p>
                  The main thing that we provide in the Keenethics team and bring to our clients is
                  honesty. The second thing is competency. The third - open development process. We
                  do believe that two sides take part in software development - both business and
                  developers.
                </p>
                <h2>
                  We have our own internal projects and so we do understand that even the perfect
                  technical solution without a proper business applying is meaningless.
                </h2>
                <p>
                  We are young and hungry-for-life. At the beginning it was a two part-time
                  freelancers. Today it’s more than 20 high skilled developers on our spaceboard
                  that are ready to make your business’ cosmic dreams come true. You want an app or
                  a website? Get in touch and we’ll discuss it.
                </p>
              </section>
            </article>
          </div>
        </div>
      </Layout>
    );
  }
}
