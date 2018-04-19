import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function coursesSortingReducer(state = initialState.coursesSorting, action) {
  switch (action.type) {
    case types.SET_COURSES_SORTING:
        return action.sorting;

    default:
      return state;
  }
}
