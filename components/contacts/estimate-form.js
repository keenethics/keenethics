import 'whatwg-fetch';
import React, { useState, useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';

import Checkbox from '../form/checkbox';

import { ContactUsContext } from '../../pages/contacts';

const EstimateForm = () => {
  const [stage, setStage] = useState({
    value: null,
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
        emailEstimate,
        messageEstimate,
        name,
        phoneEstimate: { value: '123456789', error: '' },
      }),
    })
      .then(response => response.json())
      .then((json) => {
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
      <div className="progressbar-container">
        <ul className="progressbar">
          <li className={classnames({ done: wizardStage > 0, active: wizardStage === 0 })} />
          <li className={classnames({ done: wizardStage > 1, active: wizardStage === 1 })} />
          <li className={classnames({ done: wizardStage > 2, active: wizardStage === 2 })} />
          <li className={classnames({ done: wizardStage > 3, active: wizardStage === 3 })} />
        </ul>
      </div>
      <form onSubmit={onSubmit} className="estimate-form-inputs">
        {wizardStage === 0 && (
          <div className="wizard-stage">
            <div className="question-title">
              <span className="question-number">1.</span>
              {' '}
Stage
            </div>
            <div className="estimate-input-cols">
              <div className="standard-radio-input">
                <radiogroup>
                  <span>
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
                      <b className="font-bold d-block">New app</b>
                      {' '}
                      <span className="text-dimmed">to be built from scratch</span>
                    </label>
                  </span>
                  <span className="">
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
                      <b className="font-bold d-block">Existing app</b>
                      <span className="text-dimmed">continue development</span>
                    </label>
                  </span>
                </radiogroup>
              </div>
            </div>
            <div className="question-title">
              <span className="question-number">2.</span>
              {' '}
What services are you interested in?
            </div>
            <div className="estimate-input-cols">
              <p>Desktop applications</p>
              <div className="input-checkbox-wrap">
                <Checkbox
                  text="Web"
                  name="services"
                  id="web"
                  value="Web app"
                  onChange={handleServicesChange}
                  isChecked={services.value.includes('Web app')}
                />
              </div>
              <div className="input-checkbox-wrap">
                <Checkbox
                  text="Windows"
                  name="services"
                  id="windows"
                  value="Windows app"
                  onChange={handleServicesChange}
                  isChecked={services.value.includes('Windows app')}
                />
              </div>
              <div className="input-checkbox-wrap">
                <Checkbox
                  text="Linux"
                  name="services"
                  id="linux"
                  value="Linux app"
                  onChange={handleServicesChange}
                  isChecked={services.value.includes('Linux app')}
                />
              </div>
              <div className="input-checkbox-wrap">
                <Checkbox
                  text="MacOS"
                  name="services"
                  id="macos"
                  value="MacOS app"
                  onChange={handleServicesChange}
                  isChecked={services.value.includes('MacOS app')}
                />
              </div>

              <p>Mobile applications</p>
              <div className="input-checkbox-wrap">
                <Checkbox
                  text="IOS"
                  name="services"
                  id="ios"
                  value="IOS app"
                  onChange={handleServicesChange}
                  isChecked={services.value.includes('IOS app')}
                />
              </div>
              <div className="input-checkbox-wrap">
                <Checkbox
                  text="Android"
                  name="services"
                  id="android"
                  value="Android app"
                  onChange={handleServicesChange}
                  isChecked={services.value.includes('Android app')}
                />
              </div>

              <p>We also do</p>
              <div className="input-checkbox-wrap">
                <Checkbox
                  text="UI/UX Design"
                  name="services"
                  id="design"
                  value="Design"
                  onChange={handleServicesChange}
                  isChecked={services.value.includes('Design')}
                />
              </div>
              <div className="input-checkbox-wrap">
                <Checkbox
                  text="Server-Side Development"
                  name="services"
                  id="ssd"
                  value="Server-side development"
                  onChange={handleServicesChange}
                  isChecked={services.value.includes('Server-side development')}
                />
              </div>
              {/* <div className="input-checkbox-wrap">
                <Checkbox
                  text="QA testing"
                  name="services"
                  id="qa"
                  value="QA testing"
                  onChange={handleServicesChange}
                  isChecked={services.value.includes('QA testing')}
                />
              </div> */}
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
            <div className="wizard-stage-footer">
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
          </div>
        )}
        {wizardStage === 1 && (
          <div className="wizard-stage">
            <div className="question-title">
              <span className="question-number">3.</span>
              {' '}
Project Manager
            </div>
            <div className="estimate-input-cols">
              <p className="text-normal">
                Do you require PM/Product manager to save your time for tasks description, tasks
                assignment and tasks assignment prioritizing?
              </p>
              <div className="input-radio-wrap">
                <input
                  name="isPMrequired"
                  type="radio"
                  value="I need a PM"
                  id="iNeedPM"
                  onChange={(event) => {
                    setPm({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={pm.value === 'I need a PM'}
                />
                <label htmlFor="iNeedPM" className="label-for-radio-btn">
                  Yes, I do
                </label>
              </div>
              <div className="input-radio-wrap">
                <input
                  name="isPMrequired"
                  type="radio"
                  value="I dont need a PM"
                  id="iDontNeedPM"
                  onChange={(event) => {
                    setPm({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={pm.value === 'I dont need a PM'}
                />
                <label htmlFor="iDontNeedPM" className="label-for-radio-btn">
                  No, I dont
                </label>
              </div>
              <div className="input-radio-wrap">
                <input
                  name="isPMrequired"
                  type="radio"
                  value="I'm not sure about PM"
                  id="notSureAboutPM"
                  onChange={(event) => {
                    setPm({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={pm.value === "I'm not sure about PM"}
                />
                <label htmlFor="notSureAboutPM" className="label-for-radio-btn">
                  I'm not sure
                </label>
              </div>
            </div>
            <div className="question-title">
              <span className="question-number">4.</span>
              {' '}
Expected budget
            </div>
            <div className="estimate-input-cols mb-auto">
              <div className="input-select-wrap">
                <select
                  name="budget"
                  className="input-select"
                  onChange={event => setBudget({
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
            <div className="wizard-stage-footer">
              <button onClick={wizardStageDecreaser} type="button" className="button button-send">
                Back
              </button>
              <button type="button" className="button button-send" onClick={wizardStageIncreaser}>
                Continue
              </button>
            </div>
          </div>
        )}
        {wizardStage === 2 && (
          <div className="wizard-stage">
            <div className="question-title">
              <span className="question-number">5.</span>
              {' '}
Timeframe
            </div>
            <div className="estimate-input-cols">
              <div className="input-radio-wrap">
                <input
                  name="timeframe"
                  type="radio"
                  value="Less than 1 month"
                  id="timeframeLessThanAMonth"
                  onChange={(event) => {
                    setTimeframe({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={timeframe.value === 'Less than 1 month'}
                />
                <label htmlFor="timeframeLessThanAMonth" className="label-for-radio-btn">
                  Less than 1 month
                </label>
              </div>
              <div className="input-radio-wrap">
                <input
                  name="timeframe"
                  type="radio"
                  value="1 to 3 months"
                  id="timeframeUpToThreeMonths"
                  onChange={(event) => {
                    setTimeframe({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={timeframe.value === '1 to 3 months'}
                />
                <label htmlFor="timeframeUpToThreeMonths" className="label-for-radio-btn">
                  1 to 3 months
                </label>
              </div>
              <div className="input-radio-wrap">
                <input
                  name="timeframe"
                  type="radio"
                  value="3 to 6 months"
                  id="timeframeIsUpToSixMonths"
                  onChange={(event) => {
                    setTimeframe({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={timeframe.value === '3 to 6 months'}
                />
                <label htmlFor="timeframeIsUpToSixMonths" className="label-for-radio-btn">
                  3 to 6 months
                </label>
              </div>
              <div className="input-radio-wrap">
                <input
                  name="timeframe"
                  type="radio"
                  value="Above 6 months"
                  id="timeframeIsAboveSixMonths"
                  onChange={(event) => {
                    setTimeframe({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={timeframe.value === 'Above 6 months'}
                />
                <label htmlFor="timeframeIsAboveSixMonths" className="label-for-radio-btn">
                  Above 6 months
                </label>
              </div>
            </div>
            <div className="question-title">
              <span className="question-number">6.</span>
              {' '}
Start
            </div>
            <div className="estimate-input-cols">
              <div className="input-radio-wrap">
                <input
                  name="start"
                  type="radio"
                  value="In a couple of days"
                  id="startInACoupleOfDays"
                  onChange={(event) => {
                    setStart({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={start.value === 'In a couple of days'}
                />
                <label htmlFor="startInACoupleOfDays" className="label-for-radio-btn">
                  In a couple of days
                </label>
              </div>
              <div className="input-radio-wrap">
                <input
                  name="start"
                  type="radio"
                  value="In a week"
                  id="startInAWeek"
                  onChange={(event) => {
                    setStart({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={start.value === 'In a week'}
                />
                <label htmlFor="startInAWeek" className="label-for-radio-btn">
                  In a week
                </label>
              </div>
              <div className="input-radio-wrap">
                <input
                  name="start"
                  type="radio"
                  value="In a couple of weeks"
                  id="startInACoupleOfWeeks"
                  onChange={(event) => {
                    setStart({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={start.value === 'In a couple of weeks'}
                />
                <label htmlFor="startInACoupleOfWeeks" className="label-for-radio-btn">
                  In a couple of weeks
                </label>
              </div>
              <div className="input-radio-wrap">
                <input
                  name="start"
                  type="radio"
                  value="In a month"
                  id="startInAMonth"
                  onChange={(event) => {
                    setStart({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={start.value === 'In a month'}
                />
                <label htmlFor="startInAMonth" className="label-for-radio-btn">
                  In a month
                </label>
              </div>
              <div className="input-radio-wrap">
                <input
                  name="start"
                  type="radio"
                  value="In a couple of months"
                  id="startInACoupleOfMonths"
                  onChange={(event) => {
                    setStart({
                      value: event.target.value,
                      error: '',
                    });
                  }}
                  checked={start.value === 'In a couple of months'}
                />
                <label htmlFor="startInACoupleOfMonths" className="label-for-radio-btn">
                  In a couple of months
                </label>
              </div>
            </div>
            <div className="wizard-stage-footer">
              <button onClick={wizardStageDecreaser} type="button" className="button button-send">
                Back
              </button>
              <button type="button" onClick={wizardStageIncreaser} className="button button-send">
                Continue
              </button>
            </div>
          </div>
        )}
        {wizardStage === 3 && (
          <div className="wizard-stage">
            <div className="contacts-form">
              <div className="input-cols">
                <div className="input-wrap">
                  <div className="input-email">
                    <div className="mt-40" />
                    <input
                      className={classnames({ error: name.error })}
                      name="name"
                      id="name"
                      type="text"
                      onChange={event => setName({ value: event.target.value, error: false })}
                      value={name.value}
                      required
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                </div>
              </div>
              <div className="input-cols">
                <div className="input-wrap">
                  <div className="input-email">
                    <input
                      className={classnames({ error: emailEstimate.error })}
                      name="emailEstimate"
                      id="emailEstimate"
                      type="email"
                      onChange={event => setEmailEstimate({ value: event.target.value, error: false })
                      }
                      value={emailEstimate.value}
                      required
                    />
                    <label htmlFor="emailEstimate">Email</label>
                  </div>
                </div>
              </div>

              <div className="input-wrap input-wrap-ta">
                <textarea
                  required
                  className={classnames({
                    'message-textarea': true,
                    error: messageEstimate.error,
                  })}
                  name="messageEstimate"
                  id="messageEstimate"
                  onChange={event => setMessageEstimate({ value: event.target.value, error: false })
                  }
                  value={messageEstimate.value}
                  placeholder="Message"
                />
              </div>
            </div>
            <div className="wizard-stage-footer">
              <button onClick={wizardStageDecreaser} type="button" className="button button-send">
                Back
              </button>
              <button
                type="submit"
                className={classnames('button button-send', {
                  pending:
                    !name.value || !messageEstimate.value || !emailEstimate.value || isPending,
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
