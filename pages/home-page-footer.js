import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import PostsContext from '../components/context/posts-context';

const HomeFooter = ({ section }) => {
  const posts = React.useContext(PostsContext) || [];
  const sortedPosts = [];
  let counter = 9;
  if (posts.length < counter) {
    counter = posts.length - (posts.length % 3);
  }
  for (let i = 0; i < counter; i += 3) {
    sortedPosts.push(posts.slice(i, i + 3));
  }
  console.log(sortedPosts);
  return (
    <div className="section fp-auto-height" id={section}>
      <div className="home-footer">
        <div className="home-footer-row">
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
              <Link>
                <a href="#" className="button footer-estimation">
                  Free Estimation
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="horizontal-divider" />
        <div className="home-footer-row">
          {sortedPosts.map((el) => (
            <div className="slide" key={el[0].sys.id}>
              {el.map(((post) => (
                <div className="slide-item" key={post.fields.slug}>
                  {post.fields.title}
                </div>
              )))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

HomeFooter.propTypes = {
  section: PropTypes.string,
};

HomeFooter.defaultProps = {
  section: '',
};
export default HomeFooter;
