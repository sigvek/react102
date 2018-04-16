import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <Header loading={this.props.loading} />
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
