/* eslint-disable */
import React from "react";
import Link from "next/link";
import Layout from "../components/layout/main";
import ContentNavigation from "../components/content/navigation";

import { works } from "../main.config";

import Works from "../components/portfolio/works";
import CallToActionButton from "../components/content/CallToActionButton";
import LetsStart from "../components/about-us/LetsStart";
import WhyKeenethicsList from "../components/content/WhyKeenethicsList";

const ServicesMobileDevelopment = () => {
  const servicesList = [
    {
      icon:
        "/static/portfolio/non-profit-page/money.png",
      title: "Landing and donation pages",
    },
    {
      icon:
        "/static/portfolio/non-profit-page/heart.png",
      title: "Volunteer management software for nonprofits",
    },
    {
      icon:
        "/static/portfolio/non-profit-page/pray.png",
      title: "Nonprofit CRM systems",
    },
    {
      icon:
        "/static/portfolio/non-profit-page/idea.png",
      title: "Custom web and mobile nonprofit software",
    },
    {
      icon:
        "/static/portfolio/non-profit-page/group.png",
      title: "Fundraising & event management software",
    },
    {
      icon:
        "/static/portfolio/non-profit-page/speaker.png",
      title: "Marketing and advertising nonprofit solutions",
    },
    {
      icon:
        "/static/portfolio/non-profit-page/teamwork.png",
      title: "Communication & membership platforms",
    },
    {
      icon:
        "/static/portfolio/non-profit-page/industry.png",
      title: "Automation nonprofit solutions",
    },
  ];
  const whyKeenethics = [
    {
      title: "Empowering growth",
      desc: (
        <>
          At KeenEthics, we share your passion to help others. We support a lot
          of NGOs here in Ukraine and we have launched one of our own – we
          understand what a nonprofit organization needs. The software we
          develop aims to minimize struggles and to promote organizational
          growth.
        </>
      ),
    },
    {
      title: "Building value",
      desc: (
        <>
          The software solutions we develop are performant, reliable, and
          efficient. This way, we spare you the headache of nonprofit software
          maintenance and give you time to engage in more valuable tasks. You
          build value while we cover your back.
        </>
      ),
    },
    {
      title: "Launching in a matter of weeks",
      desc: (
        <>
          Developing a nonprofit software solution is usually a time-sensitive
          matter. We have tuned our partner engagement process to the point
          where we spend as little time on formalities as possible to launch the
          development in the shortest terms.
        </>
      ),
    },
    {
      title: "Bringing tech expertise",
      desc: (
        <>
          Our software development team has both industry experience and
          technical expertise. While you definitely have the former, we are
          ready to provide you with the latter. Our engineers will develop a
          custom solution according to the latest technological trends.
        </>
      ),
    },
    {
      title: "Protecting your data",
      desc: (
        <>
          As a nonprofit company, you cannot afford to lose any sensitive data
          about your organization, volunteers, partners, or clients. Regardless
          of the tech stack you choose, we will do our best to ensure the
          application security.
        </>
      ),
    },
  ];

  return (
    <Layout>
      <ContentNavigation />
      <div className="content-block">
        <section>
          <h1 className="text-center">Nonprofit Software Development</h1>
          <p className="text-center text-italic">
            Helping non-profit companies achieve their ethical goals.
          </p>
          <CallToActionButton href="/contacts" />
        </section>
        <section>
          <h2>Nonprofit Industry</h2>
          <p>
            Organizations in the nonprofit sector work in order to serve the
            public interests, not earn a profit. These companies are
            particularly important as they pursue remarkable goals, which other
            businesses might not be interested in. Such companies are the
            foundation of the Tech4Good movement, and they aspire to the world
            being a better place. Running a nonprofit company is worth respect.
            Yet, nonprofit management is not an easy task.
          </p>
          <p>
            A nonprofit organization, the same way as a commercial one, needs to
            manage its human resources, communicate with the target audience,
            advertise its activity, manage logistics, keep financial records,
            and many more. The only task that nonprofit businesses may be exempt
            from is paying taxes, but this depends on a state that the company
            operates in.{" "}
          </p>
          <p>
            Software for nonprofits is aimed to make the lives of volunteers and
            nonprofit managers easier. Nonprofit CRMs, event, volunteer, and
            membership management systems – all these and many more are designed
            to facilitate lives and improve performance of nonprofit
            organizations.
          </p>
          {/* <FeaturesList list={edTechIndustry} titleItalic /> */}
        </section>

        <section>
          <h2>Challenges in Nonprofit Software Development</h2>
          <ul className="challenges-list">
            <li className="challenges-item">
              <h3>
                <img
                  src="/static/services/services-education-software-development/challenges-you-face.png"
                  alt="challenges you face"
                />
                CHALLENGES YOU FACE
              </h3>
              <b>Heavy Workload</b>
              <p>
                A nonprofit company hires people on a voluntary basis. Most of
                them work part-time. Often, there are simply not enough hands to
                perform a task.
                <b>How can you manage the heavy workload?</b>
              </p>
            </li>
            <li className="challenges-item">
              <h3>
                <img
                  src="/static/services/services-education-software-development/solutions-we-offer.png"
                  alt="challenges you face"
                />
                SOLUTIONS WE OFFER
              </h3>
              <b>Automation</b>
              <p>
                Develop a nonprofit software solution to automate simple,
                monotonous, time-consuming tasks. If routinary nonprofit
                management tasks are performed by a program, your volunteers
                will have more time for some creative duties.
              </p>
            </li>
            <li className="challenges-item">
              <h3 className="hidden-xs">
                <img
                  src="/static/services/services-education-software-development/challenges-you-face.png"
                  alt="challenges you face"
                />
                CHALLENGES YOU FACE
              </h3>
              <b>HR Management</b>
              <p>
                A nonprofit business often involves volunteers and donors. A
                company has no financial or legal leverage to control them.
                Managing them is a challenge.
                <b>How to manage people effectively?</b>
              </p>
            </li>
            <li className="challenges-item">
              <h3 className="hidden-xs">
                <img
                  src="/static/services/services-education-software-development/solutions-we-offer.png"
                  alt="challenges you face"
                />
                SOLUTIONS WE OFFER
              </h3>
              <b>Communication Platform</b>
              <p>
                To optimize HR management and effective teamwork, ensure a
                reliable and convenient communication channel. Use a ready-made
                solution with or without any customizations or develop your own
                communication platform.
              </p>
            </li>
            <li className="challenges-item">
              <h3 className="hidden-xs">
                <img
                  src="/static/services/services-education-software-development/challenges-you-face.png"
                  alt="challenges you face"
                />
                CHALLENGES YOU FACE
              </h3>
              <b>Event Nonprofit Management</b>
              <p>
                Conducting a nonprofit event, securing the necessary funding,
                managing the logistics, promoting the event, and communicating
                with attendees is a lot of work.
                <b>Is there an easier way to conduct events?</b>
              </p>
            </li>
            <li className="challenges-item">
              <h3 className="hidden-xs">
                <img
                  src="/static/services/services-education-software-development/solutions-we-offer.png"
                  alt="challenges you face"
                />
                SOLUTIONS WE OFFER
              </h3>
              <b>Event Management Software</b>
              <p>
                Develop a software solution, via which you can manage all the
                organizational processes, launch a crowdfunding campaign, and
                attract partners.{" "}
                <Link href="/project-worldlabs">
                  <a target="_blank">Here</a>
                </Link>{" "}
                is an example of such a nonprofit management platform for
                business.
              </p>
            </li>
          </ul>
          <h2>Do you agree with our solutions?</h2>
          <CallToActionButton title="Contact us" href="/contacts" />
        </section>

        <section>
          <h2>Custom Nonprofit Development Services We Offer</h2>
          <ul className="we-offer-list">
            {servicesList.map(({ icon, title, href }) => (
              <li className="we-offer-item" key={href}>
                <figure>
                  <img src={icon} alt={title}/>
                  <figcaption className="we-offer-figcaption">
                    {href ? (
                      <Link href={href}>
                        <a>{title}</a>
                      </Link>
                    ) : (
                      title
                    )}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Portfolio</h2>

          <div>
            <p className="text-bold text-center">WorldLabs</p>
            <p>
              WorldLabs is a business incubation platform. It engages users to
              share their innovative ideas and to look for partners, supporters,
              or investors. By its nature, WorldLabs resembles a fundraising &
              event management system. It can be used by nonprofit companies to
              advance their valuable ideas and to look for public support. The
              ultimate goal of WorldLabs is to foster technological and societal
              progress.
            </p>
            <div>
              <div style={{ marginBottom: "5px" }}>
                <b>Platform</b>
                :&nbsp;
                <Link href="/services-web-development">Web</Link>
              </div>
              <div style={{ marginBottom: "5px" }}>
                <b>Technologies</b>:
                <span className="technologies-links">
                  <span>
                    <Link href="/tech-data-base-mongo">MongoDB,</Link>
                  </span>
                  <span>
                    <Link href="/tech-front-end-react">React,</Link>
                  </span>
                  <span>and</span>
                  <span>
                    <Link href="/services-web-development-meteor">Meteor</Link>
                  </span>
                </span>
              </div>
              <div style={{ marginBottom: "5px" }}>
                <b>Methodology</b>: Kanban
              </div>
              <div style={{ marginBottom: "5px" }}>
                <b>Team</b>: 10 full-stack developers and QA specialists, 1
                Project Manager.
              </div>
            </div>
            <Works
              works={works.filter(({ title }) => ["WorldLabs"].includes(title))}
            />
          </div>

          <div>
            <h3>SelfLeaders</h3>
            <p>
              SeldLeaders is a complex self-development and personal growth
              platform. It consists of many tools, and the one we made is the
              tool for personnel training. This project pursues a useful goal of
              empowering people to advance their emotional intelligence and
              professional skills. The SelfLeaders company is a commercial
              business, which, however, supports and advances the Tech4Good
              movement. Their software solution is suitable to be used by
              nonprofit organizations. In fact, the company offers their tools
              to NGO employees for free.
            </p>

            <div>
              <div style={{ marginBottom: "5px" }}>
                <b>Platform</b>:{" "}
                <Link href="/services-web-development">
                  <a>Web</a>
                </Link>{" "}
                <span>and</span>{" "}
                <Link href="/services-mobile-development">
                  <a>Mobile</a>
                </Link>{" "}
                (
                <Link href="/services-mobile-development-android">
                  <a>Android</a>
                </Link>{" "}
                <span>and</span>{" "}
                <Link href="/services-mobile-development-apple">
                  <a>iOS</a>
                </Link>
                )
              </div>
              <div style={{ marginBottom: "5px" }}>
                <b>Technologies</b>:{" "}
                <Link href="/tech-api-integration-graphql">
                  <a>GraphQL,</a>
                </Link>
                <Link href="/tech-front-end-react">
                  <a>React,</a>
                </Link>
                <Link href="/tech-back-end-meteor">
                  <a>Meteor</a>
                </Link>
              </div>
              <div style={{ marginBottom: "5px" }}>
                <b>Methodology</b>: Scrum
              </div>
              <div style={{ marginBottom: "25px" }}>
                <b>Team</b>: 4 full-stack developers, 1 QA specialist, and 1
                Project Manager.
              </div>
            </div>
            <Works
              works={works.filter(({ title }) =>
                ["SelfLeaders"].includes(title)
              )}
            />
          </div>

          <div>
            <h3>LetKidsMove</h3>
            <p>
              This project stands out among the others. It is not a software for
              nonprofits we have developed, it is a nonprofit organization that
              we have founded and keep running ourselves. The idea of this
              initiative is to inspire an educational reform in Ukraine, to
              address the problem of immobility and sedentary lifestyle, and to
              encourage pupils and students to spend less time in a sitting
              position. To learn more about the project or to support it, you
              can visit{" "}
              <Link href="https://letkidsmove.org/en">
                <a rel="nofollow noreferrer" target="_blank">
                  the website
                </a>
              </Link>{" "}
              or read this{" "}
              <Link href="/blog/leaders-of-tech4good-let-kids-move">
                <a taget="_blank">Tech4Good</a>
              </Link>{" "}
              article. The example of this project proves that{" "}
              <Link href="/">
                <a taget="_blank">KeenEthics</a>
              </Link>
              perfectly understands the daily aspirations and struggles of a
              nonprofit company.
            </p>
            <Works
              works={works.filter(({ title }) =>
                ["LetKidsMove"].includes(title)
              )}
            />
          </div>
        </section>

        <section>
          <h2>Why KeenEthics?</h2>
          <WhyKeenethicsList list={whyKeenethics} />
        </section>
        <h2>Now, let’s discuss your business idea!</h2>
        <LetsStart />
      </div>
    </Layout>
  );
};

export default ServicesMobileDevelopment;
