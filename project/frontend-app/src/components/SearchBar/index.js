import React, {useState} from 'react';

const SearchBar = ({onSearch}) => {
    const initialState = '';
    const [text, setText] = useState(initialState);

    const onSearchChange = (e) => {
        const text = e.target.value;
        setText(text);
        onSearch(text);
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
