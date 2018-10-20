/*Ryan Johnston & Tyler Philips, 10/20/18
 * CURRENTLY NOT IN USE.
 * renders mentor's signup and handles submission.
 * */
import React from 'react';
import PropTypes from 'prop-types';

import { Step } from 'semantic-ui-react';

export default function SignUpStepMentor() {
  return (
    <div className="SignUpStep">
      Mentor
      <Step.Group ordered>
        <Step completed>
          <Step.Content>
            <Step.Title>Shipping</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
          </Step.Content>
        </Step>

        <Step completed>
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>

        <Step active>
          <Step.Content>
            <Step.Title>Confirm Order</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    </div>);
}
