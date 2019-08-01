import 'whatwg-fetch';
import React, { useState, useContext, useEffect } from 'react';
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
    value: [],
    error: false,
  });
  const [pm, setPm] = useState({
    value: null,
    error: false,
  });
  const [budget, setBudget] = useState({
    value: '',
    error: false,
  });
  const [timeframe, setTimeframe] = useState({
    value: '',
    error: false,
  });
  const [start, setStart] = useState({
    value: '',
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

  const [wizardStage, setWizardStage] = useState(0);

  const {
    isPending,
    setIsPending,
    setNotifyMessage,
    setStatus,
    setNotifyIsVisible,
    setWishlist,
  } = useContext(ContactUsContext);

  useEffect(() => {
    setWishlist(
      [stage.value, ...services.value, pm.value, budget.value, timeframe.value, start.value].filter(
        item => !!item,
      ),
    );
  }, [stage.value, services.value, pm.value, budget.value, timeframe.value, start.value]);

  function onSubmit(e) {
    e.preventDefault();

    setIsPending(true);

    fetch('/estimate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        stage,
        services,
        pm,
        budget,
        timeframe,
        start,
        phoneEstimate,
        emailEstimate,
        messageEstimate,
        name,
        setWishlist,
      }),
    })
      .then(response => response.json())
      .then(json => {
        if (json && json.errorField) {
          setNotifyMessage(json.status.toString());
        }

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

  function wizardStageIncreaser() {
    setWizardStage(wizardStage + 1);
  }
  function wizardStageDecreaser() {
    setWizardStage(wizardStage - 1);
  }

  return (
    <div className="estimate-form">
      <div class="progressbar-container">
        <ul class="progressbar">
          <li className={classnames({ done: wizardStage > 0, active: wizardStage === 0 })} />
          <li className={classnames({ done: wizardStage > 1, active: wizardStage === 1 })} />
          <li className={classnames({ done: wizardStage > 2, active: wizardStage === 2 })} />
          <li className={classnames({ done: wizardStage > 3, active: wizardStage === 3 })} />
        </ul>
      </div>
      <form onSubmit={onSubmit} className="estimate-form-inputs">
        <div className="contacts-title estimate-title">let us Estimate your project</div>
        {wizardStage === 0 && (
          <div className="wizard-stage">
            <div className="question-title">
              <span className="question-number">01</span> Stage
            </div>
            <div className="estimate-input-cols">
              <div className="input-radio-wrap">
                <input
                  name="stage"
                  type="radio"
                  value="New app"
                  id="new"
                  onChange={event => {
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
                  onChange={event => {
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
              <span className="question-number">02</span> What services are you interested in?
            </div>
            <div className="estimate-input-cols">
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
            <button
              type="button"
              disabled={!stage.value || !services.value.length}
              className={`button button-send${
                !stage.value || !services.value.length ? ' pending' : ''
              }`}
              onClick={wizardStageIncreaser}
            >
              Continue
            </button>
          </div>
        )}
        {wizardStage === 1 && (
          <div className="wizard-stage">
            <div className="question-title align-flex-start">
              <span className="question-number qn-check">03</span>
              <div className="input-radio-wrap">
                <input
                  name="isPMrequired"
                  type="radio"
                  value="I need a PM"
                  id="iNeedPM"
                  onChange={event => {
                    setPm({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={pm.value === 'I need a PM'}
                />
                <label htmlFor="iNeedPM" className="label-for-radio-btn">
                  <p className="radio-lable-title">Yes, I do</p>
                </label>
              </div>
              <div className="input-radio-wrap">
                <input
                  name="isPMrequired"
                  type="radio"
                  value="I dont need a PM"
                  id="iDontNeedPM"
                  onChange={event => {
                    setPm({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={pm.value === 'I dont need a PM'}
                />
                <label htmlFor="iDontNeedPM" className="label-for-radio-btn">
                  <p className="radio-lable-title">No, I dont</p>
                </label>
              </div>
              <div className="input-radio-wrap">
                <input
                  name="isPMrequired"
                  type="radio"
                  value="I'm not sure about PM"
                  id="notSureAboutPM"
                  onChange={event => {
                    setPm({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={pm.value === "I'm not sure about PM"}
                />
                <label htmlFor="notSureAboutPM" className="label-for-radio-btn">
                  <p className="radio-lable-title">I'm not sure</p>
                </label>
              </div>
            </div>
            <div className="question-title">
              <span className="question-number">04</span> Expected budget
            </div>
            <div className="estimate-input-cols">
              <div className="input-select-wrap">
                <select
                  name="budget"
                  className="input-select"
                  onChange={event =>
                    setBudget({
                      value: event.target.value,
                      error: '',
                    })
                  }
                  value={budget.value}
                >
                  <option value="">Choose your budget</option>
                  <option value="Under $10000">Under $10000</option>
                  <option value="$10000-$30000">$10000-$30000</option>
                  <option value="$30000 and above">$30000 and above</option>
                </select>
              </div>
            </div>
            <button onClick={wizardStageDecreaser} type="button" className="button button-send">
              Back
            </button>
            <button
              type="button"
              disabled={!pm.value || !budget.value}
              className={`button button-send${!pm.value || !budget.value ? ' pending' : ''}`}
              onClick={wizardStageIncreaser}
            >
              Continue
            </button>
          </div>
        )}
        {wizardStage === 2 && (
          <div className="wizard-stage">
            <div className="question-title">
              <span className="question-number">05</span> Timeframe
            </div>
            <div className="estimate-input-cols">
              <div className="input-radio-wrap">
                <input
                  name="timeframe"
                  type="radio"
                  value="Less than 1 month"
                  id="timeframeLessThanAMonth"
                  onChange={event => {
                    setTimeframe({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={timeframe.value === 'Less than 1 month'}
                />
                <label htmlFor="timeframeLessThanAMonth" className="label-for-radio-btn">
                  <p className="radio-lable-title">Less than 1 month</p>
                </label>
              </div>
              <div className="input-radio-wrap">
                <input
                  name="timeframe"
                  type="radio"
                  value="1 to 3 months"
                  id="timeframeUpToThreeMonths"
                  onChange={event => {
                    setTimeframe({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={timeframe.value === '1 to 3 months'}
                />
                <label htmlFor="timeframeUpToThreeMonths" className="label-for-radio-btn">
                  <p className="radio-lable-title">1 to 3 months</p>
                </label>
              </div>
              <div className="input-radio-wrap">
                <input
                  name="timeframe"
                  type="radio"
                  value="3 to 6 months"
                  id="timeframeIsUpToSixMonths"
                  onChange={event => {
                    setTimeframe({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={timeframe.value === '3 to 6 months'}
                />
                <label htmlFor="timeframeIsUpToSixMonths" className="label-for-radio-btn">
                  <p className="radio-lable-title">3 to 6 months</p>
                </label>
              </div>
              <div className="input-radio-wrap">
                <input
                  name="timeframe"
                  type="radio"
                  value="Above 6 months"
                  id="timeframeIsAboveSixMonths"
                  onChange={event => {
                    setTimeframe({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={timeframe.value === 'Above 6 months'}
                />
                <label htmlFor="timeframeIsAboveSixMonths" className="label-for-radio-btn">
                  <p className="radio-lable-title">Above 6 months</p>
                </label>
              </div>
            </div>
            <div className="question-title">
              <span className="question-number">06</span> Start
            </div>
            <div className="estimate-input-cols">
              <div className="input-radio-wrap">
                <input
                  name="start"
                  type="radio"
                  value="In a couple of days"
                  id="startInACoupleOfDays"
                  onChange={event => {
                    setStart({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={start.value === 'In a couple of days'}
                />
                <label htmlFor="startInACoupleOfDays" className="label-for-radio-btn">
                  <p className="radio-lable-title">In a couple of days</p>
                </label>
              </div>
              <div className="input-radio-wrap">
                <input
                  name="start"
                  type="radio"
                  value="In a week"
                  id="startInAWeek"
                  onChange={event => {
                    setStart({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={start.value === 'In a week'}
                />
                <label htmlFor="startInAWeek" className="label-for-radio-btn">
                  <p className="radio-lable-title">In a week</p>
                </label>
              </div>
              <div className="input-radio-wrap">
                <input
                  name="start"
                  type="radio"
                  value="In a couple of weeks"
                  id="startInACoupleOfWeeks"
                  onChange={event => {
                    setStart({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={start.value === 'In a couple of weeks'}
                />
                <label htmlFor="startInACoupleOfWeeks" className="label-for-radio-btn">
                  <p className="radio-lable-title">In a couple of weeks</p>
                </label>
              </div>
              <div className="input-radio-wrap">
                <input
                  name="start"
                  type="radio"
                  value="In a month"
                  id="startInAMonth"
                  onChange={event => {
                    setStart({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={start.value === 'In a month'}
                />
                <label htmlFor="startInAMonth" className="label-for-radio-btn">
                  <p className="radio-lable-title">In a month</p>
                </label>
              </div>
              <div className="input-radio-wrap">
                <input
                  name="start"
                  type="radio"
                  value="In a couple of months"
                  id="startInACoupleOfMonths"
                  onChange={event => {
                    setStart({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={start.value === 'In a couple of months'}
                />
                <label htmlFor="startInACoupleOfMonths" className="label-for-radio-btn">
                  <p className="radio-lable-title">In a couple of months</p>
                </label>
              </div>
            </div>
            <button onClick={wizardStageDecreaser} type="button" className="button button-send">
              Back
            </button>
            <button
              disabled={!timeframe.value || !start.value}
              onClick={wizardStageIncreaser}
              className={`button button-send${!timeframe.value || !start.value ? ' pending' : ''}`}
            >
              Continue
            </button>
          </div>
        )}
        {wizardStage === 3 && (
          <div className="wizard-stage">
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
                  onChange={event =>
                    setMessageEstimate({ value: event.target.value, error: false })
                  }
                  value={messageEstimate.value}
                />
              </div>
            </div>
            <div className="submit-btn">
              <button onClick={wizardStageDecreaser} type="button" className="button button-send">
                Back
              </button>
              <button
                type="submit"
                className={classnames('button button-send', {
                  pending:
                    !name.value ||
                    !phoneEstimate.value ||
                    !messageEstimate.value ||
                    !emailEstimate.value ||
                    isPending,
                })}
              >
                send
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default EstimateForm;
