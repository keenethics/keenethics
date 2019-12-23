import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import FooterSlider from '../components/blocks/footer/footer-slider';
import SocialButton from '../components/social-buttons/main';

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
    url: '',
  },
  {
    title: 'Business',
    url: '',
  },
  {
    title: 'Healthcare',
    url: '',
  },
  {
    title: 'Retail',
    url: '',
  },
  {
    title: 'Agriculture',
    url: '',
  },
  {
    title: 'Hospitality and Entertainment',
    url: '',
  },
  {
    title: 'Real Estate',
    url: '',
  },
  {
    title: 'Finance and Banking',
    url: '',
  },
];
const technologies = [
  {
    title: 'AMP Development ',
    url: '',
  },
  {
    title: 'Team Enhancement ',
    url: '',
  },
  {
    title: 'Support & Tech Consultancy',
    url: '',
  },
  {
    title: 'Chatbots & Programmable Voice',
    url: '',
  },
  {
    title: 'Internet of Things',
    url: '',
  },
];
const careers = [
  {
    title: 'Vacancies',
    url: '',
  },
  {
    title: 'Events',
    url: '',
  },
];
const HomeFooter = ({
  section,
  isMobile,
  isTablet,
}) => (
  <div className="block block-footer" id={section}>
    <div className="home-footer block--footer-content">
      <div className="home-footer-row footer-site-nav">
        <ul className="home-footer-list">
          <li className="home-footer-list-item">
            <h5>Services</h5>
          </li>
          {services.map((el) => (
            <li className="home-footer-list-item">
              <Link href={el.url}><a className="home-footer-list-item__link">{el.title}</a></Link>
            </li>
          ))}
        </ul>
        <ul className="home-footer-list">
          <li className="home-footer-list-item">
            <h5>Industries</h5>
          </li>
          {industries.map((el) => (
            <li className="home-footer-list-item">
              <Link href={el.url}><a className="home-footer-list-item__link">{el.title}</a></Link>
            </li>
          ))}
        </ul>
        <ul className="home-footer-list">
          <li className="home-footer-list-item">
            <h5>Technologies</h5>
          </li>
          {technologies.map((el) => (
            <li className="home-footer-list-item">
              <Link href={el.url}><a className="home-footer-list-item__link">{el.title}</a></Link>
            </li>
          ))}
        </ul>
        <ul className="home-footer-list">
          <li className="home-footer-list-item">
            <h5>Careers</h5>
          </li>
          {careers.map((el) => (
            <li className="home-footer-list-item">
              <Link href={el.url}><a className="home-footer-list-item__link">{el.title}</a></Link>
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
                  <span className="country" itemProp="addressRegion">
                    Ukraine
                  </span>
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
                  <span className="country" itemProp="addressRegion">
                    Netherlands
                  </span>
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
                  <span className="country" itemProp="addressRegion">
                    USA
                  </span>
                  <p className="address">New York, 1412 Broadway, 21st floor, 2200</p>
                </div>
              </div>
            </li>
          </ul>
          <ul className="home-footer-list align-right">
            <li className="home-footer-list-item">
              <Link href="contacts?activeForm=estimate">
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
              <Link href="#"><a className="home-footer-list-item__link">Home</a></Link>
            </li>
            <li className="home-footer-list-item">
              <Link href="#"><a className="home-footer-list-item__link">Services</a></Link>
            </li>
            <li className="home-footer-list-item">
              <Link href="#"><a className="home-footer-list-item__link">Industries</a></Link>
            </li>
            <li className="home-footer-list-item">
              <Link href="#"><a className="home-footer-list-item__link">Technologies</a></Link>
            </li>
            <li className="home-footer-list-item">
              <Link href="#"><a className="home-footer-list-item__link">Contact us</a></Link>
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
              <Link href="#"><a className="home-footer-list-item__link">About us</a></Link>
            </li>
            <li className="home-footer-list-item">
              <Link href="#"><a className="home-footer-list-item__link">Portfolio</a></Link>
            </li>
            <li className="home-footer-list-item">
              <Link href="#"><a className="home-footer-list-item__link">Careers</a></Link>
            </li>
            <li className="home-footer-list-item">
              <Link href="#"><a className="home-footer-list-item__link">Blog</a></Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="horizontal-divider" />
      <div className="home-footer-row footer-blog">
        <div className="footer-slider-title">
          Latest in Blog
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
          <Link href="#">
            <a className="footer-links-link">
              Privacy Statement
            </a>
          </Link>
          <Link href="#">
            <a className="footer-links-link">
              Terms of Use
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
HomeFooter.propTypes = {
  section: PropTypes.string,
  isMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
};

HomeFooter.defaultProps = {
  section: '',
};
export default HomeFooter;
