import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Label, Menu, Table,Grid,Form } from 'semantic-ui-react'

export default class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [
        { name: 'Tyler', language: 'English' },
        { name: 'A', language: 'B' },
      ],
    };
  }

  render() {
    const { profiles } = this.state;
    // const output = <p>hi</p>

    const output = profiles.map((profile, index) => (

      <Table.Row key={index}>
        <Table.Cell>
          {profile.name}
        </Table.Cell>
        <Table.Cell>
          {profile.language}
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
