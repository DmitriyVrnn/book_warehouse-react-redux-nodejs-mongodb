import React from 'react'

export default class SortButton extends React.Component {

    render() {
        return (
            <div>
                <button onClick={() => this.props.sortBy('titleBook')}>
                    Сортировка по имени
                </button>
                <button onClick={() => this.props.sortBy('authorBook')}>
                    Сортировка по автору
                </button>
            </div>
        )
    }
}