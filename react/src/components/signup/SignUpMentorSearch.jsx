import React from 'react';
import PropTypes from 'prop-types';

import { Form, Radio, Table } from 'semantic-ui-react';

export default function SignUpMentorSearch({ profiles, currentSelected, handleChange }) {
  const output = profiles.map(profile => (
    <Table.Row key={profile.id}>
      <Table.Cell>
        {profile.name}
      </Table.Cell>
      <Table.Cell>
        {profile.language}
      </Table.Cell>
      <Table.Cell>
        {profile.location}
      </Table.Cell>
      <Table.Cell>
        <Form.Field>
          <Radio
            value="this"
            checked={currentSelected === profile.id}
            onChange={() => { handleChange(profile.id); }}
            label={<label></label>}
          />
        </Form.Field>
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <div className="SignUpMentorSearch">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Language</Table.HeaderCell>
            <Table.HeaderCell>Location</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {output}
        </Table.Body>
      </Table>
      <br />
    </div>);
}
