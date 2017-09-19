import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

const ServicesProof = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <ContentNavigation url={url} image={'proof'} />
      <div className="content-block">
        <div className="content">
          <h2>Proof of concept</h2>
          <p>
            When an idea of a new product or service comes to mind, people often hesitate to bring
            it to life. It is easier to find the reason why we should not do anything rather than to
            give our idea a try. We think it will be difficult and in the end we will be
            disappointed.
          </p>
          <p>
            Our astronauts suggest not to give up and take things easier. No one can develop a
            perfect web product or service at once. There is always some place for updates, adding
            new and removing old features, bug fixing and so on.
          </p>
          <p>
            In this case, the best solution is to look for proof of concept services on the local or
            internal market. Generally, proof of concept is an evidence that demonstrates that a
            business model or idea is feasible, doable. A proof of concept is a system designed
            purely to demonstrate the functionality of a single or small set of principles to be
            integrated into other systems. Proof of concept is used to validate technical
            feasibility, helps identify potential stumbling blocks, helps determine the scope to
            complete the project.
          </p>
          <p>
            We do not consider all UI/UX aspects, all possible tools, and technologies when creating
            a proof of concept because it is not only time-consuming but might dilute the ability to
            determine if the concept is viable. Proof of concept prototype does not have to be fully
            functional, it just has to prove that the idea you are willing to develop can be done.
          </p>
          <h3>Proof of concept vs Prototype</h3>
          <p>
            A lot of startups strive to receive a prototype as soon as possible. But not always it
            is necessary. Startups can save a lot of resources, including time, and costs if they
            start from the basics. Ideally, a path of the planning and developing should go like
            this:
          </p>
          <ul>
            <li>Proof of Concept (PoC);</li>
            <li>Prototype;</li>
            <li>Pilot;</li>
            <li>Production.</li>
          </ul>
          <p>
            Therefore, the battle proof of concept vs prototype does not make much sense. And
            choosing between proof of concept vs pilot makes even less sense. As Tom Chi, co-founder
            of Google X says: “Maximizing the rate of learning by minimising the time to try
            things.”
          </p>
          <p>
            Proof of concept prototypes can be implemented in many fields. They are commonly used in
            engineering, software creation, the film industry, pharmaceutical companies, business
            developments and so on.
          </p>
          <p>
            In most cases, for investors, it is enough to see a proof-of-concept or a prototype in
            order to make a decision on whether they are willing on financing your idea or not.
          </p>
          <p>
            To make the budget smart and avoid overpaying, hire an outsourcing software development
            service provider that delivers proof of concept services abroad. A lot of development
            companies in Eastern Europe have experience helping startups to grow. For example, on
            our Keenethics spaceship, management, development and quality assurance teams are enough
            qualified to launch a high-class startup product or service, and, of course, we can
            deliver a proof of concept service and check your cool ideas. Contact us and we will be
            glad to bring your idea to life!
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
ServicesProof.propTypes = {
  url: PropTypes.object,
};
ServicesProof.defaultProps = {
  url: {},
};

export default ServicesProof;
