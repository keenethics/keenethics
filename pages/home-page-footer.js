import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import FooterSlider from '../components/blocks/footer/footer-slider';
import SocialButton from '../components/social-buttons/main';

const HomeFooter = ({
  section,
  // isDesktop,
}) => (
  <div className="section fp-auto-height" id={section}>
    <div className="home-footer">
      <div className="home-footer-row footer-site-nav">
        <ul className="home-footer-list">
          <li className="home-footer-list-item">
            <h5>Title</h5>
          </li>
          <li className="home-footer-list-item">
            <a href="#" className="home-footer-list-item__link">Web</a>
          </li>
          <li className="home-footer-list-item">
            <a href="#" className="home-footer-list-item__link">Mobile</a>
          </li>
          <li className="home-footer-list-item">
            <a href="#" className="home-footer-list-item__link">Minimum</a>
          </li>
        </ul>
        <ul className="home-footer-list">
          <li className="home-footer-list-item">
            <h5>Title</h5>
          </li>
          <li className="home-footer-list-item">
            <a href="#" className="home-footer-list-item__link">Web</a>
          </li>
          <li className="home-footer-list-item">
            <a href="#" className="home-footer-list-item__link">Mobile</a>
          </li>
          <li className="home-footer-list-item">
            <a href="#" className="home-footer-list-item__link">Minimum</a>
          </li>
        </ul>
        <ul className="home-footer-list">
          <li className="home-footer-list-item">
            <h5>Title</h5>
          </li>
          <li className="home-footer-list-item">
            <a href="#" className="home-footer-list-item__link">Web</a>
          </li>
          <li className="home-footer-list-item">
            <a href="#" className="home-footer-list-item__link">Mobile</a>
          </li>
          <li className="home-footer-list-item">
            <a href="#" className="home-footer-list-item__link">Minimum</a>
          </li>
        </ul>
        <ul className="home-footer-list">
          <li className="home-footer-list-item">
            <h5>Title</h5>
          </li>
          <li className="home-footer-list-item">
            <a href="#" className="home-footer-list-item__link">Web</a>
          </li>
          <li className="home-footer-list-item">
            <a href="#" className="home-footer-list-item__link">Mobile</a>
          </li>
          <li className="home-footer-list-item">
            <a href="#" className="home-footer-list-item__link">Minimum</a>
          </li>
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
              <Link href="#">
                <a href="#" className="button footer-estimation">
                  Free Estimation
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="home-footer-nav">
          <ul className="home-footer-list-tablet">
            <li className="home-footer-list-item">
              <a href="#" className="home-footer-list-item__link">Web</a>
            </li>
            <li className="home-footer-list-item">
              <a href="#" className="home-footer-list-item__link">Mobile</a>
            </li>
            <li className="home-footer-list-item">
              <a href="#" className="home-footer-list-item__link">Minimum</a>
            </li>
            <li className="home-footer-list-item">
              <Link href="#">
                <a href="#" className="button footer-estimation">
                  Free Estimation
                </a>
              </Link>
            </li>
          </ul>
          <ul className="home-footer-list-tablet">
            <li className="home-footer-list-item">
              <a href="#" className="home-footer-list-item__link">Web</a>
            </li>
            <li className="home-footer-list-item">
              <a href="#" className="home-footer-list-item__link">Mobile</a>
            </li>
            <li className="home-footer-list-item">
              <a href="#" className="home-footer-list-item__link">Minimum</a>
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
        <FooterSlider />
      </div>
      <div className="home-footer-row footer-links">
        <div className="social-icons footer-links-terms">
          <SocialButton />
        </div>
        <div className="footer-links-terms">
          <Link href="#">
            <a href="#" className="footer-links-link">
              Privacy Statement
            </a>
          </Link>
          <Link href="#">
            <a href="#" className="footer-links-link">
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
  // isDesktop: PropTypes.bool.isRequired,
};

HomeFooter.defaultProps = {
  section: '',
};
export default HomeFooter;
