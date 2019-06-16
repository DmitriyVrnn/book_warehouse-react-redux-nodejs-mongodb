import React from 'react'

const SortButton = ({sortBy}) => {
    return (
        <div className="btn-sort-table">
            <button className="btn btn-sort_title" onClick={() => sortBy('titleBook')}>
                <i className="fas fa-sort-alpha-up">По книге</i>
            </button>
            <button className="btn btn-sort_author" onClick={() => sortBy('authorBook')}>
                <i className="fas fa-sort-alpha-up">По автору</i>
            </button>
        </div>
    )
};

export default SortButton