import React from 'react';
import PropTypes from 'prop-types';

export default class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {'a':'b'},
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    // Call REST API to get a form data from database
    fetch(this.props.url, { credentials: 'same-origin' })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState({
          profile: data.profile,
        });
      })
      .catch(error => console.log(error)); // eslint-disable-line no-console
  }

  render() {



    return (
      <div className="ProfileContainer">
        Profile Container
      </div>);
  }
}
