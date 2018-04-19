import {combineReducers} from 'redux';
import courses from './courseReducer';
import coursesSorting from './coursesSortingReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStausReducer';

const rootReducer = combineReducers({
  courses,
  coursesSorting,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
