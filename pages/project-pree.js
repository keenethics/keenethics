import React from 'react';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import PortfolioFeedback from '../components/portfolio/PortfolioFeedback';

const baseColor = '#4d48b4';

const ProjectPrix = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Pree</h2>
              <p className="description">
                Stop losing your stuff
              </p>
              <PortfolioTechnologyTags tags={['Fintech', 'E-Commerce', 'Education']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/pree.png" alt="Prix" className="screen" />
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <PortfolioFeedback
              title="Ahmed-Jacob Aly, Germany"
              photo="static/portfolio/client-pree.jpg"
              feedback="Committed team for a starter."
            />
            <div className="title">What is the purpose of the app?</div>
            <p>
              Suppose you often lose your keys and afterwards you spend a lot of time looking for
              them. How would a developed PREE app solve this problem? We have a PREE device which
              is attached to your key/car/bag etc.
            </p>
            <p>
              The PREE devices are being produced according to iBeacon protocol. We developed app
              which allows its users to attach the PREE device to their account and establishes the
              Bluetooth connection between your smartphone (Android or iOS) and PREE device.
            </p>
            <p>
              According to the received signal the app notifies user when he or she loses connection
              or is back in the reach of some PREE device.
            </p>
            <div className="title">Our task</div>
            <p>
              Our task was to develop and release mobile app for Android and iOS platforms which has
              to communicate with BLE devices and give its users location information of their
              stuff.
            </p>
            <div className="grid pree-grid">
              <div className="col-1-2">
                <img
                  src="/static/images/project/pree-phone-app.jpg"
                  alt="Pree phone app"
                />
              </div>
              <div className="col-1-2">
                <div className="pree-grid-text">
                  <div className="title">UI/UX</div>
                  <p>
                    The most important thing in PREE app is to provide the ability to quickly
                    access and control their PREE devices. That’s why after user registration,
                    the BLE starts scanning of PREE devices and attaches  trackers to user’s
                    account.
                  </p>
                  <p>
                    The main page - list of devices is available from almost all pages. This UX
                    feature allows easy and fast access to settings of PREE devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pree-fullwidth-image" />
          <div className="project-content-more">
            <div className="grid pree-grid">
              <div className="col-2-3">
                <img
                  src="/static/images/project/pree-wireframe.jpg"
                  alt="Pree wireframe"
                />
              </div>
              <div className="col-1-3">
                <div className="pree-grid-text">
                  <p>
                    Realized UX doesn’t have pages of deep nesting which allows us to
                    have the fast access to all PREE devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="title">
              Development challenges
            </div>
            <div className="tags-blog">
              <p>Technology stack for backend:</p>
              <PortfolioTechnologyTags tags={['Node js', 'Express', 'Mongo']} />
              <p>Technology stack for Android and IOS:</p>
              <PortfolioTechnologyTags tags={['Ionic', 'Cordova', 'BLE', 'Google Maps', 'Geolocation']} />
            </div>
            <p>
              The whole implementation of the app is possible thank to the open source
              cordova ble plugin &ndash;&nbsp;
              <a
                href="https://github.com/don/cordova-plugin-ble-central"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                cordova-plugin-ble-central
              </a>
            </p>
            <p>
              This plugin allows to scan, connect, read/write information from a BLE device &ndash;
              in our case PREE device. We use this plugin for scanning PREE devices, getting power
              of received signal for every devices, setting bluetooth pair connection for every
              attached device. Also we used Google maps and Geolocation for storing and showing
              actual location for attached PREE device. All this stuff is required for main
              feature &ndash; notify user when you lose connect or back to range for some PREE
              device.
            </p>
            <img
              src="/static/images/project/pree-lost-connection.jpg"
              alt="Pree phone app"
              className="image-gaps"
            />
            <div className="title">
              Problems
            </div>
            <div className="title">
              Connection
            </div>
            <p>
              There are a lot of manufactures of Android devices and that’s why the bluetooth
              behavior is different with each of them. Sometimes the connection between Android
              smartphone and PREE device is established from seventh attempt. It  takes a lot of
              customer time and we made the decision - keep scanning the BLE devices and try to
              reconnect after every unsuccessful connect. Also we implemented the scanning and
              connecting to operate in background mode.  This leads to power consumption
              increase, but it seems that right now we have found a golden mean for Android
              platform - between strong connect, reliable data and acceptable energy consumption.
            </p>
            <div className="title">
              Scanning on IOS
            </div>
            <p>
              On iOS platform connecting to BLE  works out better than on Android platform
              (iBeacon is developed by Apple). In iOS the main app flow is implemented
              through scanning of PREE devices and tries to connect to them. And it works
              fast and reliable.  The price of that bluetooth functionality is  more power
              consuming. Also in iOS it’s not easy for bluetooth to scan in background mode.
              Firstly in order to upload it to the appsotore you have to explain to them why
              you need it. Secondly  the scanning in background mode leads to an increase in
              the power consumption of iPhone. That’s why we made the decision &nbsp; avoid using
              BLE scanning in background mode on iOS platform. The bluetooth connection works
              reliably &nbsp; it allows to read some information from PREE device and bluetooth
              periphery which helps to calculate the approximated distance.
            </p>
            <img
              src="/static/images/project/pree-site.jpg"
              alt="Pree site"
              className="image-gaps"
            />
            <div className="project-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>
                  Developed app which can scan/connect/read/write for PREE ble devices (iBeacon);
                </li>
                <li>
                  Developed feature which notifies user when he lose connection or back to range
                  with his PREE device;
                </li>
                <li>
                  Developed feature which store is the last to know location of your PREE device
                  and rewrite it when you are back in range;
                </li>
                <li>
                  Developed feature showing all the above mentioned locations on map for every
                  device and on general map;
                </li>
                <li>
                  Developed feature showing approximate distance to you PREE device;
                </li>
                <li>
                  Developed two modes for PREE device &ndash; ‘close by’ (strict) and ‘normal’
                  (no strict) which depends on distance to your PREE device;
                </li>
                <li>
                  Developed feature which notifies your family member when PREE device is lost;
                </li>
              </ul>
            </div>
            <img
              src="/static/images/project/pree-hand.jpg"
              alt="Pree site"
              className="image-gaps"
            />
            <a
              href="https://www.prix.ai"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="link"
              style={{ background: baseColor }}
            >
              Look at the project
            </a>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectPrix;
