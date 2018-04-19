import React, { Component, PropTypes } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import * as sortingActions from '../../actions/sortingActions';
import * as sortingType from '../../selectors/sortingTypes';
import { sortfunctionsByType } from '../../selectors/selectors';
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
    this.setSortingTitle = this.setSortingTitle.bind(this);
    this.setSortingCategory = this.setSortingCategory.bind(this);
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

  setSortingCategory(event) {
    //this.props.sorting.setSorting(sortingType.SORT_BY_CATEGORY);
    this.props.actions.sortCourses(sortingType.SORT_BY_CATEGORY);
  }

  setSortingTitle(event) {
    //this.props.sorting.setSorting(sortingType.SORT_BY_TITLE);
    this.props.actions.sortCourses(sortingType.SORT_BY_TITLE);
  }

  // courseRow(course, index) {
  //   return <div key={index}>{course.title}</div>;
  // }

  render() {
    const { courses, coursesSorting } = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
          value="Add course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage} />
        <button
          className="btn btn-primary"
          onClick={this.setSortingTitle} >
          Set sorting to Title
        </button>
        <button
          className="btn btn-primary"
          onClick={this.setSortingCategory} >
          Set sorting to Category
        </button>
        {courses.length > 0 && <CourseList courses={courses} onDelete={this.deleteCourse} payAttention={coursesSorting}/>}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  sorting: PropTypes.object.isRequired,
  coursesSorting: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
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
