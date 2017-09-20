import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import PageNavigation from '../components/page/navigation';
import PageTabs from '../components/page/tabs';

import { techFrontEnd } from '../main.config';

const ServicesOutstaffing = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap with-icons">
      <PageNavigation url={url} image="fe" />
      <div className="content-block">
        <PageTabs
          points={techFrontEnd()}
        />
        <div className="content">
          <h2>Front-End</h2>
          <p>
            Front-end development is a process of the creation site’s client-side. Front-end
            developer is engaged in site layout template and user interface creation. Typically,
            front-end developer - is a master of all trades. He must have the design talent, be a
            high-skilled coder and a good programmer - like all-in-one.
          </p>
          <p>
            The modern front-end developer should easily hold html5 and css3, JavaScript (and at
            least JQuery), main front end development tools. Each front-end specialist has his own
            designs, which he keeps in frameworks etc. Many developers work in the popular
            frameworks, such as TwitterBootstrap, Foundation 3, Compass.
          </p>
          <p>
            Front end developers are experts in their field and usually have many skills from
            related fields. They have learned about HTML, CSS, usability, design, color theory and
            more on Javascript. Most likely, in addition, a front-end developer has read a couple of
            books on the server-side programming languages, which describes the interaction with the
            server side using Ajax technologies. Front end developers should consider the methods of
            project development in general: they are in addition to the HTML markup and write
            Javascript code often have to deal with an even number of technologies.
          </p>
          <p>
            Front end developer deals not only with the specific concepts and tasks in his work, but
            often with abstract thinking. He is one of those people who can build a bridge between
            mathematics and art, he actually takes mathematics as an art. Due to the fact that he is
            able to combine these two disciplines, because of the fact that he could connect the
            user experience to the processes of logical processing - it is a very valuable asset to
            the business.
          </p>
          <p>
            In the past, front end developer was the designer who sent a bunch of GIF images to the
            server developer. Then he placed them on multiple tables, which have created the markup
            generators. This code was not structurally or semantics.
          </p>
          <p>
            But those days are gone and now front end developer’s tasks changed dramatically, it
            became more complex and important about the advent of Ajax, HTML5, CSS3, web
            applications, social networks, mobile devices, and SEO. It&apos;s too much technology to
            be able to covered by one person. Businesses should keep pace with emerging trends and
            expanding technology. And hire the right type of developers to achieve success.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
ServicesOutstaffing.propTypes = {
  url: PropTypes.object,
};
ServicesOutstaffing.defaultProps = {
  url: {},
};

export default ServicesOutstaffing;
