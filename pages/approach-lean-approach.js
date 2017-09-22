import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

const ApproachLeanApproach = ({ url }) => (
  <Layout currentURL={url}>
    <ContentNavigation url={url} image={'lean'} />
    <div className="content-block">
      <h1>Lean Approach</h1>
      <p>
        In the real world you can never be sure how the market is going to behave tomorrow and
        what can happen with your own business. According to Bloomberg, 8 of 10 entrepreneurs
        who start businesses fail within the first 18 months. We can find plenty reasons why
        projects fail. Of course, there is a certain percentage of raw ideas and indifferent,
        careless startupers. No wonder they fail. But for the rest the main reason often is a
        wrong approach.
      </p>
      <p>
        The old approach tells us that we must think long and hard, deeply investigate the
        market, then start to plan our activities for the next few years… Maybe, for some
        industries it does work. But in most cases, in the software development sphere what is
        happening is that you are overworking and, probably, wasting time and costs. As Steve
        Blank said, &quot;No business plan survives first contact with customers.&quot;
      </p>
      <p>
        We are quite sure you have heard that most startups are now using the lean approach
        methodology. The main idea of the lean approach is to maximize customer value while
        minimizing waste. Lean means creating more value for customers with fewer resources.
        Less is more.
      </p>
      <p>
        How does the lean approach work? The basic formula behind the lean software development
        process is validated learning plus short development cycles. The startups get oriented
        on building the simplest product possible (usually called the MVP) to release it to the
        market and see if it has demand. If yes, the product gets improved according to
        user&apos;s expectations, and new features are again tested on the real market. If not,
        the product is redesigned according to the market feedback. To follow the lean
        methodology, both a software development service provider and a client must be flexible
        and fearless.
      </p>
      <p>
        A lean organization understands customer value and focuses its key processes to
        continuously increase it. The ultimate goal is to provide perfect value to the customer
        through a perfect value creation process that has zero waste.
      </p>
      <p>
        Key principles for lean management approach include:
      </p>
      <ul>
        <li>Defining value from the standpoint of the end customer;</li>
        <li>
          Identifying each step in a business process and eliminating those steps that do not
          create value;
        </li>
        <li>
          Making the value-creating steps occur in tight sequence;
        </li>
        <li>
          Repeating the first three steps on a continuous basis until all waste has been
          eliminated;
        </li>
      </ul>
      <h2>Lean Software Development</h2>
      <p>
        The lean approach is not only an opportunity for a startup to achieve success, but also
        a great way to communicate with the client and optimize the whole product development
        process. On the Keenethics spaceship, we believe in Agile project management. Agile
        development requires our astronauts, and the client to take part in shaping the product,
        defining its features in each iteration.
      </p>
      <p>
        Benefits of following the lean manufacturing principles:
      </p>
      <ul>
        <li>reduction in lead time for the delivery of products and services;</li>
        <li>increase in productivity;</li>
        <li>reduction of inventory levels and Work-In-Process;</li>
        <li>
          improvement of quality (with a reduction of errors, and of the change orders that
          often result from these errors);
        </li>
        <li>increased simplicity of the processes (simplified to maximize the added value);</li>
        <li>reduction of paperwork.</li>
      </ul>
      <p>
        On our Keenethics spaceship, we have all required knowlage and tools to organize a lean
        startup development process and deliver an amazing Mobile and Desktop experience to your
        users. Contact us anytime to launch your big idea.
      </p>
    </div>
  </Layout>
);

ApproachLeanApproach.propTypes = {
  url: PropTypes.object,
};
ApproachLeanApproach.defaultProps = {
  url: {},
};

export default ApproachLeanApproach;
