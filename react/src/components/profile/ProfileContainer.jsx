import React from 'react';
import PropTypes from 'prop-types';

export default class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: {
        a: 'b',
        c: 'd',
      },
    };
  }

  // componentDidMount() {
  //   this.loadData();
  // }
  //
  // loadData() {
  //   // Call REST API to get form data from database
  //   fetch(this.props.url, { credentials: 'same-origin' })
  //     .then((response) => {
  //       if (!response.ok) throw Error(response.statusText);
  //       return response.json();
  //     })
  //     .then((data) => {
  //       this.setState({
  //         profiles: data.profile,
  //       });
  //     })
  //     .catch(error => console.log(error)); // eslint-disable-line no-console
  // }

  render() {
    const { profiles } = this.state;


    const output = Object.keys(profiles).map(key => (
      <div>
        <p>
          {key}
          -
          {profiles[key]}
        </p>
      </div>
    ));


    return (
      <div className="ProfileContainer">
        Profile Container
        {output}
      </div>);
  }
}
