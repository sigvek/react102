import React, { PropTypes } from 'react';

const DeleteButton = ({onClick}) => {
  return (
      <button
        className={'btn btn-outline-danger'}
        onClick={onClick} >
        <i className={'fa fa-trash'}></i>
      </button>
  );
};

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default DeleteButton;
