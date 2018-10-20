import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  Grid,
  Form,
  Radio,
} from 'semantic-ui-react'

export default class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelected: -1,
      profiles: [
        { name: 'Tyler', language: 'English', location:'USA', id:'1' },
        { name: 'Ryan', language: 'Spanish', location:'Canada', id:'2' },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    console.log(value)
    this.setState({ currentSelected: value });
  }

  render() {
    const { profiles } = this.state;
    // const output = <p>hi</p>

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
              checked={this.state.currentSelected === profile.id}
              onChange={() => { this.handleChange(profile.id); }}
              label={<label></label>}
            />
          </Form.Field>
        </Table.Cell>
      </Table.Row>

    ));

    return (
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column width={8}>
            <Form>
              <Form.Group inline>
                <Form.Field>
                  <label>Search</label>
                  <input placeholder="Enter" />
                </Form.Field>
              </Form.Group>
            </Form>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column width={8}>
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
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
