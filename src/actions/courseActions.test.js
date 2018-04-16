import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action.', () => {
      // arrange
      const course = {id: 'clean-code', title: 'Clean code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      // act
      const action = courseActions.createCourseSuccess(course);

      // assert
      expect(action).toEqual(expectedAction);
    });

    it('should create a UPDATE_COURSE_SUCCESS action.', () => {
      // arrange
      const course = {id: 'clean-code', title: 'Clean code'};
      const expectedAction = {
        type: types.UPDATE_COURSE_SUCCESS,
        course: course
      };

      // act
      const action = courseActions.updateCourseSuccess(course);

      // assert
      expect(action).toEqual(expectedAction);
    });

    it('should create a LOAD_COURSES_SUCCESS action.', () => {
      // arrange
      const courses = [{id: 'clean-code', title: 'Clean code'}];
      const expectedAction = {
        type: types.LOAD_COURSES_SUCCESS,
        courses: courses
      };

      // act
      const action = courseActions.loadCoursesSuccess(courses);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});
