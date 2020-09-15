import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Select from 'react-select';
import moment from 'moment';
import StringFormatValidation from 'string-format-validation';
import { debounce } from 'lodash';

import Link from 'next/link';

import Layout from '../components/layout/main';
import Partners from '../components/blocks/partners/Partners';
import PhotoListGallery from '../components/photo-list-gallery';
import GalleryWithMenu from '../components/gallery-with-menu';
import Countries from '../data/countries';
import { outstaffingImgs, outsourcingImgs } from '../data/referralPageImages';
import PhotoBlok from '../components/referral-programm/PhotoBlok';

import {
  teamData,
  fundamentalGoals,
  weOfferYou,
  youReceive,
  UXDiscoveryDeliverables,
} from '../data/referral-program';

const handleStatusResponse = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const ReferralProgram = () => {
  const [projectStage, setProjectStage] = useState('startup');
  const [showDetails, setShowDetails] = useState(false);
  const [countryList, setCountryList] = useState([]);

  const [meetingStep, setMeetingStep] = useState(1);
  const [country, setCountry] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [idea, setIdea] = useState('');
  const [events, setEvents] = useState([]);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [showError, setShowError] = useState(false);
  const [sendEmailResponse, setSendEmailResponse] = useState(null);
  const [timeDifference, setTimeDifference] = useState(0); // in minutes
  const countryItem = ({
    name: countryName,
    flag, callingCodes,
    timeZone,
  }) => ({
    label: (
      <div>
        <img src={flag} alt={countryName} />
        <span>{countryName}</span>
      </div>
    ),
    timeZone,
    flag,
    value: countryName,
    phoneCode: callingCodes.length > 0 ? callingCodes[0] : '',
  });

  const fillCountries = (countries) => {
    const list = countries.map((item) => (countryItem(item)));
    setCountryList(list);
  };

  const handleShowScrollToTopBtn = (e) => {
    if (e.target.scrollTop >= 600) {
      setShowScrollBtn(true);
    } else if (e.target.scrollTop <= 600) {
      setShowScrollBtn(false);
    }
  };

  const setTimeZoneDifference = (timeZone) => {
    const uaTime = new Date((new Date()).toLocaleString('en-US', { timeZone: 'Europe/Kiev' }));
    let userTime;
    try {
      userTime = new Date((new Date()).toLocaleString('en-US', { timeZone }));
    } catch (err) {
      userTime = new Date();
    }
    const difference = Math.round((userTime.getTime() - uaTime.getTime()) / 60000); // 60 000ms = 1m

    setTimeDifference(difference);
  };

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleShowScrollToTopBtn, 100), true);
    const uaDateTime = new Date((new Date()).toLocaleString('en-US', { timeZone: 'Europe/Kiev' }));
    const getCountriesAndUserIp = async () => {
      const promises = [
        fetch('https://restcountries.eu/rest/v2/all?fields=name;flag;callingCodes;codes;alpha2Code;region;capital;'),
        fetch(`https://ipinfo.io?token=${process.env.GEOLOCATION_KEY_IPINFO}`),
        fetch('/api/free-busy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ selectedDate: uaDateTime }),
        }),
      ];
      const response = await Promise.all(promises);
      const [
        countries,
        userIpData,
        calendarEvents,
      ] = await Promise.all(response.map((i) => i.json()));
      const userCountry = countries.find((i) => i.alpha2Code === userIpData.country);

      setTimeZoneDifference(userIpData.timezone);
      fillCountries(Countries);
      setCountry(countryItem(userCountry));
      setEvents(calendarEvents);
    };

    getCountriesAndUserIp();
  }, []);

  const validateForm = () => {
    if (meetingStep === 1) {
      if (!selectedDate || !country) {
        setShowError(true);
      } else {
        setShowError(false);
        setMeetingStep(meetingStep + 1);
      }
      return;
    }
    if (meetingStep === 2) {
      if (StringFormatValidation.validate({ min: 3, max: 25 }, name)
        && StringFormatValidation.validate({ type: 'email' }, email)
        && StringFormatValidation.validate({ min: 3, max: 25 }, phone)) {
        setShowError(false);
        setMeetingStep(meetingStep + 1);
      } else {
        setShowError(true);
      }
    }
  };

  const sendEmail = () => {
    setSendEmailResponse(null);
    const formData = new FormData();
    formData.append('data', JSON.stringify({
      country: country && country.value ? country.value : '',
      selectedDate,
      selectedTime: selectedTime && selectedTime.value ? selectedTime.value : '',
      selectedUserTime: selectedTime && selectedTime.label ? selectedTime.label : '',
      name,
      email,
      phone: country && country.phoneCode ? `+${country.phoneCode} ${phone}` : phone,
      idea,
    }));

    fetch('/referral-program-send-email', {
      method: 'POST',
      body: formData,
    })
      .then(handleStatusResponse)
      .then((response) => response.json())
      .then((json) => {
        setSendEmailResponse(json);
      })
      .catch(() => { });
  };

  const renderWelcomeBlock = () => (
    <div className="welcome-block" id="top">
      <div className="welcome-block-left">
        <div className="logo">
          <Link href="/#main">
            <a className="navigation-logo" href="https://keenethics.com/" target="_blank" rel="noopener noreferrer">
              <img src="/static/images/logo.svg" alt="Keenethics" />
            </a>
          </Link>
        </div>
        <div className="welcome-block-left-content">
          <h1>Welcome to Our Referral Program</h1>
          <div className="text">
            <img src="/static/images/svg/quotes.svg" className="quotes left" alt="quotes" />
            I am happy to see you were directed by one of our satisfied customers.
            KeenEthics is your ethical software development partner with a special referral offer.
            You can read about the offer below or book a meeting with me,
            and I will introduce you to the benefits of working with us personally.
            <img src="/static/images/svg/quotes.svg" className="quotes right" alt="quotes" />
          </div>
        </div>
        <div className="tablet-content">
          <div className="tablet-content-left">
            <div className="contact-data">
              <div className="seo-name">
                Max Savonin
                <p>CEO of KeenEthics</p>
              </div>
              <div>
                <a href="#lets-discuss" className="button orange-btn">Book a meeting</a>
              </div>
            </div>
            <div className="mobile-content-right">
              <img src="/static/images/referral-program/max-768.jpg" alt="Max Savonin" />
            </div>
            <div className="horizontal-line" />
            <div className="contacts">
              <a href="tel:+38 (094) 710 61 05">
                <p><img src="/static/images/svg/icon-tel.svg" alt="tel" /></p>
                +38 (094) 710 61 05
              </a>
              <a href="mailto:max.savonin@keenethics.com">
                <p><img src="/static/images/svg/icon-mail.svg" alt="tel" /></p>
                max.savonin@keenethics.com
              </a>
              <a href="skype:maxsav28?chat">
                <p><img src="/static/images/svg/skype.svg" alt="tel" /></p>
                maxsav28
              </a>
            </div>
          </div>
          <div className="tablet-content-right" />
        </div>
      </div>
      <div className="welcome-block-right" />
    </div>
  );

  const renderProjectStageBlock = () => (
    <div className="project-stage">
      <h2>What does your project need?</h2>
      <div className="stages">

        <div className="tabs">
          <input type="radio" name="tabs" id="startup" defaultChecked onClick={() => { setProjectStage('startup'); setShowDetails(false); }} />
          <label htmlFor="startup">
            <div>
              <img src="/static/images/svg/outsourcing_icon.svg" alt="A Startup Idea" />
              <span className="ellipse">
                <svg viewBox="0 0 32 64" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 64C27.7977 64 23.6365 63.1723 19.7541 61.5641C15.8717 59.956 12.3441 57.5989 9.37258 54.6274C6.40111 51.6559 4.04401 48.1283 2.43586 44.2459C0.827705 40.3634 0 36.2023 0 32C0 27.7977 0.827705 23.6365 2.43586 19.7541C4.04401 15.8717 6.40111 12.3441 9.37259 9.37258C12.3441 6.40111 15.8717 4.044 19.7541 2.43585C23.6366 0.827704 27.7977 -3.67377e-07 32 0V3.2C28.2179 3.2 24.4729 3.94493 20.9787 5.39227C17.4845 6.8396 14.3097 8.961 11.6353 11.6353C8.961 14.3097 6.83961 17.4845 5.39227 20.9787C3.94493 24.4729 3.2 28.2179 3.2 32C3.2 35.7821 3.94493 39.5271 5.39227 43.0213C6.8396 46.5155 8.961 49.6903 11.6353 52.3647C14.3097 55.039 17.4845 57.1604 20.9787 58.6077C24.4729 60.0551 28.2179 60.8 32 60.8V64Z" />
                </svg>
              </span>
            </div>
            <p>Outsourcing</p>
          </label>

          <input type="radio" name="tabs" id="exist" onClick={() => { setProjectStage('existProject'); setShowDetails(false); }} />
          <label htmlFor="exist">
            <div>
              <img src="/static/images/svg/outstaffing-icon.svg" alt="An Existing Product" />
              <span className="ellipse">
                <svg viewBox="0 0 32 64" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 64C27.7977 64 23.6365 63.1723 19.7541 61.5641C15.8717 59.956 12.3441 57.5989 9.37258 54.6274C6.40111 51.6559 4.04401 48.1283 2.43586 44.2459C0.827705 40.3634 0 36.2023 0 32C0 27.7977 0.827705 23.6365 2.43586 19.7541C4.04401 15.8717 6.40111 12.3441 9.37259 9.37258C12.3441 6.40111 15.8717 4.044 19.7541 2.43585C23.6366 0.827704 27.7977 -3.67377e-07 32 0V3.2C28.2179 3.2 24.4729 3.94493 20.9787 5.39227C17.4845 6.8396 14.3097 8.961 11.6353 11.6353C8.961 14.3097 6.83961 17.4845 5.39227 20.9787C3.94493 24.4729 3.2 28.2179 3.2 32C3.2 35.7821 3.94493 39.5271 5.39227 43.0213C6.8396 46.5155 8.961 49.6903 11.6353 52.3647C14.3097 55.039 17.4845 57.1604 20.9787 58.6077C24.4729 60.0551 28.2179 60.8 32 60.8V64Z" />
                </svg>

              </span>
            </div>
            <p>Outstaffing</p>
          </label>

          <div className="tab">
            <div className="startup-content">
              You can employ our software experts to analyze all the pitfalls and hidden
              risks of your project. We offer you one free week of working with either
              a business analyst, a UX/UI designer or a solution architect depending on your need.
              Each expert can bring a unique insight into your project allowing you to start it
              on the right note. Learn more in this article:
              How to Start With Success or The Product Discovery Process.
            </div>
            <div className="exist-content">
              You can choose a QA expert who fits your outstaffing needs in the best way.
              For two weeks, the expert will be working on functional testing revealing
              the ways we can improve your software. After you receive the final QA report,
              you will be able to assess the value and continue working with the dedicated QA
              expert on a full-time or an hourly basis.
            </div>
          </div>
        </div>
        <div className="details-btn-holder">
          <div>
            <img src="/static/images/svg/arrow-down-3.svg" alt="details" />
            <a className="button" href="#project-stage-details" onClick={() => setShowDetails(!showDetails)}>View Details</a>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjectStageDetailsBlock = () => (
    <>
      <div id="project-stage-details" className={`project-stage-details ${showDetails ? 'show' : 'hide'}`}>
        <div className={`startup-details ${projectStage === 'startup' ? 'show' : 'hide'}`}>
          <h3>Free UX Discovery</h3>
          <PhotoListGallery
            title="Project Team:"
            data={teamData}
            name="team-list"
            direction="list-gallery"
          />

          <PhotoListGallery
            title="Fundamental Goals:"
            data={fundamentalGoals}
            name="fundamental-goal"
            direction="gallery-list"
          />
          <div className="ux-discovery-deliverables-container">
            <h5>UX Discovery Deliverables</h5>
            <GalleryWithMenu data={UXDiscoveryDeliverables} />
          </div>
        </div>
        <div className={`existing-project-details ${projectStage === 'existProject' ? 'show' : 'hide'}`}>
          <h3>Free Quality Assurance</h3>
          <PhotoListGallery
            title="We offer you:"
            data={weOfferYou}
            name="we-offer"
            direction="list-gallery"
            galleryClassName="no-top-margin"
          />

          <PhotoListGallery
            title="You receive:"
            data={youReceive}
            name="you-receive"
            direction="gallery-list"
            galleryClassName="no-top-margin"
          />
        </div>
      </div>
      <PhotoBlok
        photos={outsourcingImgs}
        headerText="Does the offer look good?"
        btnText="Let&#39;s talk"
      />
    </>
  );

  const addMinutes = () => {
    const year = moment(selectedDate).get('year');
    const month = moment(selectedDate).get('month') + 1;
    const date = moment(selectedDate).get('date');
    const hour = moment(selectedDate).get('hour');
    const minute = moment(selectedDate).get('minute');

    const startDate = moment(`${date}-${month}-${year} 9:00AM`, 'D/M/YYYY hh:mma');
    const endDate = moment(`${date}-${month}-${year} 6:00PM`, 'D/M/YYYY hh:mma');
    const selectDate = moment(`${date}-${month}-${year} ${hour}:${minute}`, 'D/M/YYYY hh:mma');
    let dates = [];

    while (startDate < endDate) {
      if (startDate >= selectDate) {
        dates.push({
          dateTime: startDate.format('YYYY-MM-DD HH:mm:ss'),
          value: startDate.format('hh:mm A'),
          label: startDate.format('hh:mm A'),
          isBooked: false,
        });
      }
      startDate.add(30, 'minute');
    }

    events.forEach(({ start, end }) => {
      let eventStartTime = new Date(start.dateTime);
      let eventEndTime = new Date(end.dateTime);

      eventStartTime = eventStartTime.getMinutes() < 30
        ? new Date(eventStartTime.setMinutes(0))
        : new Date(eventStartTime.setMinutes(30));

      if (eventEndTime.getMinutes() < 30 && eventEndTime.getMinutes() !== 0) {
        eventEndTime = new Date(eventEndTime.setMinutes(30));
      }
      if (eventEndTime.getMinutes() > 30) {
        eventEndTime = new Date(eventEndTime.setMinutes(60));
      }

      dates.forEach(({ dateTime, isBooked }, index) => {
        const timePeriod = new Date(dateTime);
        if (timePeriod >= eventEndTime || isBooked) return;

        dates[index].isBooked = eventStartTime <= timePeriod && timePeriod < eventEndTime;
      });
    });

    dates = dates.filter(({ isBooked }) => !isBooked).map(({ dateTime, value }) => {
      const timeByTimezone = moment(dateTime).add(timeDifference, 'm');
      return {
        value,
        dateTime: timeByTimezone.format('YYYY-MM-DD HH:mm:ss'),
        label: timeByTimezone.format('hh:mm A'),
      };
    });

    return dates;
  };

  const selectDate = async (date) => {
    setSelectedTime([]);
    setSelectedDate(date);
    const calendarEvents = await (await fetch('/api/free-busy',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedDate: date }),
      })).json();

    setEvents(calendarEvents);
  };

  const selectCountry = (selectedCountry) => {
    setSelectedTime([]);
    setCountry(selectedCountry);
    setTimeZoneDifference(`${selectedCountry.timeZone}`);
  };

  const renderLetsDiscussBlock = () => (
    <div id="lets-discuss" className="lets-discuss-block">
      <h3>Let&#39;s discuss you business idea</h3>
      <h5>A half hour talk with the CEO on how to support your project in the best possible way</h5>
      <div className="checkmark-steps">
        <div className={`checkmark ${meetingStep >= 1 ? 'active' : ''}`}>
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.1875L4.52 6L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="line" />
        <div className={`checkmark ${meetingStep >= 2 ? 'active' : ''}`}>
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.1875L4.52 6L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="line" />
        <div className={`checkmark ${meetingStep === 3 ? 'active' : ''}`}>
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.1875L4.52 6L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="lets-discuss-container">
        <div className="lets-discuss-content">
          <div className="circles-bg">
            <svg width="205" height="251" viewBox="0 0 205 251" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="162.312" cy="42.875" r="42.5" fill="#DE4F4F" />
              <circle cx="100" cy="151" r="99.5" stroke="#12233D" strokeDasharray="16 16" />
            </svg>
          </div>
          <div className={`left-content ${meetingStep === 3 ? 'hide-content' : 'show-content'}`}>
            <div className={`step-content ${meetingStep === 1 ? 'show' : 'hide'}`}>
              <div className="title">Choose date:</div>
              <Calendar
                defaultView="month"
                minDate={new Date()}
                value={selectedDate}
                onChange={(date) => { selectDate(date); }}
                navigationLabel={({
                  date, locale,
                }) => `${date.toLocaleDateString(locale, { month: 'long' })}`}
                tileDisabled={({ date }) => date.getDay() === 0 || date.getDay() === 6}
              />
              <div className="title">Choose time:</div>
              <Select
                id="countryList"
                classNamePrefix="country-list"
                options={countryList}
                className={`country-list ${showError && !country ? 'error' : ''}`}
                onChange={(value) => { selectCountry(value); }}
                value={country}
                isSearchable
                placeholder="Your Country"

              />

              <Select
                id="timeList"
                classNamePrefix="time-list"
                options={addMinutes()}
                className={`time-list ${showError && !selectedTime ? 'error' : ''}`}
                onChange={(time) => setSelectedTime(time)}
                value={selectedTime}
                isSearchable={false}
                placeholder="Select exact time for a call"
              />
            </div>
            <div className={`step-content ${meetingStep === 2 ? 'show' : 'hide'}`}>
              <div className="title">Your Info:</div>
              <input
                type="text"
                required
                name="name"
                value={name}
                placeholder="Name"
                minLength="2"
                maxLength="25"
                onChange={({ target: { value } }) => setName(value)}
                className={showError && !StringFormatValidation.validate({ min: 3, max: 25 }, name) ? 'error' : ''}
              />
              <input
                type="email"
                required
                name="email"
                value={email}
                placeholder="Email"
                maxLength="50"
                onChange={({ target: { value } }) => setEmail(value)}
                className={showError && !StringFormatValidation.validate({ type: 'email' }, email) ? 'error' : ''}
              />
              <div className={`phone-holder ${showError
                && !StringFormatValidation.validate({ min: 3, max: 10 }, phone) ? 'error' : ''}`}
              >
                {country && country.phoneCode
                  ? (
                    <span>
                      +
                      {country.phoneCode}
                    </span>
                  )
                  : ''}
                <input
                  type="number"
                  required
                  name="phone"
                  value={phone}
                  placeholder="Phone Number"
                  onChange={({ target: { value } }) => setPhone(value)}
                  minLength="2"
                  maxLength="10"
                />
              </div>

              <div className="title">Tell about your idea</div>
              <textarea name="idea" value={idea} onChange={({ target: { value } }) => setIdea(value)} />
            </div>
          </div>
          <div className={`right-content ${meetingStep === 3 ? 'center' : ''} ${idea ? '' : 'smal'}`}>
            <div className="step-content">
              {meetingStep === 3 && sendEmailResponse && sendEmailResponse.status
                ? (
                  <div className="mail-msg">{sendEmailResponse.status}</div>
                )
                : ''}
              <div className="title">Your meeting</div>
              <div className="meeting-content">
                <div>With:</div>
                <div className="with-content">
                  <img src="/static/images/referral-program/max-savonin.jpg" alt="Max Savonin" />
                  <div>
                    <div>Max Savonin</div>
                    <div>Chief Executive Officer at KeenEthics</div>
                  </div>
                </div>
                <div className="data-wrapper">
                  <div className="data-container">
                    <div className="data">
                      <span>Date:</span>
                      {selectedDate ? moment(selectedDate).format('dddd, MMMM D, YYYY') : ''}
                    </div>
                    <div className="data">
                      <span>Time:</span>
                      {selectedTime && selectedTime.label ? selectedTime.label : ''}
                    </div>
                    <div className="data">
                      <span>Your Country:</span>
                      {country && country.value ? country.value : ''}
                    </div>
                    <br />
                    {meetingStep === 1
                      ? ''
                      : (
                        <>
                          <div className="data">
                            <span>Your Name:</span>
                            {name}
                          </div>
                          <div className="data">
                            <span>Your phone:</span>
                            {phone && country && country.phoneCode ? `+${country.phoneCode}` : ''}
                            {phone}
                          </div>
                          <div className="data">
                            <span>Your email:</span>
                            {email}
                          </div>
                        </>
                      )}
                  </div>
                  {meetingStep === 3 && idea
                    ? (
                      <div className="data-container">
                        <div className="data">
                          <span>Your Idea:</span>
                          <br />
                          <div className="idea-container">
                            {idea}
                          </div>
                        </div>
                      </div>
                    )
                    : ''
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="next-btn-holder">
          {meetingStep > 1
            ? (
              <a className="button" role="presentation" onClick={() => setMeetingStep(meetingStep - 1)}>
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.00541 0C8.71712 0 8.48649 0.0864865 8.31351 0.259459L1.26487 7.26486C1.06306 7.4955 0.962163 7.74054 0.962163 8C0.962163 8.25946 1.06306 8.49009 1.26487 8.69189L8.31351 15.6973C8.51532 15.8991 8.74595 16 9.00541 16C9.26486 16 9.4955 15.8991 9.6973 15.6973C9.8991 15.4955 10 15.2649 10 15.0054C10 14.7459 9.8991 14.5153 9.6973 14.3135L3.38378 8L9.6973 1.68649C9.8991 1.48468 10 1.23964 10 0.951351C10 0.663063 9.90631 0.432432 9.71892 0.259459C9.53153 0.0864865 9.29369 0 9.00541 0Z" fill="#12233D" />
                </svg>
                Back
              </a>
            )
            : ''}
          {meetingStep === 3
            ? (
              <a role="presentation" className="button orange-btn" onClick={() => sendEmail()}>
                Confirn
              </a>
            )
            : (
              <a role="presentation" className="button orange-btn" onClick={() => validateForm()}>
                Next
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99459 4C8.28288 4 8.51351 4.08649 8.68649 4.25946L15.7351 11.2649C15.9369 11.4955 16.0378 11.7405 16.0378 12C16.0378 12.2595 15.9369 12.4901 15.7351 12.6919L8.68649 19.6973C8.48468 19.8991 8.25405 20 7.99459 20C7.73514 20 7.5045 19.8991 7.3027 19.6973C7.1009 19.4955 7 19.2649 7 19.0054C7 18.7459 7.1009 18.5153 7.3027 18.3135L13.6162 12L7.3027 5.68649C7.1009 5.48468 7 5.23964 7 4.95135C7 4.66306 7.09369 4.43243 7.28108 4.25946C7.46847 4.08649 7.70631 4 7.99459 4Z" fill="white" />
                </svg>
              </a>
            )}

        </div>
      </div>
    </div>
  );

  return (
    <Layout noMenu layoutClass="referral-layout-page">
      <a
        style={
          { opacity: showScrollBtn ? 1 : 0, transition: 'opacity .25s ease-in-out' }
        }
        href="#top"
        className="scroll-top-top"
      >
        <img src="/static/images/svg/scroll-to-top.svg" alt="scroll to top" />
      </a>
      <section className="page__wrapper page__referral-program content">
        {renderWelcomeBlock()}
        {renderProjectStageBlock()}
        {renderProjectStageDetailsBlock()}
        <Partners />
        {renderLetsDiscussBlock()}
      </section>
    </Layout>
  );
};


export default ReferralProgram;
