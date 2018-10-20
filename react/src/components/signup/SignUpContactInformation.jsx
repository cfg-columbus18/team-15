import React from 'react';
import PropTypes from 'prop-types';
import {Form} from 'semantic-ui-react'

// account dictionary {name:, phone#:,}
// handleChange(event, key)
export default function SignUpContactInformation({account,handleChange}){
  return(
  <Form>
    <Form.Field width={3}>
      <input placeholder="Name" value={account.name} onChange={(event) => { handleChange('name',event); }} />
    </Form.Field>

    <Form.Field width={3}>
      <input placeholder="Phone" value={account.contact} onChange={(event) => { handleChange('phone',event); }} />
    </Form.Field>

    <Form.Field width={3}>
      <input placeholder="Platform" value={account.platform} onChange={(event) => { handleChange('Platform',event); }} />
    </Form.Field>

    <Form.Field width={3}>
      <input placeholder="Email" value={account.email} onChange={(event) => { handleChange('Email',event); }} />
    </Form.Field>

  </Form>
);
}
