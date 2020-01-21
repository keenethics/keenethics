import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import FooterSlider from '../blocks/footer/footer-slider';
import SocialButton from '../social-buttons/main';

const services = [
  {
    title: 'Web Development',
    url: 'services-web-development',
  },
  {
    title: 'Mobile Development',
    url: 'services-mobile-development',
  },
  {
    title: 'Minimum Viable Product',
    url: 'approach-minimum-viable-product',
  },
  {
    title: 'Progressive Web Apps',
    url: 'tech-apps-progressive-web-apps',
  },
  {
    title: 'Dedicated Development Team',
    url: 'services-dedicated-development-team',
  },
  {
    title: 'Cloud App Development',
    url: 'services-cloud-application-development',
  },
  {
    title: 'Chatbots & Artificial Intelligence',
    url: 'services-chatbots-artificial-intelligence',
  },
  {
    title: 'Internet of Things',
    url: 'services-internet-of-things',
  },
];
const industries = [
  {
    title: 'Education',
    url: 'services-education-software-development',
  },
  {
    title: 'Business',
    url: 'services-business-administration-development',
  },
  {
    title: 'Healthcare',
    url: 'services-custom-healthcare-software-development',
  },
];
const technologies = [
  {
    title: 'Node js',
    url: 'services-web-development-node',
  },
  {
    title: 'Angular',
    url: 'tech-front-end-angular',
  },
  {
    title: 'React',
    url: 'tech-front-end-react',
  },
  {
    title: 'React Native',
    url: 'tech-apps-react-native',
  },
  {
    title: 'Aurelia',
    url: 'tech-front-end-aurelia',
  },
  {
    title: 'Vue js',
    url: 'tech-front-end-vue',
  },
  {
    title: 'Express',
    url: 'tech-back-end-express',
  },
  {
    title: 'Electron',
    url: 'tech-apps-electron',
  },
  {
    title: 'Cordova',
    url: 'tech-apps-cordova',
  },
  {
    title: 'PhoneGap',
    url: 'tech-apps-phonegap',
  },
  {
    title: 'Meteor',
    url: 'services-web-development-meteor',
  },
];
const careers = [
  {
    title: 'About Us',
    url: '/about-us',
  },
  {
    title: 'Projects',
    url: '/portfolio',
  },
  {
    title: 'Blog',
    url: '/blog',
  },
  {
    title: 'Careers',
    url: '/careers',
  },
  {
    title: 'Contact Us',
    url: 'contacts',
  },
];

const fullCycleMethod = [
  {
    title: '01   Business Analysis',
    url: 'services-business-analysis',
  },
  {
    title: '02   UI/UX Design',
    url: 'services-ui-ux-design',
  },
  {
    title: '03   Development and Testing',
    url: 'services-development-and-quality-assurance',
  },
  {
    title: '04   Software Deployment',
    url: 'services-software-deployment',
  },
  {
    title: '05   Maintenance and Support',
    url: 'services-maintenance-support',
  },
];
const HomeFooter = ({
  isMobile,
  isTablet,
}) => (
  <div id="footer" className="block block-footer">
    <div className="home-footer block--footer-content">
      <div className="home-footer-row footer-site-nav">
        <ul className="home-footer-list">
          <li className="home-footer-list-item">
            <a href="/#services" className="home-footer-list__title home-footer-list-item__link"><h5>Services</h5></a>
          </li>
          {services.map((el) => (
            <li className="home-footer-list-item" key={el.title}>
              <Link href={el.url}><a className="home-footer-list-item__link">{el.title}</a></Link>
            </li>
          ))}
        </ul>
        <ul className="home-footer-list">
          <li className="home-footer-list-item">
            <a href="/#industries" className="home-footer-list__title home-footer-list-item__link"><h5>Industries</h5></a>
          </li>
          {industries.map((el) => (
            <li className="home-footer-list-item" key={el.title}>
              <Link href={el.url}><a className="home-footer-list-item__link">{el.title}</a></Link>
            </li>
          ))}
          <li className="home-footer-list-item home-footer-list__title">
            <a href="/#methods" className="home-footer-list__title home-footer-list-item__link"><h5>Full-cycle Method</h5></a>
          </li>
          {fullCycleMethod.map((el) => (
            <li className="home-footer-list-item" key={el.title}>
              <Link href={el.url}><a className="home-footer-list-item__link">{el.title}</a></Link>
            </li>
          ))}
        </ul>
        <ul className="home-footer-list">
          <li className="home-footer-list-item">
            <a href="/#tech-stack" className="home-footer-list__title home-footer-list-item__link"><h5>Technologies</h5></a>
          </li>
          {technologies.map((el) => (
            <li className="home-footer-list-item" key={el.title}>
              <Link href={el.url}><a className="home-footer-list-item__link">{el.title}</a></Link>
            </li>
          ))}
        </ul>
        <ul className="home-footer-list title-links">
          {careers.map((el) => (
            <li className="home-footer-list-item" key={el.title}>
              <Link href={el.url}><a className="home-footer-list__title home-footer-list-item__link">{el.title}</a></Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="home-footer-row home-footer-countries">
        <div className="footer-responsive">
          <ul className="home-footer-list">
            <li className="home-footer-list-item">
              <div className="flag-country-wrapper">
                <span className="flag-country-wrapper-flag">
                  <img
                    src="/static/images/flag_ukraine.png"
                    alt="Flag"
                    className="ico flag"
                  />
                </span>
                <div className="country-text">
                  <a className="country-link" href="https://www.google.com/maps/place/KeenEthics/@49.8269687,23.9880895,17z/data=!3m1!4b1!4m5!3m4!1s0x473ae7fa87f09d6f:0x9ac85f44cbcb9257!8m2!3d49.8269687!4d23.9902782">
                    <span className="country" itemProp="addressRegion">
                      Ukraine
                    </span>
                  </a>
                  <p className="address">Lviv, Kulparkivska St. 59</p>
                </div>
              </div>
            </li>
          </ul>
          <ul className="home-footer-list">
            <li className="home-footer-list-item">
              <div className="flag-country-wrapper">
                <span className="flag-country-wrapper-flag">
                  <img
                    src="/static/images/flag_netherlands.png"
                    alt="Flag Netherlands"
                    className="ico flag"
                  />
                </span>
                <div className="country-text">
                  <a className="country-link" href="https://www.google.com/maps/place/KeenEthics/@51.7713527,5.5118959,17z/data=!3m1!4b1!4m5!3m4!1s0x47c6fdf815ac947b:0xf0d1841b4903762b!8m2!3d51.7713569!4d5.5141752">
                    <span className="country" itemProp="addressRegion">
                      Netherlands
                    </span>
                  </a>
                  <p className="address">Oss, Oude litherweg 2, 5346 RT</p>
                </div>
              </div>
            </li>
          </ul>
          <ul className="home-footer-list">
            <li className="home-footer-list-item">
              <div className="flag-country-wrapper">
                <span className="flag-country-wrapper-flag">
                  <img
                    src="/static/images/united-states.svg"
                    alt="Flag USA"
                    className="ico flag usa-flag"
                  />
                </span>
                <div className="country-text">
                  <a className="country-link" href="https://www.google.com/maps/place/Workville/@40.7536262,-73.9887379,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259ab050f01bb:0xc4f59321f603c1a3!8m2!3d40.7536222!4d-73.9865492">
                    <span className="country" itemProp="addressRegion">
                      USA
                    </span>
                  </a>
                  <p className="address">New York, 1412 Broadway, 21st floor, 2200</p>
                </div>
              </div>
            </li>
          </ul>
          <ul className="home-footer-list align-right">
            <li className="home-footer-list-item">
              <Link href="contacts?activeform=estimate">
                <a className="button footer-estimation">
                  Free Estimation
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="home-footer-nav">
          <ul className="home-footer-list-tablet">
            <li className="home-footer-list-item">
              <Link href="/"><a className="home-footer-list-item__link">Home</a></Link>
            </li>
            <li className="home-footer-list-item">
              <a href="/#services" className="home-footer-list-item__link">Services</a>
            </li>
            <li className="home-footer-list-item">
              <a href="/#industries" className="home-footer-list-item__link">Industries</a>
            </li>
            <li className="home-footer-list-item">
              <a href="/#tech-stack" className="home-footer-list-item__link">Technologies</a>
            </li>
            <li className="home-footer-list-item">
              <Link href="contacts"><a className="home-footer-list-item__link">Contact us</a></Link>
            </li>
            <li className="home-footer-list-item">
              <Link href="contacts">
                <a className="button footer-estimation">
                  Free Estimation
                </a>
              </Link>
            </li>
          </ul>
          <ul className="home-footer-list-tablet">
            <li className="home-footer-list-item">
              <Link href="about-us"><a className="home-footer-list-item__link">About us</a></Link>
            </li>
            <li className="home-footer-list-item">
              <a href="/#projects" className="home-footer-list-item__link">Portfolio</a>
            </li>
            <li className="home-footer-list-item">
              <Link href="careers"><a className="home-footer-list-item__link">Careers</a></Link>
            </li>
            <li className="home-footer-list-item">
              <Link href="blog"><a className="home-footer-list-item__link">Blog</a></Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="horizontal-divider" />
      <div className="home-footer-row footer-blog">
        <div className="footer-slider-title">
          <Link href="blog"><a className="home-footer-link">Latest in Blog</a></Link>
          <span className="bell-icon" />
        </div>
        <FooterSlider
          isMobile={isMobile}
          isTablet={isTablet}
        />
      </div>
      <div className="home-footer-row footer-links">
        <div className="social-icons footer-links-terms">
          <SocialButton />
        </div>
        <div className="footer-links-terms">
          <Link href="/privacy-policy">
            <a className="footer-links-link">
              Privacy Statement
            </a>
          </Link>
          <Link href="/cookie-policy">
            <a className="footer-links-link">
              Cookie Policy
            </a>
          </Link>
        </div>
      </div>
    </div>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "KeenEthics",
            "url": "https://keenethics.com",
            "logo": "https://keenethics.com/static/images/svg/logo.svg",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+38 (096) 814 72 66",
              "contactType": "sales",
              "areaServed": "UA",
              "availableLanguage": "Ukrainian"
            },{
              "@type": "ContactPoint",
              "telephone": "+31 20 262 0944",
              "contactType": "sales",
              "areaServed": "NL",
              "availableLanguage": "Dutch"
            },{
              "@type": "ContactPoint",
              "telephone": "+1 (929) 214 1392",
              "contactType": "sales",
              "areaServed": "US",
              "availableLanguage": "en"
            }],
            "sameAs": [
              "https://www.facebook.com/keenethics.development",
              "https://twitter.com/keen_ethics",
              "https://www.instagram.com/keen_ethics",
              "https://www.youtube.com/channel/UCRO9xu-d9sYAjNu0mOABQSQ",
              "https://www.linkedin.com/company/keen-ethics",
              "https://github.com/keenethics"
            ]
          }
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "KeenEthics",
            "image": "https://keenethics.com/static/images/svg/logo.svg",
            "url": "https://keenethics.com",
            "telephone": "+38 (096) 814 72 66",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kulparkivska St, 59",
              "addressLocality": "Lviv",
              "postalCode": "79000",
              "addressCountry": "UA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 49.82696869999999,
              "longitude": 23.990278200000034
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "20:00"
            },
          }
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "KeenEthics",
            "image": "https://keenethics.com/static/images/svg/logo.svg",
            "url": "https://keenethics.com",
            "telephone": "+31 20 262 0944",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Oude litherweg 2,",
              "addressLocality": "Oss",
              "postalCode": "5346 RT",
              "addressCountry": "NL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.771189,
              "longitude": 5.514320999999995
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            },
          }
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "KeenEthics",
            "image": "https://keenethics.com/static/images/svg/logo.svg",
            "url": "https://keenethics.com",
            "telephone": "+1 (929) 214 1392",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1412 Broadway, 21st floor",
              "addressLocality": "New York",
              "addressRegion": "NY",
              "postalCode": "2200",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.7536222,
              "longitude": -73.98654920000001
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            },
          }
        `,
      }}
    />
  </div>
);
HomeFooter.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
};

export default HomeFooter;
