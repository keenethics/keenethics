import React, { useContext } from 'react';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import CallToActionButton from '../components/content/CallToActionButton';
import FeaturesList from '../components/content/FeaturesList';
import WhyKeenethicsList from '../components/content/WhyKeenethicsList';

import { techFrontEnd } from '../main.config';

import PostsContext from '../components/context/posts-context';
import Posts from '../components/blog/posts';

const PageContent = () => {
  const posts = useContext(PostsContext) || [];

  const whySvelte = [
    {
      icon: '/static/technologies/meteor/users.png',
      alt: 'Users',
      description:
  <>
    <b>Open source</b>
    <br />
    Svelte was introduced by Rich Harris in 2016, and since then, this JS framework has been
    free and open source. Strong community support translates into higher quality and security
    of this technology.
  </>,
    },
    {
      icon: '/static/technologies/vue/like.png',
      alt: 'Like',
      description:
  <>
    <b>Efficient</b>
    <br />
    The explicit goal of Svelte is to reduce the amount of code that needs to be written to
    achieve a certain development result. Svelte code is usually about 40% smaller than its
    React equivalent.
  </>,
    },
    {
      icon: '/static/technologies/vue/flash-symbol.png',
      alt: 'Flash',
      description:
  <>
    <b>Lightweight</b>
    <br />
    Svelte does not need any plugins to be working, unlike other JS frameworks, such as React
    or Vue. The styling of Svelte is also relatively simple.
  </>,
    },
    {
      icon: '/static/technologies/vue/profit.png',
      alt: 'Profit',
      description:
  <>
    <b>Performant</b>
    <br />
    Virtual DOM is faster than the actual DOM, but it is yet not perfect. Svelte solves the
    performance issues associated with DOM. Unlike any other framework, Svelte does not use DOM.
  </>,
    },
  ];

  const whatDoWeOfferIcons = [
    {
      icon: '/static/technologies/vue/image20.png',
      title:
  <>
    Web and mobile Svelte
    <br />
    development
  </>,
    },
    {
      icon: '/static/technologies/vue/image9.png',
      title:
  <>
    Svelte applications
    <br />
    maintenance and support
  </>,
    },
    {
      icon: '/static/technologies/vue/image1.png',
      title: 'UI/UX development for Svelte',
    },
    {
      icon: '/static/technologies/vue/image19.png',
      title: 'Svelte data management',
    },
    {
      icon: '/static/technologies/vue/image14.png',
      title:
  <>
    Custom Svelte software
    <br />
    development solutions
  </>,
    },
    {
      icon: '/static/technologies/vue/image6.png',
      title: 'Svelte     migrating',
    },
  ];

  const whyKeenethics = [
    {
      title: 'Empowering growth',
      desc: 'Developing a custom web or mobile app is how we empower your business. You may automate and optimize some existing tasks, or you may monetize the software product itself. In any case, by reducing expenses or increasing revenue with the help of custom software, you help your business grow.',
    },
    {
      title: 'Building value',
      desc: 'KeenEthics has a clear mission: we strive for a tech world devoted to the social good. Honest and fair attitude towards employees, partners, and the global community is the major value that we offer. Partner up with us to become a part of the ethical movement!',
    },
    {
      title: 'Launching in a matter of weeks',
      desc: 'The software development process is expensive and lengthy. If only there was a way to make it more efficient! This is the challenge we rose to a few years earlier, and we have greatly advanced in terms of efficiency ever since. Our Engagement Manager will make sure that we launch the development process in the shortest terms possible.',
    },
    {
      title: 'Bringing tech expertise',
      desc: 'All the software engineers at KeenEthics are full-stack and JS-oriented. By maintaining a narrow focus on our tech stack, we make sure that our services are of the highest quality. We do not want to disperse our attention. Instead, we want to make sure that, what we do, we do it best.',
    },
    {
      title: 'Protecting your data',
      desc: 'Data security is the number one concern in software development because it is about the safety of your business and your users. To ensure it, a great deal of technical and legal measures need to be taken. Our developers never overlook data safety.',
    },
  ];

  return (
    <>
      <ContentNavigation image="fe" points={techFrontEnd()} />
      <div className="content-block">
        <section>
          <h1 className="text-center">
            Svelte JS Development Services
          </h1>
          <p className="text-center text-italic">
            Using a simple but incredibly efficient and performant user interface development
            framework
          </p>
          <CallToActionButton />
          <h2 style={{ fontSize: '40px', fontWeight: 900, marginBottom: '1em' }}>#5</h2>
          <p className="text-center">
            most popular project on GitHub in 2019, according to&nbsp;
            <a href="https://risingstars.js.org/2019/en/#section-all" target="_blank" rel="noopener noreferrer nofollow">RisingStars.js</a>
            .
          </p>
        </section>
        <section>
          <h2>What Is Svelte?</h2>
          <p>
            Svelte is a component JavaScript framework for building user interfaces of web apps.
            It represents an entirely fresh approach towards web development. Unlike other
            frameworks, such as React or Vue, which allow you to write declarative code, with
            Svelte, you write imperative code.
          </p>
          <p>
            The Svelte framework rethinks reactivity. It ditches complex state management libraries,
            changes the understanding of hooks and API, and gets rid of the virtual DOM. While
            Svelte is not yet as popular as other JavaScript frameworks, it shows exponential growth
            in usage and community support. Such a radical approach to user interface development
            takes time to be accepted in the developer society. Yet, those developers who have
            already given it a try — they enjoy working with this technology.
          </p>
        </section>
        <section>
          <h2>Why Svelte?</h2>
          <FeaturesList list={whySvelte} />
          <CallToActionButton
            title="HIRE SVELTE DEVELOPERS"
            href="/contacts"
          />
        </section>
        <section>
          <h2>What Svelte JS Development Services Do We Offer?</h2>
          <ul className="mobile-development-list">
            {
              whatDoWeOfferIcons.map(({ icon, title, href }) => (
                <li className="mobile-development-item" key={icon}>
                  <figure>
                    <img src={icon} alt={title} />
                    <figcaption className="mobile-development-figcaption">
                      {
                        href ? <a href={href}>{title}</a> : title
                      }
                    </figcaption>
                  </figure>
                </li>
              ))
            }
          </ul>
        </section>
        <section>
          <h2>Why KeenEthics?</h2>
          <WhyKeenethicsList list={whyKeenethics} />
        </section>
        <section>
          <h2>Insights</h2>
          <div className="post-list-wrapper">
            <Posts posts={posts.filter(({ fields }) => ['React vs Svelte: How to Build Messaging Components'].includes(fields.title.trim()))} />
          </div>
        </section>
        <h2>Now, let’s discuss your business idea!</h2>
        <CallToActionButton
          title="Contact us"
          href="/contacts"
        />
      </div>
    </>
  );
};

const TechFrontEndSvelte = () => (
  <Layout>
    <PageContent />
  </Layout>
);

export default TechFrontEndSvelte;
