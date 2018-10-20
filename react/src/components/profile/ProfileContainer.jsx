/*Ryan Johnston & Tyler Philips, 10/20/18
 * 
 * Renders profile page for example viewing.
 * 
 * */
import React from 'react';
import PropTypes from 'prop-types';
import { Table, Grid, Header } from 'semantic-ui-react'


export default class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        experience: 2,
        country: 'USA',
        timeZone: "EST",
        name: 'Tyler',
        contact:'3308148613',
        language:'English',
        platform:'Twitter',
        stage:'Just Arrived',
        bio:'Hi I am Tyler',
        expertise:'housing',
        email:'abc@umich.edu',
      },
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div className="ProfileContainer">
        <Grid columns="equal">

        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column width={8}>
            <Header as="h1" textAlign='center' style={{ textAlign: 'center', marginTop: '50px' }}>
              <Header.Content>Mentor Profile</Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column width={8}>
            <Header as='h3'>Contact Info</Header>

            <Table>
              <Table.Row>
                <Table.Cell width={10}>Name</Table.Cell>
                <Table.Cell>{data['name']}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell width={10}>Phone Number</Table.Cell>
                <Table.Cell>{data['contact']}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell width={10}>Platform</Table.Cell>
                <Table.Cell>{data['platform']}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell width={10}>Email</Table.Cell>
                <Table.Cell>{data['email']}</Table.Cell>
              </Table.Row>
            </Table>
            <Header as='h3'>Location</Header>

            <Table>
              <Table.Row>
                <Table.Cell width={10}>Time Zone</Table.Cell>
                <Table.Cell>{data['timeZone']}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell width={10}>Country</Table.Cell>
                <Table.Cell>{data['country']}</Table.Cell>
              </Table.Row>
            </Table>

            <Header as='h3'>Credentials</Header>
              <Table>
                <Table.Row>
                  <Table.Cell width={10}>Expertise</Table.Cell>
                  <Table.Cell>{data['expertise']}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell width={10}>Experience</Table.Cell>
                  <Table.Cell>{data['experience']} years</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell width={10}>Stage</Table.Cell>
                  <Table.Cell>{data['stage']}</Table.Cell>
                </Table.Row>
              </Table>

          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>);
  }
}
