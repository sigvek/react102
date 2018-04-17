import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
  it('should handle creating courses.', () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: 'Clean Code'
    };
    const expected = {
      title: 'Clean Code'
    };

    // act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    // assert
    const newState = store.getState();
    const actual = newState.courses[0];
    expect(actual).toEqual(expected);
    expect(newState.courses.length).toEqual(1);
  });

  it('should handle updating courses.', () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      id: 'clean-code',
      title: 'Clean Code'
    };
    const updateCourse = {
      id: 'clean-code',
      title: 'Better Testing of Clean Code'
    };

    // act
    const addAction = courseActions.createCourseSuccess(course);
    const updateAction = courseActions.updateCourseSuccess(updateCourse);
    store.dispatch(addAction);
    store.dispatch(updateAction);

    // assert
    const newState = store.getState();
    const actual = newState.courses[0];
    expect(actual.title).toEqual('Better Testing of Clean Code');
    expect(newState.courses.length).toEqual(1);
  });

  it('should handle deleting courses.', () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      id: 'clean-code',
      title: 'Clean Code'
    };
    const deleteCourse = {
      id: 'clean-code',
      title: 'Better Testing of Clean Code'
    };

    // act
    const addAction = courseActions.createCourseSuccess(course);
    const deleteAction = courseActions.deleteCourseSuccess(deleteCourse);
    store.dispatch(addAction);
    store.dispatch(deleteAction);

    // assert
    const newState = store.getState();
    expect(newState.courses.length).toEqual(0);
  });
});
