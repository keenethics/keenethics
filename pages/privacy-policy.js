import React from 'react';

import Layout from '../components/layout/main';
import Background from '../components/content/background';

const PrivacyPolicy = () => (
  <Layout>
    <div className="page-header">
      <div className="">
        <h1>
          Privacy Policy
        </h1>
        <Background className="open-source-page-background" />
      </div>
    </div>
    <div className="content-block">
      <section>
        <h1>GDPR Privacy Policy</h1>
        <p>KeenEthics operates the https://keenethics.com/ website, which provides the software development services (or the Services).</p>
        <p>This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Services, the KeenEthics website.</p>
        <p>If you choose to use our Services, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Services. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
        <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at https://keenethics.com/ unless otherwise defined in this Privacy Policy. Our Privacy Policy was created with the help of the <a href="https://www.privacypolicytemplate.net/" target="_blank" rel="">Privacy Policy Template</a> and the Disclaimer Template.</p>
      </section>
      

    </div>
  </Layout>
);

export default PrivacyPolicy;
