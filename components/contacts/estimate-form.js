/* global fetch */

import 'whatwg-fetch';
import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';

import Checkbox from '../form/checkbox';

import { ContactUsContext } from '../../pages/contacts';

const EstimateForm = () => {
  const [stage, setStage] = useState({
    value: 'New app',
    error: false,
  });
  const [services, setServices] = useState({
    value: ['Web app'],
    error: false,
  });
  const [pm, setPm] = useState({
    value: 'no',
    error: false,
  });
  const [budget, setBudget] = useState({
    value: 'I`m not sure',
    error: false,
  });
  const [timeframe, setTimeframe] = useState({
    value: 'I`m not sure',
    error: false,
  });
  const [start, setStart] = useState({
    value: 'ASAP',
    error: false,
  });
  const [phoneEstimate, setPhoneEstimate] = useState({
    value: '',
    error: false,
  });
  const [emailEstimate, setEmailEstimate] = useState({
    value: '',
    error: false,
  });
  const [messageEstimate, setMessageEstimate] = useState({
    value: '',
    error: false,
  });
  const [name, setName] = useState({
    value: '',
    error: false,
  });

  const {
    isPending,
    status,
    setIsPending,
    setNotifyMessage,
    setStatus,
    setNotifyIsVisible,
  } = useContext(ContactUsContext);

  function onSubmit(e) {
    e.preventDefault();
    // const { updateState } = this.props;

    setIsPending(true);

    fetch('/estimate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(response => response.json())
      .then((json) => {
        if (json && json.errorField) {
          setNotifyMessage(json.status.toString());
        }

        // this.setState(json.errorField);

        setIsPending(false);
        setStatus(json.status.toString());
        setNotifyIsVisible(true);

        if (json.status.toString() === 'Message sent') {
          // setInitialState();
        }
      });
  }

  function handleServicesChange(event) {
    if (event.target.checked) {
      setServices({ value: [...services.value, event.target.value], error: false });
      return;
    }

    setServices({
      value: services.value.filter(item => item !== event.target.value),
      error: false,
    });
  }

  function handlePmRequirementChange(event) {
    if (event.target.checked) {
      setPm({ value: event.target.value, error: false });
      return;
    }

    setPm({
      value: 'no',
      error: false,
    });
  }

  return (
    <div className="estimate-form">
      <form onSubmit={onSubmit} className="estimate-form-inputs">
        <div className="contacts-title estimate-title">let us Estimate your project</div>
        <div className="question-title">
          <span className="question-number">01</span>
          {' '}
Stage
        </div>
        <div className="estimate-input-cols">
          <div className="input-radio-wrap">
            <input
              name="stage"
              type="radio"
              value="New app"
              id="new"
              onChange={(event) => {
                setStage({
                  value: event.target.value,
                  error: '',
                });
              }}
              checked={stage.value === 'New app'}
            />
            <label htmlFor="new" className="label-for-radio-btn">
              <p className="radio-lable-title">New app</p>
              to be built from scratch
            </label>
          </div>
          <div className="input-radio-wrap">
            <input
              name="stage"
              type="radio"
              value="Existing app"
              id="existing"
              onChange={(event) => {
                setStage({
                  value: event.target.value,
                  error: '',
                });
              }}
              checked={stage.value === 'Existing app'}
            />
            <label htmlFor="existing" className="label-for-radio-btn">
              <p className="radio-lable-title">Existing app</p>
              continue development
            </label>
          </div>
        </div>
        <div className="question-title">
          <span className="question-number">02</span>
          {' '}
What services are you interested in?
        </div>
        <div className="estimate-input-cols here">
          <div className="input-checkbox-wrap">
            <Checkbox
              text="Web app"
              name="services"
              id="web"
              value="Web app"
              onChange={handleServicesChange}
              isChecked={services.value.includes('Web app')}
            />
          </div>
          <div className="input-checkbox-wrap">
            <Checkbox
              text="IOS app"
              name="services"
              id="ios"
              value="IOS app"
              onChange={handleServicesChange}
              isChecked={services.value.includes('IOS app')}
            />
          </div>
          <div className="input-checkbox-wrap">
            <Checkbox
              text="Linux app"
              name="services"
              id="linux"
              value="Linux app"
              onChange={handleServicesChange}
              isChecked={services.value.includes('Linux app')}
            />
          </div>
          <div className="input-checkbox-wrap">
            <Checkbox
              text="Server-side development"
              name="services"
              id="ssd"
              value="Server-side development"
              onChange={handleServicesChange}
              isChecked={services.value.includes('Server-side development')}
            />
          </div>
          <div className="input-checkbox-wrap">
            <Checkbox
              text="Windows app"
              name="services"
              id="windows"
              value="Windows app"
              onChange={handleServicesChange}
              isChecked={services.value.includes('Windows app')}
            />
          </div>
          <div className="input-checkbox-wrap">
            <Checkbox
              text="QA testing"
              name="services"
              id="qa"
              value="QA testing"
              onChange={handleServicesChange}
              isChecked={services.value.includes('QA testing')}
            />
          </div>
          <div className="input-checkbox-wrap">
            <Checkbox
              text="Android app"
              name="services"
              id="android"
              value="Android app"
              onChange={handleServicesChange}
              isChecked={services.value.includes('Android app')}
            />
          </div>
          <div className="input-checkbox-wrap">
            <Checkbox
              text="MacOS app"
              name="services"
              id="macos"
              value="MacOS app"
              onChange={handleServicesChange}
              isChecked={services.value.includes('MacOS app')}
            />
          </div>
          <div className="input-checkbox-wrap">
            <Checkbox
              text="Design"
              name="services"
              id="design"
              value="Design"
              onChange={handleServicesChange}
              isChecked={services.value.includes('Design')}
            />
          </div>
          <div className="input-checkbox-wrap">
            <Checkbox
              text="Other"
              name="services"
              id="other"
              value="Other"
              onChange={handleServicesChange}
              isChecked={services.value.includes('Other')}
            />
          </div>
        </div>
        <div className="question-title align-flex-start">
          <span className="question-number qn-check">03</span>
          <Checkbox
            text="Do you require PM/Product manager to save your time for tasks description,
              tasks assignment and tasks assignment prioritizing?"
            name="services"
            id="pm"
            value="PM/Product manager is required"
            onChange={handlePmRequirementChange}
            isChecked={pm.value === 'PM/Product manager is required'}
          />
        </div>
        <div className="question-title">
          <span className="question-number">04</span>
          {' '}
Expected budget
        </div>
        <div className="estimate-input-cols">
          <div className="input-select-wrap">
            <select
              name="budget"
              className="input-select"
              onChange={event => setBudget(event.target.value)}
              value={budget.value}
            >
              <option value="I`m not sure">I`m not sure</option>
              <option value="Under $10000">Under $10000</option>
              <option value="$10000-$30000">$10000-$30000</option>
              <option value="$30000 and above">$30000 and above</option>
            </select>
          </div>
        </div>
        <div className="question-title">
          <span className="question-number">05</span>
          {' '}
Timeframe
        </div>
        <div className="estimate-input-cols">
          <div className="input-select-wrap">
            <select
              name="timeframe"
              className="input-select"
              onChange={event => setTimeframe(event.target.value)}
              value={timeframe.value}
            >
              <option value="I`m not sure">I`m not sure</option>
              <option value="Less than 1 month">Less than 1 month</option>
              <option value="1 to 3 months">1 to 3 months</option>
              <option value="3 to 6 months">3 to 6 months</option>
              <option value="Above 6 months">Above 6 months</option>
            </select>
          </div>
        </div>
        <div className="question-title">
          <span className="question-number">06</span>
          {' '}
Start
        </div>
        <div className="estimate-input-cols">
          <div className="input-select-wrap">
            <select
              name="start"
              className="input-select"
              value={start}
              onChange={event => setStart(event.target.value)}
            >
              <option value="ASAP">ASAP</option>
              <option value="in a couple of days">in a couple of days</option>
              <option value="in a week">in a week</option>
              <option value="in a couple of weeks">in a couple of weeks</option>
              <option value="in a month or later">in a month or later</option>
            </select>
          </div>
        </div>
        <div className="input-cols">
          <div className="input-contacts">
            <input
              className={classnames({ error: name.error })}
              name="name"
              id="name"
              type="text"
              onChange={event => setName({ value: event.target.value, error: false })}
              value={name.value}
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label htmlFor="name">Name:</label>
          </div>
          <div className="input-contacts">
            <input
              name="phoneEstimate"
              id="phoneEstimate"
              type="tel"
              onChange={event => setPhoneEstimate({ value: event.target.value, error: false })}
              value={phoneEstimate.value}
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label htmlFor="phoneEstimate">Phone:</label>
          </div>
        </div>
        <div className="input-cols">
          <div className="input-contacts input-email">
            <input
              className={classnames({ error: emailEstimate.error })}
              name="emailEstimate"
              type="email"
              onChange={event => setEmailEstimate({ value: event.target.value, error: false })}
              value={emailEstimate.value}
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label htmlFor="emailEstimate">Email:</label>
          </div>
        </div>
        <div className="input-cols">
          <div className="input-textarea">
            <div className="input-textarea-title">Message:</div>
            <textarea
              name="messageEstimate"
              placeholder="Write short description of your project or tell us your questions. Feel free to leave this blank and submit now - we will contact you and guide you through the process."
              onChange={event => setMessageEstimate({ value: event.target.value, error: false })}
              value={messageEstimate.value}
            />
          </div>
        </div>
        <div className="submit-btn">
          <button
            type="submit"
            className={classnames('button button-send', { pending: isPending })}
          >
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default EstimateForm;
