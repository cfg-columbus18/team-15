/*Ryan Johnston & Tyler Philips, 10/20/18
 * 
 * renders mentee's signup and handles submission.
 * */

import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Step,
  Icon,
  Segment,
  Form,
  Dropdown,
} from 'semantic-ui-react';

import SignUpMentorSearch from './SignUpMentorSearch';
import SignUpContactInformation from './SignUpContactInformation';
import options from './options.json';

export default class SignUpStepMentee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      currentMatchSelected: null,
      contact: {
        name: '',
        email: '',
        platform: '',
        phone: '',
      },
      preferences: {
        experience: 0,
        experienceWeight: 0,
        country: '',
        countryWeight: 0,
        timezone: '',
        timezoneWeight: 0,
        language: '',
        languageWeight: 0,
      },
      profiles: [],
    };
  }

  handleNext = () => {
    let { step } = this.state;
    if (step !== 3) {
      step += 1;
    }
    this.setState({
      step,
    });
  }

  handlePrevious = () => {
    let { step } = this.state;
    if (step !== 0) {
      step -= 1;
    }
    this.setState({
      step,
    });
  }

  handleFormChange = (event, data) => {
    const { preferences } = this.state;

    if (data.placeholder === 'Experience Level (years)') {
      preferences.experience = data.value;
      this.setState({
        preferences,
      });
    } else if (data.placeholder === 'Country') {
      preferences.country = data.value;
      this.setState({
        preferences,
      });
    } else if (data.placeholder === 'Language') {
      preferences.language = data.value;
      this.setState({
        preferences,
      });
    } else if (data.placeholder === 'Time Zone') {
      preferences.timezone = data.value;
      this.setState({
        preferences,
      });
    }
  }

  handlePriorityChange = (key, event) => {
    const { preferences } = this.state;

    preferences[key] = event.target.value;

    this.setState({
      preferences,
    });
  }

  handleContactChange = (key, event) => {
    const { contact } = this.state;

    contact[key] = event.target.value;

    this.setState({
      contact,
    });
  }

  handleMentorSelectedChange = (value) => {
    this.setState({ currentMatchSelected: value });
  }

  handleSubmit = () => {
    const { preferences } = this.state

    let body = preferences;
    body.experienceWeight = parseInt(body.experienceWeight, 10);
    body.countryWeight = parseInt(body.countryWeight, 10);
    body.languageWeight = parseInt(body.languageWeight, 10);
    body.timezoneWeight = parseInt(body.timezoneWeight, 10);
    body = JSON.stringify(body);

    fetch('http://localhost:5000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body,
    }).then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
      .then((data) => {
        console.log(data);
        this.setState({
          profiles: data,
        })
      }).catch(error => console.log(error)); // eslint-disable-line no-console
  }

  render() {
    const {
      step,
      preferences,
      profiles,
      currentMatchSelected,
      contact,
    } = this.state;

    let form = null;
    if (step === 0) {
      // Contact segment
      form = (
        <div>
          <p>Tell us how you would like to be contacted by your Mentor.</p>
          <SignUpContactInformation
            account={contact}
            handleChange={this.handleContactChange}
          />
        </div>);
    } else if (step === 1) {
      // Preference segment
      form = (
        <div>
          <p>What attributes would you like your mentor to have? In priority rank from 1-10 how important it is that your Mentor has that.</p>
          <Form>
            <Form.Group>
              <Form.Field width={13}>
                <label htmlFor="experience level">
                  Experience Level (years)
                  <Dropdown placeholder="Experience Level (years)" fluid selection options={options.experienceOptions} onChange={this.handleFormChange} />
                </label>
              </Form.Field>
              <Form.Field width={3}>
                <label htmlFor="priority">
                  &nbsp;
                  <input placeholder="Priority" value={preferences.experienceWeight} onChange={(event) => { this.handlePriorityChange('experienceWeight', event); }} />
                </label>
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field width={13}>
                <label htmlFor="country">
                  Country
                  <Dropdown placeholder="Country" fluid selection options={options.countryOptions} onChange={this.handleFormChange} />
                </label>
              </Form.Field>
              <Form.Field width={3}>
                <label htmlFor="priority">
                  &nbsp;
                  <input placeholder="Priority" value={preferences.countryWeight} onChange={(event) => { this.handlePriorityChange('countryWeight', event); }} />
                </label>
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field width={13}>
                <label htmlFor="time zone">
                  Time Zone
                  <Dropdown placeholder="Time Zone" fluid selection options={options.timezoneOptions} onChange={this.handleFormChange} />
                </label>
              </Form.Field>
              <Form.Field width={3}>
                <label htmlFor="priority">
                  &nbsp;
                  <input placeholder="Priority" value={preferences.timezoneWeight} onChange={(event) => { this.handlePriorityChange('timezoneWeight', event); }} />
                </label>
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field width={13}>
                <label htmlFor="Language">
                  Language
                  <Dropdown placeholder="Language" fluid selection options={options.languageOptions} onChange={this.handleFormChange} />
                </label>
              </Form.Field>
              <Form.Field width={3}>
                <label htmlFor="priority">
                  &nbsp;
                  <input placeholder="Priority" value={preferences.languageWeight} onChange={(event) => { this.handlePriorityChange('languageWeight', event); }} />
                </label>
              </Form.Field>
            </Form.Group>
            <br />
          </Form>
        </div>);
    } else if (profiles.length === 0) {
      form = (
        <div>
          <p>Search for your mentors</p>
          <div style={{ textAlign: 'center' }}>
            <Button
              onClick={() => this.handleSubmit()}
            >
              Search
            </Button>
          </div>
          <br />
        </div>);
    } else {
      form = (
        <div>
          <p>Here are the mentors we selected for you:</p>
          <SignUpMentorSearch
            profiles={profiles}
            currentSelected={currentMatchSelected}
            handleChange={this.handleMentorSelectedChange}
          />
          <div style={{ textAlign: 'center' }}>
            <Button
              onClick={() => this.handleSubmit()}
            >
              Search
            </Button>
          </div>
        </div>);
    }

    return (
      <div className="SignUpStepMentee" widths={3}>
        <Step.Group widths={3}>
          <Step active={step === 0}>
            <Icon name="user" />
            <Step.Content>
              <Step.Title>Contact Information</Step.Title>
            </Step.Content>
          </Step>
          <Step active={step === 1}>
            <Icon name="star" />
            <Step.Content>
              <Step.Title>Preferences</Step.Title>
            </Step.Content>
          </Step>
          <Step active={step === 2}>
            <Icon name="search" />
            <Step.Content>
              <Step.Title>Matching</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        <Segment>
          { form }
          <Button icon labelPosition="left" color="teal" disabled={step === 0} onClick={() => this.handlePrevious()}>
            <Icon name="arrow alternate circle left outline" />
            Previous
          </Button>
          <Button icon labelPosition="right" color="teal" floated="right" disabled={step === 2} onClick={() => this.handleNext()}>
            Next
            <Icon name="arrow alternate circle right outline" />
          </Button>
        </Segment>
      </div>);
  }
}
