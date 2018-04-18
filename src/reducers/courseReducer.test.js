import expect from 'expect';
import courseReducer from './courseReducer';
import * as courseActions from '../actions/courseActions';

describe('Course Reducer', () => {
  it('should add a course when passed CREATE_COURSE_SUCCESS action.', () => {
    // Arrange
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];
    const newCourse = {title: 'C'};
    const action = courseActions.createCourseSuccess(newCourse);

    // Act
    const newState = courseReducer(initialState, action);

    // Assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('should update a course when passed UPDATE_COURSE_SUCCESS action.', () => {
    // Arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];
    const course = {id: 'B', title: 'New title'};
    const action = courseActions.updateCourseSuccess(course);

    // Act
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == 'A');

    // Assert
    expect(newState.length).toEqual(3);
    expect(updatedCourse.title).toEqual('New title');
    expect(untouchedCourse.title).toEqual('A');
    expect(newState).toInclude(initialState[0]);
    expect(newState).toExclude(initialState[1]);
  });

  it('should indicate deleting a course when passed BEGIN_DELETE_COURSE action.', () => {
    // Arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];
    const course = {id: 'B', title: 'New title'};
    const action = courseActions.deleteCourseBegin(course);

    // Act
    const newState = courseReducer(initialState, action);
    const deletingCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == 'A');

    // Assert
    expect(newState.length).toEqual(3);
    expect(deletingCourse).toExist();
    expect(untouchedCourse.isDeleting).toNotExist();
    expect(deletingCourse.isDeleting).toEqual(true);
  });

  it('should delete a course when passed DELETE_COURSE_SUCCESS action.', () => {
    // Arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];
    const course = {id: 'B', title: 'New title'};
    const action = courseActions.deleteCourseSuccess(course);

    // Act
    const newState = courseReducer(initialState, action);
    const deletedCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == 'A');

    // Assert
    expect(newState.length).toEqual(2);
    expect(deletedCourse).toNotExist();
    expect(untouchedCourse.title).toEqual('A');
    expect(newState).toInclude(initialState[0]);
    expect(newState).toExclude(initialState[1]);
  });
});
