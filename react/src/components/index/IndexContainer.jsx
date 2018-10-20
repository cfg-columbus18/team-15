import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header, Menu, Dropdown, Flag } from 'semantic-ui-react';

export default class IndexContainer extends React.Component {
  render() {
    const leftPanel = (
      <Menu.Menu>
         <Menu.Item header>Home</Menu.Item>
         <Menu.Item>Q/A</Menu.Item>
         <Menu.Item>Chat</Menu.Item>
      </Menu.Menu>
    );

    const rightPanel = (
      <Menu.Menu position="right">
        <Menu.Item position="right">Mentor Sign Up</Menu.Item>
        <Menu.Item as={ Link } to="/signup/mentee" position="right">Mentee Sign Up</Menu.Item>
      </Menu.Menu>
    );


    return (
      <div className="IndexContainer">
        <Menu style={{backgroundColor: '#21C8CB'}}>
          {leftPanel}
          {rightPanel}
        </Menu>

        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column></Grid.Column>
            <Grid.Column width={8}>

              <Header as="h1" textAlign='center' style={{ textAlign: 'center', marginTop: '50px' }}>
                <Header.Content>GRSI Mentor Matcher</Header.Content>
              </Header>
              <p> Community-based sponsorship programs allow individuals to
                directly engage in refugee resettlement efforts.
                Sponsors commit to providing financial, emotional and
                resettlement support to help newly-arrived refugees integrate
                into life in a new country.
                The Canadian government has resettled more than 300,000*
                refugees through its Private Sponsorship of Refugees program
                since it was introduced in 1979. In addition, hundreds of
                communities across Canada have benefited by coming together to
                welcome privately sponsored refugees.</p>

              <Header as="h4">Select a country below to learn more about the situation in your current country</Header>

            <Dropdown text='Select Country'>
                <Dropdown.Menu>
                <Dropdown.Item>Canada <Flag name='ca'> </Flag></Dropdown.Item>
                <Dropdown.Item>United Kingdom	<Flag name='gb'></Flag> </Dropdown.Item>
                <Dropdown.Item>Germany	<Flag name='de'></Flag> </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column></Grid.Column>
            <Grid.Column width={8}>
              <p> Check out this video to see what it means to be a sponsor. </p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/J5pFTgmYYKg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>);
  }
}
