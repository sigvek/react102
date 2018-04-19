import * as types from './actionTypes';

export function setCourseSortingSuccess(sorting) {
  return { type: types.SET_COURSES_SORTING, sorting};
}

export function setSorting(sorting) {
  return function (dispatch) {
    return dispatch(setCourseSortingSuccess(sorting));
  };
}
