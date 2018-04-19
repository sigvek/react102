import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <Header loading={this.props.loading} numberOfCourses={this.props.numberOfCourses} />
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  numberOfCourses: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    numberOfCourses: state.courses.length || 0
  };
}

export default connect(mapStateToProps)(App);
