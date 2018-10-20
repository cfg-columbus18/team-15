/*Ryan Johnston & Tyler Philips, 10/20/18
 * 
 * signupmentorsearch() maps profile for currently selected profile.
  * */

import React from 'react';
import PropTypes from 'prop-types';

import { Form, Radio, Table } from 'semantic-ui-react';

export default function SignUpMentorSearch({ profiles, currentSelected, handleChange }) {
  const output = profiles.map((profile, id) => (
    <Table.Row key={id}>
      <Table.Cell>
        <a href={`/profile/${id}`}>{profile.Name}</a>
      </Table.Cell>
      <Table.Cell>
        {profile.Language}
      </Table.Cell>
      <Table.Cell>
        {profile.Country}
      </Table.Cell>
      <Table.Cell>
        {profile.match_score}
      </Table.Cell>
      <Table.Cell>
        <Form.Field>
          <Radio
            value="this"
            checked={currentSelected === id}
            onChange={() => { handleChange(id); }}
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
            <Table.HeaderCell>Match Score</Table.HeaderCell>
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
