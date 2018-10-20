import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react'

// account dictionary {name:, phone#:,}
// handleChange(event, key)
export default function SignUpContactInformation({ account, handleChange }) {
  return (
    <Form>
      <Form.Field>
        <input placeholder="Name" value={account.name} onChange={(event) => { handleChange('name', event); }} />
      </Form.Field>

      <Form.Field>
        <input placeholder="Phone Number" value={account.phone} onChange={(event) => { handleChange('phone', event); }} />
      </Form.Field>

      <Form.Field>
        <input placeholder="Platform" value={account.platform} onChange={(event) => { handleChange('platform', event); }} />
      </Form.Field>

      <Form.Field>
        <input placeholder="Email" value={account.email} onChange={(event) => { handleChange('email', event); }} />
      </Form.Field>
      <br />
    </Form>);
}
