import React from 'react';
import Link from 'next/link';

const FooterCountriesList = () => (
  <div className="footer-responsive">
    <ul className="home-footer-list">
      <li className="home-footer-list-item">
        <div className="flag-country-wrapper">
          <span className="flag-country-wrapper-flag">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.google.com/maps/place/KeenEthics/@49.8269687,23.9880895,17z/data=!3m1!4b1!4m5!3m4!1s0x473ae7fa87f09d6f:0x9ac85f44cbcb9257!8m2!3d49.8269687!4d23.9902782"
            >
              <img
                src="/static/images/flag_ukraine.png"
                alt="Flag"
                className="ico flag"
              />
            </a>
          </span>
          <div className="country-text">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="country-link"
              href="https://www.google.com/maps/place/KeenEthics/@49.8269687,23.9880895,17z/data=!3m1!4b1!4m5!3m4!1s0x473ae7fa87f09d6f:0x9ac85f44cbcb9257!8m2!3d49.8269687!4d23.9902782"
            >
              <span className="country" itemProp="addressRegion">
                Ukraine
              </span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="address"
              href="https://www.google.com/maps/place/KeenEthics/@49.8269687,23.9880895,17z/data=!3m1!4b1!4m5!3m4!1s0x473ae7fa87f09d6f:0x9ac85f44cbcb9257!8m2!3d49.8269687!4d23.9902782"
            >
              Lviv, Kulparkivska St. 59
            </a>
          </div>
        </div>
      </li>
    </ul>
    <ul className="home-footer-list">
      <li className="home-footer-list-item">
        <div className="flag-country-wrapper">
          <span className="flag-country-wrapper-flag">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/KeenEthics/@51.7713527,5.5118959,17z/data=!3m1!4b1!4m5!3m4!1s0x47c6fdf815ac947b:0xf0d1841b4903762b!8m2!3d51.7713569!4d5.5141752"
            >
              <img
                src="/static/images/flag_netherlands.png"
                alt="Flag Netherlands"
                className="ico flag"
              />
            </a>
          </span>
          <div className="country-text">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="country-link"
              href="https://www.google.com/maps/place/KeenEthics/@51.7713527,5.5118959,17z/data=!3m1!4b1!4m5!3m4!1s0x47c6fdf815ac947b:0xf0d1841b4903762b!8m2!3d51.7713569!4d5.5141752"
            >
              <span className="country" itemProp="addressRegion">
                Netherlands
              </span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="address"
              href="https://www.google.com/maps/place/KeenEthics/@51.7713527,5.5118959,17z/data=!3m1!4b1!4m5!3m4!1s0x47c6fdf815ac947b:0xf0d1841b4903762b!8m2!3d51.7713569!4d5.5141752"
            >
              Oss, Oude litherweg 2, 5346 RT
            </a>
          </div>
        </div>
      </li>
    </ul>
    <ul className="home-footer-list">
      <li className="home-footer-list-item">
        <div className="flag-country-wrapper">
          <span className="flag-country-wrapper-flag">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Workville/@40.7536262,-73.9887379,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259ab050f01bb:0xc4f59321f603c1a3!8m2!3d40.7536222!4d-73.9865492"
            >
              <img
                src="/static/images/united-states.svg"
                alt="Flag USA"
                className="ico flag usa-flag"
              />
            </a>
          </span>
          <div className="country-text">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="country-link"
              href="https://www.google.com/maps/place/Workville/@40.7536262,-73.9887379,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259ab050f01bb:0xc4f59321f603c1a3!8m2!3d40.7536222!4d-73.9865492"
            >
              <span className="country" itemProp="addressRegion">
                USA
              </span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="address"
              href="https://www.google.com/maps/place/Workville/@40.7536262,-73.9887379,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259ab050f01bb:0xc4f59321f603c1a3!8m2!3d40.7536222!4d-73.9865492"
            >
              New York, 1412 Broadway, 21st floor, 2200
            </a>
          </div>
        </div>
      </li>
    </ul>
    <ul className="home-footer-list align-right">
      <li className="home-footer-list-item">
        <Link href="/contacts?activeform=estimate" prefetch={false}>
          <a className="button footer-estimation">
            Free Estimate
          </a>
        </Link>
      </li>
    </ul>
  </div>
);

export default FooterCountriesList;
