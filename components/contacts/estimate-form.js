import React, { useState, useContext, useEffect } from 'react';
import ReactGA from 'react-ga';
import * as Sentry from '@sentry/browser';
import classnames from 'classnames';
import Checkbox from '../form/checkbox';
import { ContactUsContext } from '../context/contacts-context';

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
    value: '',
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
  const [isSubscriber, setIsSubscriber] = useState(false);
  const [hasDiscount, setHasDiscount] = useState(false);
  const [wizardStage, setWizardStage] = useState(0);

  const {
    isPending,
    setIsPending,
    setNotifyMessage,
    setStatus,
    setWishlist,
    selectedCountry,
    file,
    setFile,
  } = useContext(ContactUsContext);

  useEffect(() => {
    setWishlist(
      [
        stage.value,
        ...services.value,
        pm.value,
        budget.value,
        timeframe.value,
        start.value,
      ].filter((item) => !!item),
    );
  }, [
    stage.value,
    services.value,
    pm.value,
    budget.value,
    timeframe.value,
    start.value,
  ]);

  function onSubmit(e) {
    e.preventDefault();

    ReactGA.ga(
      'send',
      'event',
      'Leadgen',
      'submit',
      emailEstimate.value,
    );
    setIsPending(true);

    Sentry.setTag('email', emailEstimate.value);
    Sentry.setTag('firsName', name.value);
    Sentry.captureEvent({
      message: 'Contact us',
      level: 'info',
      extra: {
        leadMessage: messageEstimate.value,
      },
    });

    const formData = new FormData();
    formData.append('file', file);
    formData.append('data', JSON.stringify({
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
      isSubscriber,
      hasDiscount,
      selectedCountry,
    }));

    fetch('/estimate', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((json) => {
        if (json && json.errorField) {
          setNotifyMessage(json.status.toString());
          if (json.errorField === 'name') setName(json);
          if (json.errorField === 'email') setEmailEstimate(json);
          if (json.errorField === 'message') setMessageEstimate(json);
          if (json.errorField === 'file') setFile(json);
        }

        setIsPending(false);
        setStatus(json.status.toString());

        if (json.status.toString() === 'Message sent') {
          // setInitialState();
        }
      }).catch((err) => Sentry.captureException(err));
  }

  function handleServicesChange(event) {
    if (event.target.checked) {
      setServices({
        value: [...services.value, event.target.value],
        error: false,
      });
      return;
    }

    setServices({
      value: services.value.filter((item) => item !== event.target.value),
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
          <li
            className={classnames({
              done: wizardStage > 0,
              active: wizardStage === 0,
            })}
          />
          <li
            className={classnames({
              done: wizardStage > 1,
              active: wizardStage === 1,
            })}
          />
          <li
            className={classnames({
              done: wizardStage > 2,
              active: wizardStage === 2,
            })}
          />
          <li
            className={classnames({
              done: wizardStage > 3,
              active: wizardStage === 3,
            })}
          />
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
                      <span className="text-dimmed">
                        to be built from scratch
                      </span>
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
                      <span className="text-dimmed">to continue development</span>
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
                      <span className="text-dimmed">to continue development</span>
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
              <div className="options-wrapper">
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="Web development"
                    name="services"
                    id="web"
                    value="Web development"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('Web development')}
                  />
                </div>
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="Mobile development"
                    name="services"
                    id="mobile"
                    value="Mobile development"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('Mobile development')}
                  />
                </div>
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="Dedicated development team"
                    name="services"
                    id="ddt"
                    value="Dedicated development team"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('Dedicated development team')}
                  />
                </div>
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="Cloud"
                    name="services"
                    id="cloud"
                    value="Cloud"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('Cloud')}
                  />
                </div>
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="Chatbots and AI"
                    name="services"
                    id="chatbots-ai"
                    value="Chatbots and AI"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('Chatbots and AI')}
                  />
                </div>
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="Internet of things"
                    name="services"
                    id="iot"
                    value="Internet of things"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('Internet of things')}
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
              <p>Development stages needed</p>
              <div className="options-wrapper odd-options-number">
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="Business analysis"
                    name="services"
                    id="business-analysis"
                    value="Business analysis"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('Business analysis')}
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
                    text="Development and testing"
                    name="services"
                    id="development-and-testing"
                    value="Development and testing"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('Development and testing')}
                  />
                </div>
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="Software deployment"
                    name="services"
                    id="software-deployment"
                    value="Software deployment"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('Software deployment')}
                  />
                </div>
                <div className="input-checkbox-wrap">
                  <Checkbox
                    text="Maintenance and support"
                    name="services"
                    id="maintenance-and-support"
                    value="Maintenance and support"
                    onChange={handleServicesChange}
                    isChecked={services.value.includes('Maintenance and support')}
                  />
                </div>
              </div>
            </div>
            <div className="wizard-stage-footer mt-auto">
              <button
                type="button"
                disabled={!stage.value || !services.value.length}
                className={`button button-send${
                  !stage.value || !services.value.length ? ' no-shadow pending' : ''
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
              Project management
            </div>
            <div className="estimate-input-cols">
              <p className="text-normal text-label">
                Do you require a product manager or a project manager,
                who will save your time by describing, assigning, and prioritizing tasks?
              </p>
              <div className="options-wrapper odd-options-number">
                <div className="input-radio-wrap">
                  <input
                    name="isPMrequired"
                    type="radio"
                    value="Yes, I need project management"
                    id="iNeedPM"
                    onChange={(event) => {
                      setPm({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={pm.value === 'Yes, I need project management'}
                  />
                  <label htmlFor="iNeedPM" className="label-for-radio-btn">
                    Yes, I need project management
                  </label>
                </div>
                <div className="input-radio-wrap">
                  <input
                    name="isPMrequired"
                    type="radio"
                    value="No, I do not need project management"
                    id="iDontNeedPM"
                    onChange={(event) => {
                      setPm({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={pm.value === 'No, I do not need project management'}
                  />
                  <label htmlFor="iDontNeedPM" className="label-for-radio-btn">
                    No, I do not need project management
                  </label>
                </div>
                <div className="input-radio-wrap">
                  <input
                    name="isPMrequired"
                    type="radio"
                    value="I am not sure about project management"
                    id="notSureAboutPM"
                    onChange={(event) => {
                      setPm({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={pm.value === 'I am not sure about project management'}
                  />
                  <label
                    htmlFor="notSureAboutPM"
                    className="label-for-radio-btn"
                  >
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
            <div className="estimate-input-cols">
              <div className="options-wrapper odd-options-number">
                <div className="input-radio-wrap">
                  <input
                    name="budget"
                    type="radio"
                    value="Less than $10,000"
                    id="budgetLtTen"
                    onChange={(event) => {
                      setBudget({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={budget.value === 'Less than $10,000'}
                  />
                  <label htmlFor="budgetLtTen" className="label-for-radio-btn">
                    Less than $10,000
                  </label>
                </div>
                <div className="input-radio-wrap">
                  <input
                    name="budget"
                    type="radio"
                    value="$10,000 - $45,000"
                    id="tenToForty"
                    onChange={(event) => {
                      setBudget({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={budget.value === '$10,000 - $45,000'}
                  />
                  <label htmlFor="tenToForty" className="label-for-radio-btn">
                    $10,000 - $45,000
                  </label>
                </div>
                <div className="input-radio-wrap">
                  <input
                    name="budget"
                    type="radio"
                    value="More than $45,000"
                    id="budgetMoreThen"
                    onChange={(event) => {
                      setBudget({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={budget.value === 'More than $45,000'}
                  />
                  <label htmlFor="budgetMoreThen" className="label-for-radio-btn">
                    More than $45,000
                  </label>
                </div>
                <div className="input-radio-wrap">
                  <input
                    name="budget"
                    type="radio"
                    value="I am not sure about the expected budget"
                    id="budgetNotSure"
                    onChange={(event) => {
                      setBudget({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={budget.value === 'I am not sure about the expected budget'}
                  />
                  <label htmlFor="budgetNotSure" className="label-for-radio-btn">
                    I am not sure
                  </label>
                </div>
              </div>
            </div>
            <div className="wizard-stage-footer mt-auto">
              <button
                onClick={wizardStageDecreaser}
                type="button"
                className="button no-shadow text-uppercase btn-wide"
              >
                Back
              </button>
              <button
                type="button"
                className="button button-send btn-wide"
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
                    value="I am not sure about the timeframe"
                    id="timeframeLessThanAMonth"
                    onChange={(event) => {
                      setTimeframe({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={timeframe.value === 'I am not sure about the timeframe'}
                  />
                  <label
                    htmlFor="timeframeLessThanAMonth"
                    className="label-for-radio-btn"
                  >
                    I am not sure
                  </label>
                </div>
                <div className="input-radio-wrap">
                  <input
                    name="timeframe"
                    type="radio"
                    value="Less than 1 month"
                    id="notSureTimeframe"
                    onChange={(event) => {
                      setTimeframe({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={timeframe.value === 'Less than 1 month'}
                  />
                  <label
                    htmlFor="notSureTimeframe"
                    className="label-for-radio-btn"
                  >
                    Less than 1 month
                  </label>
                </div>
                <div className="input-radio-wrap">
                  <input
                    name="timeframe"
                    type="radio"
                    value="1 to 3 months"
                    id="timeframeOneToThree"
                    onChange={(event) => {
                      setTimeframe({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={timeframe.value === '1 to 3 months'}
                  />
                  <label
                    htmlFor="timeframeOneToThree"
                    className="label-for-radio-btn"
                  >
                    1 to 3 months
                  </label>
                </div>
                <div className="input-radio-wrap">
                  <input
                    name="timeframe"
                    type="radio"
                    value="3 to 6 months"
                    id="TimeFrameThreeToSix"
                    onChange={(event) => {
                      setTimeframe({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={timeframe.value === '3 to 6 months'}
                  />
                  <label
                    htmlFor="TimeFrameThreeToSix"
                    className="label-for-radio-btn"
                  >
                    3 to 6 months
                  </label>
                </div>
                <div className="input-radio-wrap">
                  <input
                    name="timeframe"
                    type="radio"
                    value="More than 6 months"
                    id="timeframeIsAboveSixMonths"
                    onChange={(event) => {
                      setTimeframe({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={timeframe.value === 'More than 6 months'}
                  />
                  <label
                    htmlFor="timeframeIsAboveSixMonths"
                    className="label-for-radio-btn"
                  >
                    More than 6 months
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
                    value="I am not sure about the start"
                    id="startNotSure"
                    onChange={(event) => {
                      setStart({
                        value: event.target.value,
                        error: '',
                      });
                    }}
                    checked={start.value === 'I am not sure about the start'}
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
                  <label
                    htmlFor="startInACoupleOfDays"
                    className="label-for-radio-btn"
                  >
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
                  <label
                    htmlFor="startInACoupleOfWeeks"
                    className="label-for-radio-btn"
                  >
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
                  <label
                    htmlFor="startInAMonth"
                    className="label-for-radio-btn"
                  >
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
                  <label
                    htmlFor="startInMoreThanMonth"
                    className="label-for-radio-btn"
                  >
                    More than a month
                  </label>
                </div>
              </div>
            </div>
            <div className="wizard-stage-footer mt-auto">
              <button
                onClick={wizardStageDecreaser}
                type="button"
                className="button no-shadow text-uppercase btn-wide"
              >
                Back
              </button>
              <button
                type="button"
                onClick={wizardStageIncreaser}
                className="button button-send btn-wide"
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
                      onChange={(event) => setName({ value: event.target.value, error: false })
                      }
                      value={name.value}
                      required
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                </div>
                <div className={name.errorField ? 'error-message' : 'error-none'}>
                  {name.status}
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
                      onChange={(event) => setEmailEstimate({
                        value: event.target.value,
                        error: false,
                      })
                      }
                      value={emailEstimate.value}
                      required
                    />
                    <label htmlFor="emailEstimate">Email</label>
                  </div>
                </div>
                <div className={emailEstimate.errorField ? 'error-message' : 'error-none'}>
                  {emailEstimate.status}
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
                  onChange={(event) => setMessageEstimate({
                    value: event.target.value,
                    error: false,
                  })
                  }
                  value={messageEstimate.value}
                  placeholder="Your message (project description)"
                />
              </div>
              <div className={messageEstimate.errorField ? 'error-message' : 'error-none'}>
                {messageEstimate.status}
              </div>
            </div>
            <div className="grey-checkbox-wrapper">
              <Checkbox
                className="grey"
                text={(
                  <>
                    I want to join KeenEthics in a social project like&nbsp;
                    <a
                      href="https://letkidsmove.org/en"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="grey sub-dis"
                    >
                      Let Kids Move
                    </a>
                  </>
                )}
                name="estimateFormIsSubscriberDiscount"
                id="estimateFormIsSubscriberDiscount"
                value="estimateFormIsSubscriberDiscount"
                onChange={() => {
                  setIsSubscriber(!isSubscriber);
                  setHasDiscount(!hasDiscount);
                }}
                isChecked={hasDiscount}
              />
            </div>
            <div className="wizard-stage-footer mt-auto">
              <button
                onClick={wizardStageDecreaser}
                type="button"
                className="button no-shadow text-uppercase btn-wide"
              >
                Back
              </button>
              <button
                type="submit"
                className={classnames('button button-send btn-wide', {
                  'pending no-shadow':
                    !name.value
                    || !emailEstimate.value
                    || isPending,
                })}
              >
                send
              </button>
            </div>
            <div className="privacy-policy">
              By submitting, I agree to KeenEthics’&nbsp;
              <a href="/privacy-policy" target="_blank">Privacy Policy</a>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default EstimateForm;
