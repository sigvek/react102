import React, { Component, PropTypes } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import * as sortingActions from '../../actions/sortingActions';
import toastr from 'toastr';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };

    this.deleteCourse = this.deleteCourse.bind(this);
    this.setSorting = this.setSorting.bind(this);
  }

  deleteCourse(course) {
    this.props.actions.deleteCourse(course)
      .then(() => {
        toastr.success('Deleted course: ' + course.title);
      })
      .catch(error => {
        toastr.error(error);
      });
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  setSorting(event) {
    this.props.sorting.setSorting("category");
  }

  // courseRow(course, index) {
  //   return <div key={index}>{course.title}</div>;
  // }

  render() {
    const { courses } = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
          value="Add course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage} />
        <button
          className="btn btn-primary"
          onClick={this.setSorting} >
          Set sorting to x
        </button>
        {courses.length > 0 && <CourseList courses={courses} onDelete={this.deleteCourse} />}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  sorting: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses.sort((a, b) => {
      return a.title > b.title;
    }) // from alias in reducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch),
    sorting: bindActionCreators(sortingActions, dispatch)
  };
}

// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); // gets dispatch automatically
