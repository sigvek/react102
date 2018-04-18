import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading, numberOfCourses}) => {
  return (
    <nav className="row">
      <IndexLink to="/" activeClassName="active" className="col-2">Home</IndexLink>
      <Link to="/courses" activeClassName="active" className="col-2">Courses</Link>
      <Link to="/about" activeClassName="active" className="col-2">About</Link>
      {loading && <LoadingDots className="col" interval={100} dots={20} />}
      <span className="col text-right">{numberOfCourses} courses</span>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  numberOfCourses: PropTypes.number.isRequired
};

export default Header;
