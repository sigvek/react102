import * as types from './actionTypes';
import { loadCourses }  from './courseActions';

export function setCourseSortingSuccess(sorting) {
  return { type: types.SET_COURSES_SORTING, sorting};
}

export function setSorting(sorting) {
  return function (dispatch) {
    dispatch(setCourseSortingSuccess(sorting));
  };
}
