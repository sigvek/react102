import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import DeleteButton from '../common/DeleteButton';

const CourseListRow = ({course, onDelete}) => {

  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={`/course/${course.id}`}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
      <td><DeleteButton onDelete={onDelete} deleting={false} /></td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default CourseListRow;
