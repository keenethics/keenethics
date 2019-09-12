import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Checkbox from '../form/checkbox';

class EstimateForm extends React.Component {
  constructor() {
    super();

    this.state = {
      stage: {
        value: 'New app',
        error: false,
      },
      services: {
        value: ['Web app'],
        error: false,
      },
      pm: {
        value: '',
        error: false,
      },
      budget: {
        value: 'I`m not sure',
        error: false,
      },
      timeframe: {
        value: 'I`m not sure',
        error: false,
      },
      start: {
        value: 'ASAP',
        error: false,
      },
      phoneEstimate: {
        value: '',
        error: false,
      },
      emailEstimate: {
        value: '',
        error: false,
      },
      messageEstimate: {
        value: '',
        error: false,
      },
      name: {
        value: '',
        error: false,
      },
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { updateState } = this.props;

    updateState({ isPending: true });

    fetch('/estimate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    }).then((response) => response.json()).then((json) => {
      const state = {
        isPending: false,
        status: json.status.toString(),
        notifyIsVisible: true,
      };

      if (json && json.errorField) {
        state.notifyMessage = json.status.toString();
        Object.assign(state, json.errorField);
      }

      this.setState(json.errorField);

      updateState(state);
    });
  }

  onChange = ({ target: { name, value, form: { services } } }) => {
    const checkedCheckboxesValues = [...services]
      .filter(({ checked }) => checked)
      // eslint-disable-next-line no-shadow
      .map(({ value }) => value);

    if (name === 'services') {
      this.setState({ services: { value: checkedCheckboxesValues } });
    } else {
      this.setState({
        [name]: {
          value,
          error: '',
        },
      });
    }
  }

  render = () => {
    const {
      emailEstimate,
      name,
      services,
      // pm,
    } = this.state;

    const { isPending } = this.props;
    return (
      <div className="estimate-form">
        <form onSubmit={this.onSubmit} className="estimate-form-inputs">
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
                onChange={this.onChange}
                checked={this.state.stage.value === 'New app'}
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
                onChange={this.onChange}
                checked={this.state.stage.value === 'Existing app'}
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
          <div className="estimate-input-cols">
            <div className="input-checkbox-wrap">
              <Checkbox
                text="Web app"
                name="services"
                id="web"
                value="Web app"
                onChange={this.onChange}
                isChecked={services.value.includes('Web app')}
              />
            </div>
            <div className="input-checkbox-wrap">
              <Checkbox
                text="IOS app"
                name="services"
                id="ios"
                value="IOS app"
                onChange={this.onChange}
                isChecked={services.value.includes('IOS app')}
              />
            </div>
            <div className="input-checkbox-wrap">
              <Checkbox
                text="Linux app"
                name="services"
                id="linux"
                value="Linux app"
                onChange={this.onChange}
                isChecked={services.value.includes('Linux app')}
              />
            </div>
            <div className="input-checkbox-wrap">
              <Checkbox
                text="Server-side development"
                name="services"
                id="ssd"
                value="Server-side development"
                onChange={this.onChange}
                isChecked={services.value.includes('Server-side development')}
              />
            </div>
            <div className="input-checkbox-wrap">
              <Checkbox
                text="Windows app"
                name="services"
                id="windows"
                value="Windows app"
                onChange={this.onChange}
                isChecked={services.value.includes('Windows app')}
              />
            </div>
            <div className="input-checkbox-wrap">
              <Checkbox
                text="QA testing"
                name="services"
                id="qa"
                value="QA testing"
                onChange={this.onChange}
                isChecked={services.value.includes('QA testing')}
              />
            </div>
            <div className="input-checkbox-wrap">
              <Checkbox
                text="Android app"
                name="services"
                id="android"
                value="Android app"
                onChange={this.onChange}
                isChecked={services.value.includes('Android app')}
              />
            </div>
            <div className="input-checkbox-wrap">
              <Checkbox
                text="MacOS app"
                name="services"
                id="macos"
                value="MacOS app"
                onChange={this.onChange}
                isChecked={services.value.includes('MacOS app')}
              />
            </div>
            <div className="input-checkbox-wrap">
              <Checkbox
                text="Design"
                name="services"
                id="design"
                value="Design"
                onChange={this.onChange}
                isChecked={services.value.includes('Design')}
              />
            </div>
            <div className="input-checkbox-wrap">
              <Checkbox
                text="Other"
                name="services"
                id="other"
                value="Other"
                onChange={this.onChange}
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
              onChange={this.onChange}
              isChecked={services.value.includes('PM/Product manager is required')}
            />
          </div>
          <div className="question-title">
            <span className="question-number">04</span>
            {' '}
Expected budget
          </div>
          <div className="estimate-input-cols">
            <div className="input-select-wrap">
              <select name="budget" className="input-select" onChange={this.onChange}>
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
              <select name="timeframe" className="input-select" onChange={this.onChange}>
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
              <select name="start" className="input-select" onChange={this.onChange}>
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
                onChange={this.onChange}
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
                onChange={this.onChange}
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
                type="mail"
                onChange={this.onChange}
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
                onChange={this.onChange}
              />
            </div>
          </div>
          {/*
            <div className="form-footer">
              <img
                src="/static/images/touch-screen.png"
                className="touch-screen"
                alt="touch-screen"
              />
              <p className="form-footer-text">
                Fill out additional information about your project and <span>get up to 50%</span>
                &nbsp;discount for project specification’s elaboration - <a href="#">follow link</a>
              </p>
            </div>
          */}
          {/* {status && <div className="form-status">{status}</div>} */}
          <div className="submit-btn">
            <button
              type="submit"
              className={classnames('button button-send', { pending: isPending })}
            >
              <img src="/static/images/svg/send.svg" alt="send" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}
EstimateForm.propTypes = {
  isPending: PropTypes.bool.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default EstimateForm;
