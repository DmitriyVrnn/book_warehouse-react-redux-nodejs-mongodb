import React, {useState} from 'react';

const SearchBar = (props) => {
    const initialState = '';
    const [text, setText] = useState(initialState);

    const onSearchChange = (e) => {
        const text = e.target.value;
        setText(text);
        props.onSearchChange(text);
    };

    return (
        <div className={'search-bar'}>
            <input type="search"
                   value={text}
                   onChange={onSearchChange}
                   placeholder={'Введите название книги...'}
            />
        </div>
    )
};

export default SearchBar;


/*export default class SearchBar extends React.Component {

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
}*/