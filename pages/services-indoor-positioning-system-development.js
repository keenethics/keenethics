import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';

import { works } from '../main.config'

import Works from '../components/portfolio/works'
import CallToActionButton from  '../components/content/CallToActionButton'
import FeaturesList from '../components/content/FeaturesList'

const ServicesIndoorPositioningDevelopment = () => {

  const essentialFeaturesList = [
    {
      title: "INDOOR MAPPING",
      description: `
        We create a virtual map of your 
        building and embed this map into 
        a mobile solution. Now, the 
        system is customized for your 
        specific needs — you have the 
        entire venue at your fingertips.
      `
    },
    {
      title: "INDOOR POSITIONING",
      description: `
        The BLE beacons we install help 
        us locate your customers and 
        employees. This way, you can help 
        people navigate around the venue 
        and collect their behavior 
        statistics.
      `
    },
    {
      title: "DATA ANALYTICS",
      description: `
        User behavior data is analyzed 
        with the help of artificial 
        intelligence. Now, you collect and 
        analyze almost any statistics you 
        need and adjust your business 
        strategy accordingly
      `
    }
  ]
  
  const whomWeOfferList = [
    {
      icon: '/static/services/indoor-positioning-development/asama-icon-5 1.svg',
      title: 'Stores & Shopping malls'
    },
    {
      icon: '/static/services/indoor-positioning-development/icon-8 1.svg',
      title: 'Exhibition & Business centers'
    },
    {
      icon: '/static/services/indoor-positioning-development/asama-icon-2 1.svg',
      title: 'Warehouses & Construction sites'
    },
    {
      icon: '/static/services/indoor-positioning-development/Group_97 1.svg',
      title: 'Airports, Subway & Railway stations'
    },
    {
      icon: '/static/services/indoor-positioning-development/Group 1.svg',
      title: 'Hotels & motels'
    },
    {
      icon: '/static/services/indoor-positioning-development/asama-icon-3 1.svg',
      title: 'Plants & Factories'
    },
  ]

  const benefitsList = [
    {
      icon: '/static/services/indoor-positioning-development/icons8-contacts-500.png',
      title: 'COLLECT BEHAVIOR STATISTICS',
      description: `
        When a client spends a lot of time in 
        front of a certain item in your store 
        but leaves with nothing, you can 
        send them a promo code for this 
        very item to convince them to make 
        a purchase.
      `
    },
    {
      icon: '/static/services/indoor-positioning-development/icons8-hand-cursor-500.png',
      title: 'HELP PEOPLE NAVIGATE',
      description: `
        If a person gets lost in a mall, they 
        can see their precise location and 
        find their way around the building. 
        You can show them a route which 
        will take them directly to your store.
      `
    },
    {
      icon: '/static/services/indoor-positioning-development/icons8-search-500.png',
      title: 'AUTOMATE CUSTOMER SERVICE',
      description: `
        You can send personalized 
        information on discounts and special 
        offers directly to your potential visitor 
        once they step into the vicinity of 
        your store.
      `
    },
    {
      icon: '/static/services/indoor-positioning-development/icons8-about-500.png',
      title: 'ANALYZE BUSINESS STATISTICS',
      description: `
        At the end of the day, you can see how
        much time your employees have spent 
        working and how much time they were 
        wandering around.
      `
    },
    {
      icon: '/static/services/indoor-positioning-development/icons8-trash-can-500.png',
      title: 'REDUCE WASTE',
      description: `
        There is no need for brochures and 
        handouts — all the relevant information can 
        be sent to a passer-by’s phone directly. This 
        is how you reduce paper waste.
      `
    },
  ]

  return (
    <Layout>
      <ContentNavigation />
      <div className="content-block">
        <section>
          <h1 className="text-center">Indoor Positioning System</h1>
          <p className="text-center text-italic">This solution will bring your customer service and employee management to a new level.</p>
          <CallToActionButton title="BOOK A CALL"/>
        </section>

        <section>
          <h1 className="text-center"><b>$ 40.99 billion</b></h1>
          <p className="text-center">is the projected indoor location market size in 2022, according to&nbsp;
            <Link href="https://www.marketsandmarkets.com/Market-Reports/indoor-location-market-989.html">
              <a>Markets and Markets</a>
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>What is indoor positioning?</h2>
          <div className="page__list">
            <p className="page__item-wiip page__item">
              <b>From the technical perspective...</b><br/>
              Indoor positioning is a 
              technology, which uses a network of devices to locate people or objects in such 
              places where GPS and other satellite technologies 
              cannot do it properly. For instance, GPS technologies 
              are not precise enough to locate people inside large 
              buildings, such as airports, malls, or warehouses. And this is where indoor positioning comes into play. This 
              technology offers a few ways for locating people and 
              objects with one-meter accuracy. One of such ways is 
              based on iBeacon — the technology developed by 
              Apple, which employs BLE transmitters.
            </p>
            <p className="page__item-wiip page__item">
              <b>From the business perspective...</b><br/>
              Indoor positioning system is an IoT solution, which lets 
              businesses efficiently locate their employees or 
              customers and use this information for business 
              development purposes. For example,&nbsp;
              <Link href="/blog/1554793200000-indoor-positioning-in-retail">
                <a>indoor positioning in retail</a>
              </Link>
              &nbsp;can help businesses advertise their 
              products to the customers passing by their store. At 
              the same time, indoor positioning in airports can help 
              passengers find their way around the building and 
              receive timely flight information. Meanwhile, indoor 
              positioning in warehouses can help employers control 
              their employees. The opportunities are indeed endless when 
              you start thinking about it.
            </p>
          </div>
        </section>

        <section>
          <h2>Whom we offer our indoor positioning solution to?</h2>
          <ul className="whom-we-offer-indoor-development__list">
            {
              whomWeOfferList.map(({ icon, title }) => (
                <li className="whom-we-offer-indoor-development__item" key={icon}>
                  <figure>
                    <img src={icon} alt={title} />
                    <figcaption className="whom-we-offer-indoor-development-figcaption">
                      {title}
                    </figcaption>
                  </figure>
                </li>
              ))
            }
          </ul>
        </section>

        <section>
          <h2>What do we offer?</h2>

          <p className="text-center">We offer the advanced IPS indoor positioning system, which will be configured and customized specifically for you.</p>

          <h2>THE THREE ESSENTIAL FEATURES</h2>

          <div className="page__list">
              {
                essentialFeaturesList.map(({title, description}) => (
                  <div className="services-ips-wdwo__item page__item">
                    <p className="text-center"><b>{title}</b></p>
                    <p className="text-center">
                      {description}
                    </p>
                  </div>
                ))
              }
          </div>

          <h2>BENEFITS AND USE CASES</h2>
          <div className="services-ips-bauc__list">
            {
              benefitsList.map(({icon, title, description}) => (
                <div className="services-ips-bauc__item">
                  <figure>
                    <img src={icon} alt={title}/>
                    <figcaption className="services-ips-bauc-figcaption">
                      {
                        <p className="text-center"><b>{title}</b></p>
                      }
                    </figcaption>
                  </figure>
                  <b>Use case:</b>
                  <p>{description}</p>
                </div>
              ))
            }
          </div>

        </section>

        <section>
          <h2>Why choose KeenEthics?</h2>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>1</span> Empowering growth</h3>
          <p>In our portfolio, we have many projects and a lot of experience to share so that we can help you implement effective indoor positioning technology and let your business grow.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>2</span> Building value</h3>
          <p>Our unique ethical strategy says that the tech world should work in favor of social good, so we strive for transparent and honest relationships with our employees, clients, and partners.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>3</span> Launching in a matter of weeks</h3>
          <p>Our expert Partner Engagement manager will work hand-in-hand with you to launch project development in the shortest possible terms.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>4</span> Bringing tech expertise</h3>
          <p>Aside from indoor positioning expertise, we specialize in web and mobile development and will provide you with a custom web or mobile solution, which will make your indoor positioning system complete.</p>

          <h3 className="red-italic-title"><span style={{ fontSize: '28px', marginRight: '.5em' }}>5</span> Protecting your data</h3>
          <p>Using different testing approaches, pair programming, and external code review, our developers and QA specialists make sure that the app is error-free and resistant to malicious attacks.</p>
        </section>

        <section>
          <h2>What is our experience with indoor positioning companies?</h2>

          <div>
            <h3 className="text-center">PREE</h3>
            <p>
              PREE is an IoT system for indoor positioning, which is implemented with BLE beacons and a mobile app. The goal of 
              PREE is to let users always know where their precious belongings are. The idea is simple. The user attaches a beacon 
              to their bag, laptop, car keys, or whatever they need. They add this device to their account in mobile app. Now, they 
              can always see in real time where their thing with a beacon attached to it is. There are a lot of opportunities for 
              customization: users can get notified when their items get out of range, share locations with a circle of trusted 
              people, or set a safe zone where notifications will not disturb them.
            </p>

            <div>
              <div style={{ marginBottom: '5px' }}><b>Platform</b>: <Link href="/services-mobile-development-android"><a>Android</a></Link> and <Link href="/services-mobile-development-apple"><a>iOS</a></Link></div>
              <div style={{ marginBottom: '5px' }}><b>Technologies</b>:<Link href="/services-web-development-node"><a>Node.js</a></Link>, <Link href="/tech-back-end-express"><a>Express</a></Link>, <Link href="/tech-data-base-mongo"><a>MongoDB</a></Link>, Ionic, <Link href="/tech-apps-cordova"><a>Cordova</a></Link></div>
              <div style={{ marginBottom: '5px' }}><b>Methodology</b>: Kanban</div>
              <div style={{ marginBottom: '25px' }}><b>Team</b>: 1 UI/UX designer, 2 full-stack developers, 1 QA specialist, and 1 PM</div>
            </div>
            <Works works={works.filter(({ title }) => ['Pree'].includes(title))} />
          </div>

          <div>
            <h3 className="text-center">Airport Showroom</h3>
            <p>
              The mobile app offers a showroom map to users where they can see all the necessary objects and facilities and the 
              optimal route towards them. The app can be downloaded via a QR code. Besides, the app allows admins to change 
              the map, routes, information, and so on allowing them to set up the system without developers help.
            </p>
            <p>
              Additionally, the admins can tag Bluetooth sensors with certain content making it appear to the users when they are 
              nearby. The user, for example, can get a message about special offers, promotions, and exclusive products when 
              going near Duty Free stores. They can also receive notifications from airlines about delays, issues, or promos. All 
              in all, it is a good place for both timely communications and ads.
            </p>
            <div>
              <div style={{ marginBottom: '5px' }}><b>Platform</b>: <Link href="/services-mobile-development"><a>Mobile application</a></Link></div>
              <div style={{ marginBottom: '5px' }}><b>Technologies</b>:<Link href="/services-web-development-node"><a>Node.js</a></Link>, <Link href="/tech-back-end-express"><a>Express</a></Link>, <Link href="/tech-front-end-react"><a>React</a></Link>, <Link href="/tech-apps-progressive-web-apps"><a>PWA</a></Link></div>
              <div style={{ marginBottom: '5px' }}><b>Methodology</b>: Kanban</div>
              <div style={{ marginBottom: '25px' }}><b>Team of 7</b>: 1 Product Owner, 1 UI UX designer, 1 back-end developer, 1 full-stack developer, 1 mobile developer, 1 hardware engineer, 1 QA special</div>
            </div>
            <img src='/static/portfolio/airportscreen.png' alt="Airport Showroom" className="airport-showrooms-image"/>
          </div>

        </section>

        <section>
          <h1 className="text-center">Now, let’s discuss your business idea!</h1>
          <CallToActionButton title="Contact Us" href="/contacts" />
        </section>

      </div>
    </Layout>
  )
}

export default ServicesIndoorPositioningDevelopment;
