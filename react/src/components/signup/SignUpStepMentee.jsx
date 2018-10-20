import React from 'react';
import PropTypes from 'prop-types';

import { Button, Step, Icon, Segment } from 'semantic-ui-react';

export default class SignUpStepMentee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };
  }

  handleNext = () => {
    let { step } = this.state;
    if (step !== 0) {
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

  render() {
    const { step } = this.state;

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
          <Step active={step === 3}>
            <Icon name="search" />
            <Step.Content>
              <Step.Title>Matching</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        <Segment>
          <p>Pellentesque habitant morbi tristique senectus.</p>
          <Button icon labelPosition="left" primary disabled={step === 0}>
            <Icon name="arrow alternate circle left outline" />
            Previous
          </Button>
          <Button icon labelPosition="right" floated="right" primary disabled={step === 2}>
            Next
            <Icon name="arrow alternate circle right outline" />
          </Button>
        </Segment>
      </div>);
  }
}
