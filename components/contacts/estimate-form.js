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
    <div className="estimate-form form-container">
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
            <div className="question-title mb-0">
              <span className="question-number">1.</span>
              {' '}
Stage
            </div>
            <div className="estimate-input-cols">
              <div className="standard-radio-input">
                <div className="radiogroup">
                  <span>
                    <input
                      name="stage"
                      type="radio"
                      value="New project"
                      id="new"
                      onChange={(event) => {
                        setStage({
                          value: event.target.value,
                          error: '',
                        });
                      }}
                      checked={stage.value === 'New project'}
                    />
                    <label htmlFor="new" className="label-for-radio-btn">
                      <b className="font-bold d-block">New project</b>
                      {' '}
                      <span className="text-dimmed">to be built from scratch</span>
                    </label>
                  </span>
                  <span>
                    <input
                      name="stage"
                      type="radio"
                      value="Ongoing project"
                      id="existing"
                      onChange={(event) => {
                        setStage({
                          value: event.target.value,
                          error: '',
                        });
                      }}
                      checked={stage.value === 'Ongoing project'}
                    />
                    <label htmlFor="existing" className="label-for-radio-btn">
                      <b className="font-bold d-block">Ongoing project</b>
                      <span className="text-dimmed">continue development</span>
                    </label>
                  </span>
                  <span>
                    <input
                      name="stage"
                      type="radio"
                      value="Legacy project"
                      id="legacy"
                      onChange={(event) => {
                        setStage({
                          value: event.target.value,
                          error: '',
                        });
                      }}
                      checked={stage.value === 'Legacy project'}
                    />
                    <label htmlFor="legacy" className="label-for-radio-btn">
                      <b className="font-bold d-block">Legacy project</b>
                      <span className="text-dimmed">continue development</span>
                    </label>
                  </span>
                </div>
              </div>
            </div>
            <div className="question-title">
              <span className="question-number">2.</span>
              {' '}
              Services needed
            </div>
            <div className="estimate-input-cols">
              <p>Software Development</p>
              <div className="options-wrapper">
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
                    text="Mobile"
                    name="services"
                    id="mobile"
                    value="Mobile app"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('Mobile app')}
                  />
                </div>
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="PWA"
                    name="services"
                    id="pwa"
                    value="PWA"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('PWA')}
                  />
                </div>
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="AMP"
                    name="services"
                    id="amp"
                    value="AMP"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('AMP')}
                  />
                </div>
              </div>
              <p>Other Services</p>
              <div className="options-wrapper odd-options-number">
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="Team enhancement"
                    name="services"
                    id="еeam-enhancement"
                    value="Team enhancement"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('Team enhancement')}
                  />
                </div>
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="UX/UI design"
                    name="services"
                    id="ui-ux-design"
                    value="UX/UI design"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('UX/UI design')}
                  />
                </div>
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="MVP"
                    name="services"
                    id="mvp"
                    value="MVP"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('MVP')}
                  />
                </div>
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="PoC"
                    name="services"
                    id="poc"
                    value="PoC"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('PoC')}
                  />
                </div>
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="Tech support"
                    name="services"
                    id="tech-support"
                    value="Tech support"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('Tech support')}
                  />
                </div>
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="Tech consultancy"
                    name="services"
                    id="tech-consultancy"
                    value="Tech consultancy"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('Tech consultancy')}
                  />
                </div>
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="Chatbots"
                    name="services"
                    id="chatbots"
                    value="Chatbots"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('Chatbots')}
                  />
                </div>
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="Programmable voice"
                    name="services"
                    id="programmable-voice"
                    value="Programmable voice"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('Programmable voice')}
                  />
                </div>
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="IoT"
                    name="services"
                    id="iot"
                    value="IoT"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('IoT')}
                  />
                </div>
              </div>
            </div>
            <div className="wizard-stage-footer mt-auto">
              <button
                type="button"
                disabled={!stage.value || !services.value.length}
                className={`button no-shadow button-send${
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
              Project Management
            </div>
            <div className="estimate-input-cols">
              <p className="text-normal">
              Do you require either a product manager or a project manager, who will save your time by describing, assigning, and prioritizing tasks?
              </p>
              <div className="options-wrapper odd-options-number">
                <div className="input-radio-wrap">
                  <input
                    name="isPMrequired"
                    type="radio"
                    value="Yes, please"
                    id="iNeedPM"
                    onChange={(event) => {
                      setPm({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={pm.value === 'Yes, please'}
                  />
                  <label htmlFor="iNeedPM" className="label-for-radio-btn">
                Yes, please
                  </label>
                </div>
                <div className="input-radio-wrap">
                  <input
                    name="isPMrequired"
                    type="radio"
                    value="No, thank you"
                    id="iDontNeedPM"
                    onChange={(event) => {
                      setPm({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={pm.value === 'No, thank you'}
                  />
                  <label htmlFor="iDontNeedPM" className="label-for-radio-btn">
                No, thank you
                  </label>
                </div>
                <div className="input-radio-wrap">
                  <input
                    name="isPMrequired"
                    type="radio"
                    value="I am not sure"
                    id="notSureAboutPM"
                    onChange={(event) => {
                      setPm({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={pm.value === 'I am not sure'}
                  />
                  <label htmlFor="notSureAboutPM" className="label-for-radio-btn">
                I am not sure
                  </label>
                </div>
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
                  <option value="I am not sure">I am not sure</option>
                  <option value="Less than $10,000">Less than $10,000</option>
                  <option value="$10,000 - $45,000">$10,000 - $45,000</option>
                  <option value="More than $45,000">More than $45,000</option>
                </select>
              </div>
            </div>
            <div className="wizard-stage-footer mt-auto">
              <button
                onClick={wizardStageDecreaser}
                type="button"
                className="button no-shadow"
              >
                Back
              </button>
              <button
                type="button"
                className="button no-shadow button-send"
                onClick={wizardStageIncreaser}
              >
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
              <div className="options-wrapper odd-options-number">
                <div className="input-radio-wrap">
                  <input
                    name="timeframe"
                    type="radio"
                    value="I am not sure"
                    id="timeframeLessThanAMonth"
                    onChange={(event) => {
                      setTimeframe({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={timeframe.value === 'I am not sure'}
                  />
                  <label htmlFor="timeframeLessThanAMonth" className="label-for-radio-btn">
                  I am not sure
                  </label>
                </div>
                <div className="input-radio-wrap">
                  <input
                    name="timeframe"
                    type="radio"
                    value="Less than 1 month"
                    id="timeframeUpToThreeMonths"
                    onChange={(event) => {
                      setTimeframe({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={timeframe.value === 'Less than 1 month'}
                  />
                  <label htmlFor="timeframeUpToThreeMonths" className="label-for-radio-btn">
                  Less than 1 month
                  </label>
                </div>
                <div className="input-radio-wrap">
                  <input
                    name="timeframe"
                    type="radio"
                    value="1 to 3 months"
                    id="timeframeIsUpToSixMonths"
                    onChange={(event) => {
                      setTimeframe({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={timeframe.value === '1 to 3 months'}
                  />
                  <label htmlFor="timeframeIsUpToSixMonths" className="label-for-radio-btn">
                  1 to 3 months
                  </label>
                </div>
                <div className="input-radio-wrap">
                  <input
                    name="timeframe"
                    type="radio"
                    value="3 to 6 months"
                    id="timeframeIsAboveSixMonths"
                    onChange={(event) => {
                      setTimeframe({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={timeframe.value === '3 to 6 months'}
                  />
                  <label htmlFor="timeframeIsAboveSixMonths" className="label-for-radio-btn">
                  3 to 6 months
                  </label>
                </div>
                <div className="input-radio-wrap">
                  <input
                    name="timeframe"
                    type="radio"
                    value="Less than 6 months"
                    id="timeframeIsAboveSixMonths"
                    onChange={(event) => {
                      setTimeframe({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={timeframe.value === 'Less than 6 months'}
                  />
                  <label htmlFor="timeframeIsAboveSixMonths" className="label-for-radio-btn">
                  Less than 6 months
                  </label>
                </div>
              </div>
            </div>
            <div className="question-title">
              <span className="question-number">6.</span>
              {' '}
Start
            </div>
            <div className="estimate-input-cols">
              <div className="options-wrapper">
                <div className="input-radio-wrap">
                  <input
                    name="start"
                    type="radio"
                    value="I am not sure"
                    id="startNotSure"
                    onChange={(event) => {
                      setStart({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={start.value === 'I am not sure'}
                  />
                  <label htmlFor="startNotSure" className="label-for-radio-btn">
                  I am not sure
                  </label>
                </div>
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
                    value="More than a month"
                    id="startInMoreThanMonth"
                    onChange={(event) => {
                      setStart({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={start.value === 'More than a month'}
                  />
                  <label htmlFor="startInMoreThanMonth" className="label-for-radio-btn">
                  More than a month
                  </label>
                </div>
              </div>
            </div>
            <div className="wizard-stage-footer mt-auto">
              <button
                onClick={wizardStageDecreaser}
                type="button"
                className="button no-shadow"
              >
                Back
              </button>
              <button
                type="button"
                onClick={wizardStageIncreaser}
                className="button no-shadow button-send"
              >
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
                  className={classnames({
                    'message-textarea': true,
                    error: messageEstimate.error,
                  })}
                  name="messageEstimate"
                  id="messageEstimate"
                  onChange={event => setMessageEstimate({ value: event.target.value, error: false })
                  }
                  value={messageEstimate.value}
                  placeholder="Your message (optional)"
                />
              </div>
            </div>
            <div className="wizard-stage-footer mt-auto">
              <button
                onClick={wizardStageDecreaser}
                type="button"
                className="button no-shadow"
              >
                Back
              </button>
              <button
                type="submit"
                className={classnames('button no-shadow button-send', {
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
