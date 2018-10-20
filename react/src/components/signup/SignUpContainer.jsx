/*Ryan Johnston & Tyler Philips, 10/20/18
 * 
 * componentDidMount() checks 
 * renders sign up form.
 * */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Header, Grid, Menu } from 'semantic-ui-react';

import SignUpStepMentor from './SignUpStepMentor'
import SignUpStepMentee from './SignUpStepMentee'

export default class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: '',
    };
  }

  componentDidMount() {
    const { match } = this.props;
    this.setState({
      role: match.params.role,
    });
  }

  render() {
    let { role } = this.state;

    let signup = null;
    if (role === 'mentor') {
      signup = <SignUpStepMentor />;
    } else {
      signup = <SignUpStepMentee />;
    }

    // Convert role to uppercase for display
    role = role.replace(/^\w/, c => c.toUpperCase());

    return (
      <div className="SignUpContainer">
          <Menu style={{backgroundColor: '#21C8CB'}}>
            <Menu.Item as={ Link } to="/" header>Home</Menu.Item>
            <Menu.Item>Q/A</Menu.Item>
            <Menu.Item>Chat</Menu.Item>
          </Menu>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column></Grid.Column>
            <Grid.Column width={8}>
              <Header as="h1" textAlign="center" style={{ textAlign: 'center', marginTop: '50px' }}>
                <Header.Content>
                  {role}
                  &nbsp;Sign Up
                </Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column></Grid.Column>
            <Grid.Column width={8}>
              {signup}
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
          <Grid.Row>
          </Grid.Row>
        </Grid>
      </div>);
  }
}
