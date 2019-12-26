import React from 'react';
import Link from 'next/link';

const TechStack = () => (
  <div className="block block-tech-stack">
    <header className="block--header">
      <div className="block--header-title">
        Our tech stack
      </div>
      <div className="block--header-description">
        These are the tools we use to reach the optimal software solution.
      </div>
    </header>
    <div className="block--content">
      <div className="tech-stack">
        <div className="tech-stack--block">
          <div className="tech-stack--block-title">
            JavaScript
          </div>
          <div className="tech-stack--block-list">
            <Link href="/services-web-development-node">
              <div className="tech-stack--block-item">
                <img src="/static/main-blocks/tech-stack/nodejs.svg" alt="node.js" />
                <img className="toggle-color" src="/static/main-blocks/tech-stack/nodejs-color.svg" alt="node.js" />
              </div>
            </Link>
            <Link href="/tech-front-end-angular">
              <div className="tech-stack--block-item">
                <img src="/static/main-blocks/tech-stack/angular.svg" alt="angular" />
                <img className="toggle-color" src="/static/main-blocks/tech-stack/angular-color.svg" alt="angular" />
              </div>
            </Link>
            <Link href="/tech-front-end-react">
              <div className="tech-stack--block-item">
                <img src="/static/main-blocks/tech-stack/react.svg" alt="react" />
                <img className="toggle-color" src="/static/main-blocks/tech-stack/react-color.svg" alt="react" />
              </div>
            </Link>
            <Link href="/tech-apps-react-native">
              <div className="tech-stack--block-item">
                <img src="/static/main-blocks/tech-stack/react-native.svg" alt="react native" />
                <img className="toggle-color" src="/static/main-blocks/tech-stack/react-native-color.svg" alt="react native" />
              </div>
            </Link>
            <Link href="/tech-front-end-aurelia">
              <div className="tech-stack--block-item">
                <img src="/static/main-blocks/tech-stack/tech.svg" alt="aurelia" />
                <img className="toggle-color" src="/static/main-blocks/tech-stack/aurelia-color.svg" alt="aurelia" />
              </div>
            </Link>
            <Link href="/tech-front-end-vue">
              <div className="tech-stack--block-item">
                <img src="/static/main-blocks/tech-stack/vue.svg" alt="vue" />
                <img className="toggle-color" src="/static/main-blocks/tech-stack/vue-color.svg" alt="vue" />
              </div>
            </Link>
            <Link href="/tech-back-end-express">
              <div className="tech-stack--block-item">
                <img src="/static/main-blocks/tech-stack/express.svg" alt="express" />
                <img className="toggle-color" src="/static/main-blocks/tech-stack/express-color.svg" alt="express" />
              </div>
            </Link>
            <Link href="/tech-apps-electron">
              <div className="tech-stack--block-item">
                <img src="/static/main-blocks/tech-stack/tech2.svg" alt="electron" />
                <img className="toggle-color" src="/static/main-blocks/tech-stack/electron-color.svg" alt="electron" />
              </div>
            </Link>
            <Link href="/tech-apps-cordova">
              <div className="tech-stack--block-item">
                <img src="/static/main-blocks/tech-stack/cordova.svg" alt="cordova" />
                <img className="toggle-color" src="/static/main-blocks/tech-stack/cordova-color.svg" alt="cordova" />
              </div>
            </Link>
            <Link href="/tech-apps-phonegap">
              <div className="tech-stack--block-item">
                <img src="/static/main-blocks/tech-stack/phonegap.svg" alt="phonegap" />
                <img className="toggle-color" src="/static/main-blocks/tech-stack/phonegap-color.svg" alt="phonegap" />
              </div>
            </Link>
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/svelte.svg" alt="svelte" />
              <img className="toggle-color" src="/static/main-blocks/tech-stack/svelte-color.svg" alt="svelte" />
            </div>
            <Link href="/services-web-development-meteor">
              <div className="tech-stack--block-item">
                <img src="/static/main-blocks/tech-stack/meteor.svg" alt="meteor" />
                <img className="toggle-color" src="/static/main-blocks/tech-stack/meteor-color.svg" alt="meteor" />
              </div>
            </Link>
          </div>
        </div>
        <div className="tech-stack--block">
          <div className="tech-stack--block-title">
            Databases
          </div>
          <div className="tech-stack--block-list">
            <Link href="/services-web-development">
              <div className="tech-stack--block-item">
                <img src="/static/main-blocks/tech-stack/mongodb.svg" alt="mongodb" />
                <img className="toggle-color" src="/static/main-blocks/tech-stack/mongodb-color.svg" alt="mongodb" />
              </div>
            </Link>
            <Link href="/services-web-development">
              <div className="tech-stack--block-item">
                <img src="/static/main-blocks/tech-stack/mysql.svg" alt="mysql" />
                <img className="toggle-color" src="/static/main-blocks/tech-stack/mysql-color.svg" alt="mysql" />
              </div>
            </Link>
          </div>
        </div>
        <div className="tech-stack--block">
          <div className="tech-stack--block-title">
            API Integration
          </div>
          <div className="tech-stack--block-list">
            <Link href="/services-web-development">
              <div className="tech-stack--block-item">
                <img src="/static/main-blocks/tech-stack/rest.svg" alt="rest" />
                <img className="toggle-color" src="/static/main-blocks/tech-stack/rest-color.svg" alt="rest" />
              </div>
            </Link>
            <Link href="/services-web-development">
              <div className="tech-stack--block-item">
                <img src="/static/main-blocks/tech-stack/paypal.svg" alt="paypal" />
                <img className="toggle-color" src="/static/main-blocks/tech-stack/paypal-color.svg" alt="paypal" />
              </div>
            </Link>
            <Link href="/services-web-development">
              <div className="tech-stack--block-item">
                <img src="/static/main-blocks/tech-stack/graphql.svg" alt="graphql" />
                <img className="toggle-color" src="/static/main-blocks/tech-stack/graphql-color.svg" alt="graphql" />
              </div>
            </Link>
            <Link href="/services-web-development">
              <div className="tech-stack--block-item">
                <img src="/static/main-blocks/tech-stack/braintree.svg" alt="braintree" />
                <img className="toggle-color" src="/static/main-blocks/tech-stack/braintree-color.svg" alt="braintree" />
              </div>
            </Link>
            <Link href="/services-web-development">
              <div className="tech-stack--block-item">
                <img src="/static/main-blocks/tech-stack/stripe.svg" alt="stripe" />
                <img className="toggle-color" src="/static/main-blocks/tech-stack/stripe-color.svg" alt="stripe" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TechStack;
