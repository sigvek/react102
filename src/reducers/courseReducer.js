import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state, Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    case types.BEGIN_DELETE_COURSE:
      // LOL - becomes last entity before being deleted
      // return [
      //   ...state.filter(course => course.id !== action.course.id),
      //   Object.assign({}, action.course, {isDeleting: true})
      // ];
      return state.map( (course, index ) => {
        if(course.id !== action.course.id ) {
          return course;
        } else {
          return Object.assign({}, action.course, {isDeleting: true});
        }
      });


    case types.DELETE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id)
      ];

    default:
      return state;
  }
}
