import React from 'react'

//TODO: Доделать компонент
export default class SearchBar extends React.Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render() {
        return (
            <div className={'search-bar'}>
                <input type="search"
                       value={this.state.term}
                       onChange={this.onSearchChange}
                       placeholder={'Введите название книги...'}
                />
            </div>
        )
    }
}