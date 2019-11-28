import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout/main';

import OurMethods from '../components/blocks/our-methods/OurMethods';
import Methodologies from '../components/blocks/methodologies/Methodologies';
import Industries from '../components/blocks/industries/Industries';

const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

JsonLd.propTypes = {
  data: PropTypes.object.isRequired,
};

const companyData = {
  '@context': 'http://www.schema.org',
  '@type': 'Organization',
  name: 'KeenEthics',
  url: 'https://keenethics.com/',
  description: 'Custom Software Development Company',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kulparkivska St, 59',
    addressLocality: 'Lviv',
    postalCode: '79000',
    addressCountry: 'Ukraine',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+38 (096) 814 72 66',
    contactType: 'Sales Representative',
  },
};

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Layout>
        <JsonLd data={companyData} />
        <div className="block block-our-methods">
          <header className="block--header">
            <div className="block--header-title">
              Our methods
            </div>
            <div className="block--header-description">
              We guide businesses through every stage of software development while delivering
              effective and elegantly designed solutions to improve your daily business processes.
            </div>
          </header>
          <OurMethods />
        </div>
        <Methodologies />
        <Industries />
      </Layout>
    );
  }
}
