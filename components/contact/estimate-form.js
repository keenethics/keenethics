import 'whatwg-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Select from 'react-select';

const PointContainer = ({ point, children }) => (
  <div className="estimate-point-container">
    <p className="estimate-point-number">{point}</p>
    <div className="estimate-point-content">{children}</div>
  </div>
);

PointContainer.propTypes = {
  point: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

const PointContent = ({ head, children }) => (
  <div className="point-content">
    <p className="point-content-header">{head}</p>
    <div className="point-content-body">{children}</div>
  </div>
);

PointContent.propTypes = {
  head: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

class EstimateForm extends React.Component {
  state = {
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
    selectedBudget: { label: 'I`m not sure', value: 'I`m not sure' },
    selectedTime: { label: 'I`m not sure', value: 'I`m not sure' },
    selectedStart: { label: 'ASAP', value: 'ASAP' },
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
    }).then(response => response.json()).then((json) => {
      const state = {
        isPending: false,
        status: json.status.toString(),
      };
      if (json && json.errorField) {
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

  onSelect = type => value => this.setState({ [`selected${type}`]: value })

  servicesList = [
    'Web app',
    'IOS app',
    'Linux app',
    'Server-side development',
    'Windows app',
    'QA testing',
    'Android app',
    'MacOS app',
    'Design',
    'Other',
  ]

  budgetList = [
    { label: 'I`m not sure', value: 'I`m not sure' },
    { label: 'Under $10000', value: 'Under $10000' },
    { label: '$10000-$30000', value: '$10000-$30000' },
    { label: '$30000 and above', value: '$30000 and above' },
  ]

  timeList = [
    { label: 'I`m not sure', value: 'I`m not sure' },
    { label: 'Less than 1 month', value: 'Less than 1 month' },
    { label: '1 to 3 months', value: '1 to 3 months' },
    { label: '3 to 6 months', value: '3 to 6 months' },
    { label: 'Above 6 months', value: 'Above 6 months' },
  ]

  startList = [
    { label: 'ASAP', value: 'ASAP' },
    { label: 'In a couple of days', value: 'in a couple of days' },
    { label: 'In a week', value: 'in a week' },
    { label: 'In a couple of weeks', value: 'in a couple of weeks' },
    { label: 'In a month or later', value: 'in a month or later' },
  ]

  render = () => {
    const {
      emailEstimate,
      name,
      services,
    } = this.state;

    const { isPending, status } = this.props;

    return (
      <div className="estimate-form-container">
        <form onSubmit={this.onSubmit} className="estimate-form">
          <div className="estimate-title">let us Estimate your project</div>
          <PointContainer point="01">
            <PointContent
              head="Stage"
            >
              <div className="estimate-stage">
                <div className="stage-button">
                  <input
                    name="stage"
                    type="radio"
                    value="New app"
                    id="new"
                    className="stage-input display-off"
                    onChange={this.onChange}
                    checked={this.state.stage.value === 'New app'}
                  />
                  <label htmlFor="new" className="stage-button-label">
                    <p className="stage-button-main-text">New app</p>
                      to be built from scratch
                  </label>
                </div>
                <div className="stage-button">
                  <input
                    name="stage"
                    type="radio"
                    value="Existing app"
                    id="existing"
                    className="stage-input display-off"
                    onChange={this.onChange}
                    checked={this.state.stage.value === 'Existing app'}
                  />
                  <label htmlFor="existing" className="stage-button-label">
                    <p className="stage-button-main-text">Existing app</p>
                      continue development
                  </label>
                </div>
              </div>
            </PointContent>
          </PointContainer>
          <PointContainer point="02">
            <PointContent
              head="What services are you interested in?"
            >
              <div className="estimate-services">
                {
                  this.servicesList.map(service => (
                    <div className="estimate-services-checkbox">
                      <input
                        name="services"
                        type="checkbox"
                        value={service}
                        id={`${service}-id`}
                        onChange={this.onChange}
                        className="check display-off"
                        checked={services.value.includes(service)}
                      />
                      <label htmlFor={`${service}-id`} className="estimate-services-checkbox-label checkbox-container">
                        <span className={classnames('custom-checkbox', { error: services.error })}>
                          <svg width="12px" height="10px" viewBox="0 0 12 10" className="checkbox-svg">
                            <polyline points="1.5 6 4.5 9 10.5 1" />
                          </svg>
                        </span>
                        <span className="estimate-services-checkbox-label-text">{service}</span>
                      </label>
                    </div>
                  ))
                }
              </div>
            </PointContent>
          </PointContainer>
          <PointContainer point="03">
            <div className="pm-need align-flex-start">
              <input
                name="pm"
                type="checkbox"
                value="PM/Product manager is required"
                id="pm"
                onChange={this.onChange}
                className="check display-off"
              />
              <label htmlFor="pm" className="pm-checkobox checkbox-container">
                <span className="pm-check custom-checkbox">
                  <svg width="12px" height="10px" viewBox="0 0 12 10" className="checkbox-svg">
                    <polyline points="1.5 6 4.5 9 10.5 1" />
                  </svg>
                </span>
                <span className="pm-title">Do you require PM/Product manager to save your time for tasks' description,
                  tasks' assignment and tasks' assignment prioritizing?
                </span>
              </label>
            </div>
          </PointContainer>
          <PointContainer point="04">
            <PointContent
              head="Expected budget"
            >
              <div className="estimate-input-cols">
                <div className="input-select-wrap">
                  <Select
                    className="budget-select"
                    classNamePrefix="select"
                    options={this.budgetList}
                    onChange={this.onSelect('Budget')}
                    value={this.state.selectedBudget}
                  />
                </div>
              </div>
            </PointContent>
          </PointContainer>
          <PointContainer point="05">
            <PointContent
              head="Timeframe"
            >
              <div className="estimate-input-cols">
                <div className="input-select-wrap">
                  <Select
                    className="time-select"
                    classNamePrefix="select"
                    options={this.timeList}
                    onChange={this.onSelect('Time')}
                    value={this.state.selectedTime}
                  />
                </div>
              </div>
            </PointContent>
          </PointContainer>
          <PointContainer point="06">
            <PointContent
              head="Start"
            >
              <div className="estimate-input-cols">
                <div className="input-select-wrap">
                  <Select
                    className="start-select"
                    classNamePrefix="select"
                    options={this.startList}
                    onChange={this.onSelect('Start')}
                    value={this.state.selectedStart}
                  />
                </div>
              </div>
            </PointContent>
          </PointContainer>
          <div className="estimate-footer">
            <div className="main-person-info">
              <div className="input-wrap main-person-name">
                <input
                  className={classnames('name-input', { error: name.error })}
                  name="name"
                  id="name"
                  type="text"
                  onChange={this.onChange}
                  placeholder="Name:"
                  required
                />
              </div>
              <div className="input-wrap main-person-phone">
                <input
                  name="phoneEstimate"
                  id="phoneEstimate"
                  type="tel"
                  placeholder="Phone:"
                  className="phone-input"
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="input-cols">
              <div className="input-wrap">
                <input
                  className={classnames('email-input', { error: emailEstimate.error })}
                  name="emailEstimate"
                  type="mail"
                  onChange={this.onChange}
                  placeholder="Email:"
                  required
                />
              </div>
            </div>
            <div className="input-cols">
              <div className="input-wrap">
                <div className="input-textarea-title">Message:</div>
                <textarea
                  name="messageEstimate"
                  className="estimate-message"
                  placeholder="Write short description of your project or tell us your questions. Feel free to leave this blank and submit now - we will contact you and guide you through the process."
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="additional-info">
              <img src="/static/images/touch-screen.png" className="touch-screen" alt="touch-screen" />
              <p className="additional-info-text">
                Fill out additional information about your project and <span>get up to 50%</span> discount
                for project specification’s elaboration - <a href="#">follow link</a>
              </p>
            </div>
            {status && <div className="form-status">{status}</div>}
            <div className="submit-btn">
              <button
                type="submit"
                className={classnames('button button-send', { pending: isPending })}
              >
                <img className="send-svg" src="/static/images/svg/send.svg" alt="send" />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
EstimateForm.propTypes = {
  isPending: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default EstimateForm;
