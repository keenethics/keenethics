import Link from 'next/link';

import React from 'react';

import SocialButton from '../../social-buttons/main';

const Main = () => (
  <div id="main" className="block block-main">
    <div className="home-page">
      <div className="home-page-content">
        <div className="home-page-content-titles">
          <div className="social-icons home-page-social">
            <SocialButton />
          </div>
          <h4 className="home-page-small-title">
            CODE FOR BUSINESS&nbsp;
            <span className="color-red">•</span>
            &nbsp;CARE FOR THE WORLD
          </h4>
          <div className="vertical-line" />
          <h1 className="home-page-large-title">
            Ethical
            <br />
            web and mobile
            <br />
            development partner
          </h1>
        </div>
        <div className="home-page-rates-container">
          <div className="home-page-content-link">
            <a
              href="https://www.upwork.com/agencies/~0106b5437592391f94"
              className="link link-upwork"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              Top rated Upwork agency
            </a>
          </div>
          <div className="home-page-content-link">
            <a
              href="https://clutch.co/profile/keenethics"
              className="link link-clutch"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              5-star rated company on Clutch
            </a>
          </div>
        </div>
      </div>
      <div className="home-page-side-info">
        <div className="side-info-bg">
          <div className="home-page-side-info__image" />
          <div className="home-page-side-info__image" />
          <div className="home-page-side-info__image" />
        </div>
        <div className="circle-container">
          <div className="orange-circle">
            <div className="border" />
          </div>
        </div>
      </div>
      <div className="side-info-top">
        <Link href="/contacts?activeform=estimate">
          <a className="button contacts-goal side-info-top-content">Project estimate</a>
        </Link>
      </div>
      <div className="scroll-info-container">
        <p className="vertical-text">SCROLL DOWN TO LEARN MORE</p>
        <button className="mouse-scroll" type="button">
          <span className="mouse-scroll-wheel" />
        </button>
      </div>
      <div className="bg-scroll" />
    </div>
  </div>
);

export default Main;
