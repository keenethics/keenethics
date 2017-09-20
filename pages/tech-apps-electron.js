import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';
import PageNavigation from '../components/page/navigation';

import { techApps } from '../main.config';

const TechAppsElectron = ({ url }) => (
  <Layout currentURL={url}>
    <div className="content-wrap">
      <PageNavigation
        url={url}
        image="app"
        points={techApps()}
      />
      <div className="content-block">
        <div className="content">
          <h2>Electron App Development</h2>
          <p>
            Let&apos;s start from what is Electron and how it can improve your business. You may
            want to look for Electron development services when creating a cross-platform desktop
            application for your company or idea.
          </p>
          <p>
            Shortly, Electron is a framework for creating native applications with web technologies
            like JavaScript, HTML, and CSS. The main idea behind developing desktop apps with
            JavaScript is that Electron developers build one codebase and package it for each
            operating system separately. This fact also makes maintenance easier.
          </p>
          <p>
            There are 3 main benefits of Electron development:
          </p>
          <ul>
            <li>
              Electron uses Chromium and Node.js so you can build your app with HTML, CSS, and
              JavaScript.
            </li>
            <li>
              Electron is an open source project maintained by GitHub and an active community of
              contributors.
            </li>
            <li>
              Compatible with Mac, Windows, and Linux, Electron apps build and run on three
              platforms.
            </li>
          </ul>
          <p>
            The great thing about Electron is that Electron framework helps to focus on the core of
            your application. Initially developed for GitHub&apos;s Atom editor, Electron has since
            been used to create applications by companies like Microsoft, Facebook, Slack, and
            Docker.
          </p>
          <h3>Electron App Developers</h3>
          <p>
            Hiring an offshore Electron App development company is far more cost-efficient as rates
            per hour usually are lower because of the location. All you need to do is to find a
            trustworthy software service vendor. Then there will be no need to worry about the
            quality of the product.
          </p>
          <p>
            Ukraine remains one of the top IT outsourcing destinations in Eastern Europe due to its
            impressive talent pool, reasonable prices, continually developing business
            infrastructure and interest towards new technologies and innovation.
          </p>
          <p>
            When choosing an offshore Electron App development company, first of all, pay attention
            to the stack of technologies company uses. Skilled Electron App developers must have
            strong expertise in HTML, CSS, JavaScript, and Node.js. If you have found an offshore
            software development vendor specializing in hybrid app development, it means you hit the
            jackpot.
          </p>
          <p>
            You can explore our works and find an Electron App example or contact us directly to
            receive some case studies and get more details.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
TechAppsElectron.propTypes = {
  url: PropTypes.object,
};
TechAppsElectron.defaultProps = {
  url: {},
};

export default TechAppsElectron;
