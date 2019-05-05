import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Layout from '../components/layout/main';
import SocialButton from '../components/social-buttons/main';

const PromoPage = ({ url }) => {
  const aboutUsList = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 40 40">
        <defs>
          <path id="hvxga" d="M296.56 626.78l-1.07.73A18.73 18.73 0 0 1 280 656.7c-3.53 0-6.94-.99-9.91-2.85l2.27-.38-.2-1.27-4.74.78 2.33 4.66 1.15-.58-.86-1.72a20.02 20.02 0 0 0 26.52-28.57z" />
          <path id="hvxgc" d="M270.32 643.16v-3.62c0-1.12.6-2.18 1.57-2.76l.92-.56a4.48 4.48 0 0 0 2.71.43 4.5 4.5 0 0 0 1.3 2.63l-.44.26a4.53 4.53 0 0 0-2.17 3.62zm1.3-10.96a3.22 3.22 0 0 1 6.43-.2 4.53 4.53 0 0 0-2.5 3.34 3.23 3.23 0 0 1-3.94-3.14zm8.38.64a3.23 3.23 0 1 1-.01 6.46 3.23 3.23 0 0 1 0-6.46zm5.16-3.87a3.23 3.23 0 0 1 0 6.46c-.24 0-.48-.04-.71-.1a4.53 4.53 0 0 0-2.5-3.33 3.22 3.22 0 0 1 3.2-3.03zm4.52 10.57v3.62h-3.9a4.53 4.53 0 0 0-2.17-3.62l-.44-.26a4.5 4.5 0 0 0 1.3-2.63 4.47 4.47 0 0 0 2.71-.43l.93.56a3.24 3.24 0 0 1 1.57 2.76zm-5.17 7.49h-9.03v-3.62c0-1.12.6-2.18 1.57-2.76l.92-.56a4.48 4.48 0 0 0 4.05 0l.93.56a3.24 3.24 0 0 1 1.56 2.76zm1.3 1.3v-3.88h5.16v-4.9c0-1.58-.84-3.06-2.2-3.87l-.44-.27a4.5 4.5 0 0 0-3.17-7.73 4.52 4.52 0 0 0-4.47 3.93 4.48 4.48 0 0 0-1.38 0 4.52 4.52 0 1 0-7.64 3.8l-.45.27a4.54 4.54 0 0 0-2.19 3.87v4.9h5.16v3.88z" />
          <path id="hvxge" d="M280 652.84c2.88 0 5.68-.83 8.1-2.4l-.71-1.09A13.56 13.56 0 0 1 266.45 638c0-7.47 6.08-13.55 13.55-13.55a13.56 13.56 0 0 1 8.62 24l.82 1a14.86 14.86 0 0 0-9.44-26.29A14.86 14.86 0 0 0 265.16 638c0 8.18 6.66 14.84 14.84 14.84z" />
          <path id="hvxgg" d="M261.29 638c0-10.32 8.4-18.71 18.71-18.71 3.53 0 6.94 1 9.91 2.86l-2.27.38.2 1.27 4.74-.8-2.33-4.64-1.15.57.86 1.72a20.02 20.02 0 0 0-27.99 26.01l1.17-.55a18.54 18.54 0 0 1-1.85-8.11z" />
          <path id="hvxgi" d="M262.68 648c.24.41.5.82.77 1.22l1.06-.73c-.25-.37-.49-.75-.71-1.14z" />
          <linearGradient id="hvxgb" x1="300" x2="267.42" y1="642.39" y2="642.39" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="hvxgd" x1="290.97" x2="269.03" y1="638" y2="638" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="hvxgf" x1="294.84" x2="265.16" y1="638" y2="638" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="hvxgh" x1="292.58" x2="260" y1="632.34" y2="632.34" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="hvxgj" x1="264.51" x2="262.68" y1="648.28" y2="648.28" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
        </defs>
        <g>
          <g transform="translate(-260 -618)">
            <g><use fill="url(#hvxgb)" xlinkHref="#hvxga" /></g>
            <g><use fill="url(#hvxgd)" xlinkHref="#hvxgc" /></g>
            <g><use fill="url(#hvxgf)" xlinkHref="#hvxge" /></g>
            <g><use fill="url(#hvxgh)" xlinkHref="#hvxgg" /></g>
            <g><use fill="url(#hvxgj)" xlinkHref="#hvxgi" /></g>
          </g>
        </g>
      </svg>,
      text: "We're a team of 30 full-stack JavaScript engineers, 3 chatbots specialists, 1 voice UX specialist, 3 PMs, 2 BAs, 1 UX/UI designer, 4 QAs, 1 Solution architect.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40" height="46" viewBox="0 0 40 46">
        <defs>
          <path id="4a08a" d="M285.94 725.52h6.97a13.1 13.1 0 0 1-2.2 6.63h-5.56c.47-2 .74-4.26.79-6.63zM280 737.9c-1.1 0-2.24-1.31-3.12-3.6l-.29-.81h6.82c-.91 2.77-2.2 4.4-3.4 4.4zm-9.68-4.41h2.66c.36 0 .66-.3.66-.67 0-.37-.3-.67-.66-.67h-3.7a13.04 13.04 0 0 1-2.2-6.63h6.98c.06 3.5.62 6.77 1.59 9.27.43 1.14.94 2.07 1.5 2.79a12.92 12.92 0 0 1-6.83-4.1zm-1.82-14.62c.24-.45.5-.89.78-1.31h5.56c-.47 1.99-.74 4.25-.78 6.61h-6.98c.1-1.86.57-3.64 1.42-5.3zm11.5-7.06c1.1 0 2.24 1.3 3.11 3.59l.3.82h-6.81c.9-2.77 2.19-4.41 3.4-4.41zm-4.61 12.36c.04-2.5.35-4.75.82-6.61h7.58c.49 1.96.77 4.23.82 6.61zm0 1.35h9.22a29.66 29.66 0 0 1-.83 6.63h-7.57c-.5-1.96-.78-4.24-.82-6.63zm14.29-9.3h-2.74c-.36 0-.66.3-.66.66 0 .37.3.67.66.67h3.77a13.02 13.02 0 0 1 2.2 6.62h-6.97c-.07-3.49-.62-6.75-1.59-9.26a10.81 10.81 0 0 0-1.5-2.78c2.69.61 5.06 2.07 6.83 4.08zm-2.48 19.47c-.3.2-.38.62-.18.93a.66.66 0 0 0 .92.18 14.35 14.35 0 0 0 6.32-11.95 14.39 14.39 0 0 0-2.72-8.43 14.21 14.21 0 0 0-17.52-4.63.67.67 0 0 0-.32.89c.15.34.55.48.88.33.83-.4 1.7-.69 2.57-.89-.56.72-1.07 1.65-1.5 2.8-.16.4-.31.84-.45 1.3h-4.89c.6-.7 1.29-1.33 2.02-1.87.3-.22.36-.64.14-.94a.66.66 0 0 0-.92-.14 14.46 14.46 0 0 0-3.1 20.01 14.21 14.21 0 0 0 17.04 4.85c.33-.14.5-.53.35-.87a.66.66 0 0 0-.86-.36c-.7.29-1.41.52-2.14.68.56-.71 1.07-1.65 1.51-2.79.16-.41.3-.85.44-1.3h4.9c-.73.83-1.56 1.57-2.49 2.2z" />
          <path id="4a08c" d="M294.02 712.09l-10.07-5.87a.66.66 0 0 0-.91.24.67.67 0 0 0 .24.92l10.08 5.87a.66.66 0 0 0 .9-.25.67.67 0 0 0-.24-.91z" />
          <path id="4a08e" d="M263.36 730.72V719a.67.67 0 1 0-1.33 0v11.73c0 .37.3.67.66.67.37 0 .67-.3.67-.67z" />
          <path id="4a08g" d="M293.36 736.46l-10.08 5.87a.67.67 0 0 0 .33 1.25c.12 0 .23-.03.34-.1l10.07-5.86c.32-.19.43-.6.24-.92a.66.66 0 0 0-.9-.24z" />
          <path id="4a08i" d="M296.64 718.99v11.73c0 .37.3.67.66.67.37 0 .67-.3.67-.67V719a.67.67 0 1 0-1.33 0z" />
          <path id="4a08k" d="M276.72 742.33l-10.07-5.87a.66.66 0 0 0-.91.24.67.67 0 0 0 .24.92l10.08 5.87a.66.66 0 0 0 .9-.25.67.67 0 0 0-.24-.91z" />
          <path id="4a08m" d="M266.31 713.34c.12 0 .23-.03.34-.1l10.07-5.86c.32-.19.43-.6.24-.92a.66.66 0 0 0-.9-.24l-10.08 5.87a.67.67 0 0 0 .33 1.25z" />
          <path id="4a08o" d="M279.99 703.34c.74 0 1.34.6 1.34 1.36 0 .75-.6 1.36-1.34 1.36-.74 0-1.34-.61-1.34-1.36 0-.75.6-1.36 1.34-1.36zm0 4.06a2.69 2.69 0 0 0 2.68-2.7c0-1.49-1.2-2.7-2.67-2.7a2.69 2.69 0 0 0-2.68 2.7c0 1.49 1.2 2.7 2.68 2.7z" />
          <path id="4a08q" d="M263.85 715.46c-.37.65-1.19.87-1.83.5a1.37 1.37 0 0 1 .32-2.5c.35-.1.71-.04 1.02.14.64.37.86 1.2.5 1.86zm.18-3.02a2.67 2.67 0 0 0-3.65.99 2.71 2.71 0 0 0 .98 3.69 2.67 2.67 0 0 0 3.65-.99c.74-1.3.3-2.94-.98-3.69z" />
          <path id="4a08s" d="M263.36 736.1a1.34 1.34 0 0 1-1.83-.5 1.37 1.37 0 0 1 .49-1.85 1.34 1.34 0 0 1 1.83.5c.37.65.15 1.48-.49 1.86zm-2-3.5a2.71 2.71 0 0 0-.98 3.68 2.67 2.67 0 0 0 3.65.99 2.71 2.71 0 0 0 .98-3.7 2.67 2.67 0 0 0-3.65-.98z" />
          <path id="4a08u" d="M279.99 746.37c-.74 0-1.34-.61-1.34-1.36 0-.75.6-1.36 1.34-1.36.74 0 1.34.6 1.34 1.36 0 .75-.6 1.36-1.34 1.36zm0-4.06a2.69 2.69 0 0 0-2.67 2.7c0 1.49 1.2 2.7 2.68 2.7a2.69 2.69 0 0 0 2.67-2.7c0-1.49-1.2-2.7-2.67-2.7z" />
          <path id="4a08w" d="M298.46 735.6a1.34 1.34 0 0 1-1.83.5 1.37 1.37 0 0 1-.5-1.85 1.34 1.34 0 0 1 2.47.33c.09.35.04.71-.14 1.03zm.18-3a2.67 2.67 0 0 0-3.65.98 2.71 2.71 0 0 0 2.31 4.05 2.67 2.67 0 0 0 2.32-1.35 2.7 2.7 0 0 0-.98-3.69z" />
          <path id="4a08y" d="M296.63 713.6a1.32 1.32 0 0 1 1.02-.14 1.37 1.37 0 0 1 .32 2.5c-.64.37-1.46.15-1.83-.5a1.37 1.37 0 0 1 .49-1.86zm.68 3.88a2.68 2.68 0 0 0 2.58-2 2.7 2.7 0 0 0-.27-2.05 2.66 2.66 0 0 0-3.65-.99 2.71 2.71 0 0 0-.98 3.69c.5.86 1.4 1.35 2.32 1.35z" />
          <linearGradient id="4a08b" x1="294.26" x2="265.74" y1="724.86" y2="724.86" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="4a08d" x1="294.35" x2="282.95" y1="709.74" y2="709.74" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="4a08f" x1="263.36" x2="262.03" y1="724.86" y2="724.86" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="4a08h" x1="294.35" x2="282.95" y1="739.97" y2="739.97" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="4a08j" x1="297.97" x2="296.64" y1="724.86" y2="724.86" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="4a08l" x1="277.05" x2="265.65" y1="739.97" y2="739.97" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="4a08n" x1="277.05" x2="265.65" y1="709.74" y2="709.74" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="4a08p" x1="282.67" x2="277.32" y1="704.7" y2="704.7" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="4a08r" x1="265.37" x2="260.02" y1="714.78" y2="714.78" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="4a08t" x1="265.37" x2="260.02" y1="734.93" y2="734.93" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="4a08v" x1="282.67" x2="277.32" y1="745.01" y2="745.01" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="4a08x" x1="299.98" x2="294.63" y1="734.93" y2="734.93" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="4a08z" x1="299.98" x2="294.63" y1="714.78" y2="714.78" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
        </defs>
        <g>
          <g transform="translate(-260 -702)">
            <g><use fill="url(#4a08b)" xlinkHref="#4a08a" /></g>
            <g><use fill="url(#4a08d)" xlinkHref="#4a08c" /></g>
            <g><use fill="url(#4a08f)" xlinkHref="#4a08e" /></g>
            <g><use fill="url(#4a08h)" xlinkHref="#4a08g" /></g>
            <g><use fill="url(#4a08j)" xlinkHref="#4a08i" /></g>
            <g><use fill="url(#4a08l)" xlinkHref="#4a08k" /></g>
            <g><use fill="url(#4a08n)" xlinkHref="#4a08m" /></g>
            <g><use fill="url(#4a08p)" xlinkHref="#4a08o" /></g>
            <g><use fill="url(#4a08r)" xlinkHref="#4a08q" /></g>
            <g><use fill="url(#4a08t)" xlinkHref="#4a08s" /></g>
            <g><use fill="url(#4a08v)" xlinkHref="#4a08u" /></g>
            <g><use fill="url(#4a08x)" xlinkHref="#4a08w" /></g>
            <g><use fill="url(#4a08z)" xlinkHref="#4a08y" /></g>
          </g>
        </g>
      </svg>,
      text: "We've worked with more than 80 businesses in e-learning, finance services, healthcare, agriculture, e-commerce, industries across the GB, USA, and Europe.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="51" height="40" viewBox="0 0 51 40">
        <defs>
          <path id="6564a" d="M267.45 799.22a.74.74 0 0 0 .86-.6 15.99 15.99 0 0 1 26.53-8.9.74.74 0 1 0 1-1.1 17.45 17.45 0 0 0-28.99 9.74c-.07.4.2.8.6.86z" />
          <path id="6564c" d="M292.91 811.24c.2 0 .38-.07.52-.2a13.44 13.44 0 1 0-22.47-12.7.74.74 0 0 0 1.44.33 12 12 0 0 1 11.62-9.16 11.96 11.96 0 0 1 8.38 20.47.74.74 0 0 0 .51 1.26z" />
          <path id="6564e" d="M290.15 811.7a11.93 11.93 0 0 1-14.77-2 .74.74 0 1 0-1.07 1.03 13.4 13.4 0 0 0 16.6 2.25.74.74 0 1 0-.76-1.27z" />
          <path id="6564g" d="M284.02 792.54a8.86 8.86 0 0 0-8.33 5.74.74.74 0 0 0 1.38.53 7.44 7.44 0 1 1 .02 5.34.74.74 0 0 0-1.38.53 8.9 8.9 0 0 0 8.31 5.69 8.92 8.92 0 0 0 0-17.83z" />
          <path id="6564i" d="M261.17 803.37h-5a4.4 4.4 0 0 0 0-3.83h5l2.58 1.92zm22.85-4.62a2.71 2.71 0 1 1-2.6 3.45h2.6a.74.74 0 0 0 0-1.48h-2.6a2.71 2.71 0 0 1 2.6-1.97zm-18.17 9.05a.74.74 0 0 0-1 .3c-.99 1.9-2.35 4.47-.51 7.04a.74.74 0 0 0 1.33-.3c.14-.84.86-1.82 2.18-3 .9 1.33 2.14 2.46 3.8 3.5a.74.74 0 0 0 1-1.06c-1.31-1.84-.33-3.7.82-5.85 1.02-1.92 2.15-4.05 1.34-6.23h5.1a4.2 4.2 0 1 0 0-1.48h-14.7l-3.36-2.5a.74.74 0 0 0-.44-.15h-6.67a.74.74 0 0 0-.51 1.27 2.92 2.92 0 0 1 0 4.24.74.74 0 0 0 .5 1.27h6.68c.16 0 .32-.05.44-.15l3.37-2.5h.85c.55.95.56 1.98.04 3.34a.74.74 0 0 0 1.38.53c.38-.99.76-2.38.2-3.87h5.49c1 1.73.06 3.5-1.02 5.54-.82 1.54-1.7 3.22-1.61 4.95a9 9 0 0 1-1.88-2.32.74.74 0 0 0-1.1-.21 12.9 12.9 0 0 0-2.62 2.69c-.18-1.25.43-2.56 1.21-4.06a.74.74 0 0 0-.3-1z" />
          <path id="6564k" d="M274.9 816.32c.77.47 1.57.88 2.39 1.22l-2.39 4.95h-3.6zm14.49 1.74l2.13 4.43h-14.98l2.13-4.43a17.49 17.49 0 0 0 10.72 0zm1.38-.52l.19-.07.07-.04c.15-.06.29-.12.43-.2l.09-.03.41-.2.02-.02a17.61 17.61 0 0 0 .92-.5l.06-.04.2-.11 3.6 6.16h-3.6zm12.94 4.96h-5.24l-4.09-7.01a17.44 17.44 0 0 0 3.58-24.54.74.74 0 0 0-1.18.9 15.96 15.96 0 0 1-7.16 24.56l-.1.04a15.9 15.9 0 0 1-10.98 0 15.93 15.93 0 0 1-4.18-2.3.74.74 0 1 0-.89 1.19l.2.15-4.08 7.01h-5.24a.74.74 0 0 0 0 1.48h39.36a.74.74 0 0 0 0-1.48z" />
          <linearGradient id="6564b" x1="296.08" x2="266.84" y1="791.63" y2="791.63" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="6564d" x1="297.45" x2="270.94" y1="799.63" y2="799.63" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="6564f" x1="291.28" x2="274.11" y1="812.18" y2="812.18" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="6564h" x1="292.94" x2="275.64" y1="801.45" y2="801.45" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="6564j" x1="288.21" x2="254" y1="806.36" y2="806.36" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
          <linearGradient id="6564l" x1="304.44" x2="263.61" y1="807.32" y2="807.32" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d95600" />
            <stop offset="1" stopColor="#d62c2c" />
          </linearGradient>
        </defs>
        <g>
          <g transform="translate(-254 -784)">
            <g><use fill="url(#6564b)" xlinkHref="#6564a" /></g>
            <g><use fill="url(#6564d)" xlinkHref="#6564c" /></g>
            <g><use fill="url(#6564f)" xlinkHref="#6564e" /></g>
            <g><use fill="url(#6564h)" xlinkHref="#6564g" /></g>
            <g><use fill="url(#6564j)" xlinkHref="#6564i" /></g>
            <g><use fill="url(#6564l)" xlinkHref="#6564k" /></g>
          </g>
        </g>
      </svg>,
      text: "We're looking to partner with entrepreneurs looking for business processes automation, building digital products and providing services with help of web and mobile apps, chatbots, voice helpers, AI.",
    },
  ];
  return (
    <Layout currentURL={url} noMenu>
      <div className="promo-page">
        <header className="header">
          <div className="promo-container">
            <div className="logo-wrap">
              <Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="155" height="38" viewBox="0 0 155 38">
                  <defs>
                    <path id="2483a" d="M198.1 40.63V25.18h1.87l8.38 12.03h.17V25.18h1.9v15.45h-1.87l-8.38-11.98H200v11.98zm-3.26 0h-9.57V25.18h9.57v1.73h-7.64v4.96h7.24v1.72h-7.24v5.3h7.64zm-12.82 0h-9.57V25.18h9.57v1.73h-7.64v4.96h7.24v1.72h-7.24v5.3h7.64zm-23.77 0V25.18h1.92v7.5h.17l6.76-7.5h2.42l-6.17 6.67 6.73 8.78h-2.49l-5.57-7.44-1.85 2.05v5.4zM149 51.6h65.76V14H149z" />
                    <path id="2483b" d="M213.19 14h90.8v37.6h-90.8zm3.13 3.13v31.35h84.55V17.13z" />
                    <path id="2483c" d="M286.7 36.6c.11.8.53 1.45 1.24 1.93.72.48 1.62.72 2.72.72 1.04 0 1.9-.26 2.58-.76a2.28 2.28 0 0 0 1.02-1.9c0-.66-.25-1.2-.74-1.64a5.66 5.66 0 0 0-2.35-1.05l-1.97-.51a6.35 6.35 0 0 1-3.05-1.53 3.65 3.65 0 0 1-.95-2.64c0-1.31.5-2.37 1.5-3.18s2.32-1.22 3.95-1.22c1.49 0 2.74.4 3.74 1.2a4.1 4.1 0 0 1 1.63 3.07h-1.94a2.78 2.78 0 0 0-1.13-1.85 3.94 3.94 0 0 0-2.36-.67 4 4 0 0 0-2.48.7c-.62.47-.94 1.1-.94 1.89 0 .6.23 1.1.7 1.48.45.37 1.22.7 2.28.97l1.61.43c1.6.4 2.74.93 3.44 1.6a3.6 3.6 0 0 1 1.04 2.71c0 1.43-.52 2.56-1.55 3.4a6.5 6.5 0 0 1-4.21 1.25c-1.63 0-2.97-.4-4.02-1.2a4.26 4.26 0 0 1-1.71-3.2zm-15.43 2.23c-1.23-1.45-1.84-3.42-1.84-5.91 0-2.5.61-4.48 1.83-5.93a6.16 6.16 0 0 1 4.98-2.17c1.63 0 3.02.46 4.17 1.4a5.58 5.58 0 0 1 2.08 3.62h-1.96c-.26-1-.77-1.79-1.54-2.37a4.43 4.43 0 0 0-2.75-.87 4.2 4.2 0 0 0-3.53 1.7c-.87 1.14-1.3 2.67-1.3 4.62 0 1.93.44 3.47 1.3 4.6a4.22 4.22 0 0 0 3.54 1.7c1.08 0 2-.25 2.77-.77a3.62 3.62 0 0 0 1.51-2.12h1.96a5.26 5.26 0 0 1-2.08 3.4 6.74 6.74 0 0 1-4.16 1.27c-2.1 0-3.76-.72-4.98-2.17zm-6.87 1.82V25.18h1.93v15.47zm-5.63 0V33.6h-8.47v7.04h-1.93V25.18h1.93v6.7h8.47v-6.7h1.93v15.47zm-20.04 0V26.92h-4.98v-1.74h11.88v1.74h-4.98v13.73zm-7.27 0h-9.57V25.18h9.57v1.74h-7.64v4.96h7.24v1.72h-7.24v5.31h7.64z" />
                    <path id="2483d" d="M213.19 39.06a3.13 3.13 0 1 1 6.27 0 3.13 3.13 0 0 1-6.27 0z" />
                  </defs>
                  <g>
                    <g transform="translate(-149 -14)">
                      <g><use fill="#fff" xlinkHref="#2483a" /></g>
                      <g><use fill="#fff" xlinkHref="#2483b" /></g>
                      <g><use fill="#fff" xlinkHref="#2483c" /></g>
                      <g><use fill="#d62c2c" xlinkHref="#2483d" /></g>
                    </g>
                  </g>
                </svg>
              </Link>
            </div>
            <div className="header-text">Kyiv - New York - Ottawa - Amsterdam - London - Stockholm - Berlin - Rome - Singapore - Moscow - Canberra</div>
          </div>
        </header>
        <div className="main">
          <div className="promo-container">
            <section className="top-section">
              <h1 className="top-section-title">
ETHICAL
                <br />
DEVELOPMENT
                <br />
OF KEEN WEB APPS
              </h1>
            </section>
            <section>
              <div className="about-us-content">
                <h2 className="section-title -dot">WHO WE ARE</h2>
                <ul className="about-us-list">
                  {
                    aboutUsList.map(aboutUs => (
                      <li className="about-us-item" key={aboutUs.text}>
                        {aboutUs.icon}
                        <p className="about-us-descr">{aboutUs.text}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="about-us-bg"><img src="/static/images/promo-page/tech_logos.svg" alt="Tech Logos" /></div>
            </section>
            <section className="quotes-section">
              <h2 className="section-title text-center">WE AND OUR CUSTOMERS</h2>
              <div className="quotes-columns">
                <div className="quotes-column -left">
                  <div className="svg-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#d83c34" xmlnsXlink="http://www.w3.org/1999/xlink" width="73" height="63" viewBox="0 0 73 63">
                      <defs><path id="fg4ia" d="M282.32 1333.74l23.63-28.74 14.05 7.52-17.82 21.98 17.82 21.98-14.05 7.52-23.63-28.62zm-32.32 0l23.7-28.74 13.98 7.52-17.82 21.98 17.82 21.98-13.98 7.52-23.7-28.62z" /></defs>
                      <g>
                        <g transform="translate(-249 -1303)">
                          <use xlinkHref="#fg4ia" />
                          <use fill="#fff" xlinkHref="#fg4ia" />
                          <use fill="#fff" fillOpacity="0" stroke="#d83c34" strokeMiterlimit="50" strokeWidth="2" xlinkHref="#fg4ia" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="quote">— This is what is really unique about them. They feel like a business partner</div>
                </div>
                <div className="quotes-column -right">
                  <div className="quote">
                    &ldquo;Keenethics was reliable in meeting tight deadlines, delivering
                    high-quality
                    work on time and within budget. They offered a broad range of proficiency
                    and skills as well as friendly, personable customer service. They had no
                    difficulty in meeting requirements and provided additional support as
                    needed.&rdquo;
                  </div>
                  <div className="quote">
                    &ldquo;Keenethics have a good network of resources and are able to bring
                    in the best people for each job&rdquo;.
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <footer className="footer">
          <div className="social-icons">
            <SocialButton />
          </div>
        </footer>
      </div>
    </Layout>
  );
};

PromoPage.propTypes = {
  url: PropTypes.object,
};

PromoPage.defaultProps = {
  url: {},
};

export default PromoPage;
