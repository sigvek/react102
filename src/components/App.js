import React, { Component, PropTypes } from 'react';
//import PropTypes from 'prop-types';
import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <Header />
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
