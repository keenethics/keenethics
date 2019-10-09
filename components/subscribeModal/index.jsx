import React from 'react';
import PropTypes from 'prop-types';
import Subscriber from '../subscribe-for-updates';

const TimesIcon = () => (
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.2 24a1.2 1.2 0 0 1-.85-2.05L21.95.35a1.2 1.2 0 1 1 1.7 1.7l-21.6 21.6a1.2 1.2 0 0 1-.84.35z"
      fill="#2D4352"
    />
    <path
      d="M22.8 24a1.2 1.2 0 0 1-.86-.35L.35 2.05a1.2 1.2 0 0 1 1.7-1.7l21.6 21.6a1.2 1.2 0 0 1-.86 2.05z"
      fill="#2D4352"
    />
  </svg>
);
const RocketImage = () => (
  <svg
    preserveAspectRatio="xMidYMid meet"
    width="285"
    height="285"
    viewBox="0 0 285 285"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="142.5" cy="142.5" r="82.42" fill="url(#paint0_linear)" />
    <circle cx="142.5" cy="142.5" r="141" stroke="#DEE3EE" strokeWidth="3" />
    <circle cx="142.5" cy="142.5" r="112.23" stroke="#DEE3EE" strokeWidth="2" />
    <circle cx="224.15" cy="26.96" r="16.18" fill="#93AAE5" />
    <ellipse cx="239.55" cy="243.78" rx="11.55" ry="10.78" fill="#DEE3EE" />
    <ellipse
      cx="190.56"
      cy="110.13"
      rx="9"
      ry="11"
      transform="rotate(-33.23 190.56 110.13)"
      fill="#F5F6F7"
    />
    <ellipse
      cx="186.77"
      cy="131.74"
      rx="4"
      ry="5"
      transform="rotate(-33.23 186.77 131.74)"
      fill="#F5F6F7"
    />
    <circle
      cx="49.01"
      cy="244.01"
      r="20.02"
      transform="rotate(177.09 49.01 244.01)"
      fill="url(#paint1_linear)"
    />
    <path
      d="M138.16 131.85c24.61-44.7 20.7-73.53 18.17-83.21a3.9 3.9 0 0 0-1.9-2.43 4.33 4.33 0 0 0-3.18-.37c-10.2 2.63-38.77 13.45-68.17 55.51 0 0-17.5 24.9-20.76 56.52l16.81 9.32 16.82 9.31c27.68-18.07 42.2-44.65 42.2-44.65z"
      fill="#F0F2F9"
    />
    <path
      d="M84.37 185.4L62.47 173l6.73-7.88 19.18 10.9-4.01 9.38z"
      fill="#fff"
    />
    <path
      d="M96.74 170.4L70.32 155.1 64 165.8l26.42 15.32 6.32-10.72z"
      fill="url(#paint2_linear)"
    />
    <path
      d="M83.8 116.72L53.84 128.4a16.41 16.41 0 0 0-5.23 3.29 15.68 15.68 0 0 0-3.56 4.92l-16.92 37.04c-.2.42-.3.88-.28 1.34a2.87 2.87 0 0 0 1.21 2.3c.37.26.8.44 1.27.52a3.43 3.43 0 0 0 3.3-1.26c5.08-6.43 24.72-29.62 43.12-29.39l7.07-30.44z"
      fill="url(#paint3_linear)"
    />
    <path
      d="M126.33 141.64l3.77 30.4c.25 1.96.06 3.98-.53 5.92a15.5 15.5 0 0 1-2.93 5.37l-26.99 32.3a3.52 3.52 0 0 1-3.94 1.04 2.9 2.9 0 0 1-1.86-2.36c-.08-.6.03-1.2.3-1.76 3.62-7.36 16-34.99 6.6-49.97l25.58-20.94z"
      fill="url(#paint4_linear)"
    />
    <path
      d="M62.65 200.92l-3.6-2a1.59 1.59 0 0 1-.76-.98c-.11-.42-.05-.88.18-1.26l37.4-62.87a2.24 2.24 0 0 1 2.96-.84l5.5 3.05a1.97 1.97 0 0 1 .95 1.26 2.1 2.1 0 0 1-.3 1.59L65.02 200.3c-.24.38-.63.66-1.07.77-.44.12-.9.06-1.3-.15z"
      fill="url(#paint5_linear)"
    />
    <path
      d="M122.06 120.2c9.01-2.47 14.6-11.5 12.46-20.18-2.13-8.68-11.16-13.71-20.17-11.25-9.01 2.47-14.6 11.5-12.46 20.17 2.13 8.68 11.16 13.72 20.17 11.25z"
      fill="url(#paint6_linear)"
    />
    <path
      d="M127.62 109.7a11.5 11.5 0 0 1-11.03 5.33 10.56 10.56 0 0 1-5.7-2.45 9.91 9.91 0 0 1-3.18-5.15c-.5-2.01-.35-4.14.4-6.13.76-1.99 2.1-3.74 3.84-5.03a11.61 11.61 0 0 1 6-2.25 10.9 10.9 0 0 1 6.12 1.3 9.97 9.97 0 0 1 4.88 6.35c.67 2.69.19 5.58-1.33 8.02z"
      fill="#340763"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="60.06"
        y1="142.47"
        x2="224.95"
        y2="142.47"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#93AAE5" />
        <stop offset="1" stopColor="#507CEB" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="28.98"
        y1="244.01"
        x2="69.04"
        y2="244.01"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#93AAE5" />
        <stop offset="1" stopColor="#507CEB" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="67.16"
        y1="160.44"
        x2="93.48"
        y2="175.95"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B9497F" />
        <stop offset="1" stopColor="#F54F4F" />
      </linearGradient>
      <linearGradient
        id="paint3_linear"
        x1="25"
        y1="152.81"
        x2="87.38"
        y2="144.91"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B9497F" />
        <stop offset="1" stopColor="#F54F4F" />
      </linearGradient>
      <linearGradient
        id="paint4_linear"
        x1="89.86"
        y1="182.97"
        x2="130.93"
        y2="177.76"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B9497F" />
        <stop offset="1" stopColor="#F54F4F" />
      </linearGradient>
      <linearGradient
        id="paint5_linear"
        x1="54.78"
        y1="171.15"
        x2="108.8"
        y2="164.12"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B9497F" />
        <stop offset="1" stopColor="#F54F4F" />
      </linearGradient>
      <linearGradient
        id="paint6_linear"
        x1="101.88"
        y1="108.94"
        x2="134.74"
        y2="100.88"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B9497F" />
        <stop offset="1" stopColor="#F54F4F" />
      </linearGradient>
    </defs>
  </svg>
);
const SubscribeModal = ({ open, onClose }) => {
  const HeaderComponent = () => (
    <h4>
      <span className="text-color-red">KEEN</span>
      &nbsp;
      <span className="text-color-black">BLOG</span>
    </h4>
  );
  const SloganComponent = () => (
    <p>
      Subscribe to our bimonthly newsletter, read insightful articles, and
      receive great promo codes.
    </p>
  );

  return (
    <div className="modal" style={{ display: open ? 'flex' : 'none' }}>
      <button type="button" onClick={onClose} className="close">
        <TimesIcon />
      </button>
      <div className="modal-content">
        <div className="subscribe-modal-container">
          <RocketImage />
          <Subscriber
            HeaderComponent={HeaderComponent}
            SloganComponent={SloganComponent}
          />
          <button type="button" className="btn-link" onClick={onClose}>
            No, thanks
          </button>
        </div>
      </div>
    </div>
  );
};

SubscribeModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.bool.isRequired,
};

export default SubscribeModal;
