import React, { PropTypes } from 'react';

const DeleteButton = ({onDelete, deleting}) => {
  return (
      <button
        className={'btn btn-outline-danger'}
        onClick={onDelete} >
        <i className={deleting ? 'fa fa-spinner fa-spin' : 'fa fa-trash'}></i>
      </button>
  );
};

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  deleting: PropTypes.bool.isRequired
};

export default DeleteButton;
