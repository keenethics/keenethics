import React from 'react';

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
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/nodejs.svg" alt="node.js" />
            </div>
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/angular.svg" alt="angular" />
            </div>
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/react-native.svg" alt="react native" />
            </div>
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/tech.svg" alt="tech" />
            </div>
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/vue.svg" alt="vue" />
            </div>
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/express.svg" alt="express" />
            </div>
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/tech2.svg" alt="tech2" />
            </div>
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/cordova.svg" alt="cordova" />
            </div>
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/phonegap.svg" alt="phonegap" />
            </div>
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/svelte.svg" alt="svelte" />
            </div>
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/meteor.svg" alt="meteor" />
            </div>
          </div>
        </div>
        <div className="tech-stack--block">
          <div className="tech-stack--block-title">
            Databases
          </div>
          <div className="tech-stack--block-list">
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/mongodb.svg" alt="mongodb" />
            </div>
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/mysql.svg" alt="mysql" />
            </div>
          </div>
        </div>
        <div className="tech-stack--block">
          <div className="tech-stack--block-title">
            API Integration
          </div>
          <div className="tech-stack--block-list">
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/rest.svg" alt="rest" />
            </div>
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/paypal.svg" alt="paypal" />
            </div>
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/graphql.svg" alt="graphql" />
            </div>
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/braintree.svg" alt="braintree" />
            </div>
            <div className="tech-stack--block-item">
              <img src="/static/main-blocks/tech-stack/stripe.svg" alt="stripe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TechStack;
