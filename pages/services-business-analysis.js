/* eslint-disable */
import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import './services-education-software-development.scss';

import CallToActionButton from '../components/content/CallToActionButton';

import { works } from '../main.config';

import Works from '../components/portfolio/works';

const ServicesCustomHealthcareSoftwareDevelopment = () => (
  <Layout>
    <ContentNavigation />
    <div className="content-block">
      <section>
        <h1 className="text-center">
          Business Analysis
        </h1>
        <p className="text-center text-italic">
          Reducing development expenses and boosting sales through sound project research
        </p>
        <CallToActionButton />
      </section>
      <h2>Now, let’s discuss your business idea!</h2>
      <CallToActionButton
        title="Contact us"
        href="/contacts"
      />
    </div>
  </Layout>
);

export default ServicesCustomHealthcareSoftwareDevelopment;
