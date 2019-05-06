import React from 'react';

import Layout from '../components/layout/main';

export default class AboutSocialSide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Layout>
        <div className="content-wrap content-wrap-bg">
          <div className="content-socket content-socket-a">
            <div className="title-page">
              <div className="title">Social Side</div>
              <div className="title-s">Other side of our team</div>
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
          </div>
          <div className="content-full">
            <div className="ser-wrap ser-quality">
              <a className="ser-item" href="about-social_side-inner">
                <div className="ico">
                  <span>
                    <img href="" width={36} src="/static/images/svg/s-1.svg" alt="" />
                  </span>
                </div>
                <div className="ser-ttl">Extra Profit For Social Needs</div>
                <div className="ser-text">
                  We have our own internal projects and so we do understand that even the perfect
                </div>
              </a>
              <a className="ser-item" href="about-social_side-inner">
                <div className="ico">
                  <span>
                    <img width={48} src="/static/images/svg/s-2.svg" alt="" />
                  </span>
                </div>
                <div className="ser-ttl">Drive JS Community</div>
                <div className="ser-text">
                  We have our own internal projects and so we do understand that even the perfect
                </div>
              </a>
              <a className="ser-item" href="about-social_side-inner">
                <div className="ico">
                  <span>
                    <img width={30} src="/static/images/svg/s-3.svg" alt="" />
                  </span>
                </div>
                <div className="ser-ttl">Design Educational Projects</div>
                <div className="ser-text">
                  We have our own internal projects and so we do understand that even the perfect
                </div>
              </a>
            </div>
            <div className="content">
              <p>
                Backend development - is the process of programming the site and filling it with
                functional. Creating a core site, site development platform, filling it with basic
                functionality and creation of the administrative area - this is the backend
                development.
                <br />
Website backend development process is a web programming, the
                purpose of which is to implement server-side of site, integrate database connect it
                with user&apos;s (front-end) side. Backend development also includes software setup
                on a server.
              </p>
              <p>
                The frontend sends information and commands from the user to the website backend,
                and that in turn makes their processing. In short, front-end is created for the
                users and back-end for admins.
              </p>
              <p>
                Backend developer must have a basic programming skills. It&apos;s a coding systems
                and languages for every field of development. Java and C# are, maybe, the most
                popular programming languages for now. But who knows, times change, web and app
                development grows, Ruby, Javascript and Python are catching up. Backend development
                requires a database skill.
              </p>
              <p>
                A majority of e-commerce websites have databases, so this expertise is also basic
                for backend developers.
              </p>
              <p>
                It&apos;s not so easy to code. It&apos;s even harder to code good stuff. A good
                coder must know backend development tools. It means that good backend coder makes a
                complex from development tools and “hand-made code”. Besides, we do believe that
                high-skilled backend developer must know both frontend and backend tools.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
