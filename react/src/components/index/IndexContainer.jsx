import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default class IndexContainer extends React.Component {
  render() {
    return (
      <div className="IndexContainer">
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column></Grid.Column>
            <Grid.Column width={8}>
              <Header as="h1" textAlign='center' style={{ textAlign: 'center', marginTop: '50px' }}>
                <Header.Content>GRSI Mentor Matcher</Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>);
  }
}
