import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const initialState = '';
  const [text, setText] = useState(initialState);

  const onSearchChange = (e) => {
    setText(e.target.value);
    onSearch(text);
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        value={text}
        onChange={onSearchChange}
        placeholder="Введите название книги..."
      />
    </div>
  );
};
export default SearchBar;

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
