import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchText} from "../../actions/books";

//TODO: Доделать компонент
export default class SearchBar extends React.Component {

    onKeyUp = (e) => {
        this.props.onKeyUp(e.target.value)
    };

    render() {

        return (
            <div className={'search-bar'}>
                <input type="search"
                       onKeyUp={this.onKeyUp}
                       placeholder={'Введите...'}
                />
            </div>
        )
    }
}