import React from 'react';
import PropTypes from 'prop-types';

const SortButton = ({ sortBy }) => (
  <div className="btn-sort-table">
    <button type="button" className="btn btn-sort_title" onClick={() => sortBy('titleBook')}>
      <i className="fas fa-sort-alpha-up">По книге</i>
    </button>
    <button type="button" className="btn btn-sort_author" onClick={() => sortBy('authorBook')}>
      <i className="fas fa-sort-alpha-up">По автору</i>
    </button>
  </div>
);

export default SortButton;

SortButton.propTypes = {
  sortBy: PropTypes.func.isRequired,
};
