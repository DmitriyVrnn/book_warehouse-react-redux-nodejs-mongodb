import React from 'react'

export default class SortButton extends React.Component {

    render() {
        return (
            <div className="btn-sort-table">
                <button className="btn btn-sort_title" onClick={() => this.props.sortBy('titleBook')}>
                    <i className="fas fa-sort-alpha-up">По книге</i>
                </button>
                <button className="btn btn-sort_author" onClick={() => this.props.sortBy('authorBook')}>
                    <i className="fas fa-sort-alpha-up">По автору</i>
                </button>
            </div>
        )
    }
}