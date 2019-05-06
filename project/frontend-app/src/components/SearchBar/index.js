import React from 'react'

//TODO: Доделать компонент
export default class SearchBar extends React.Component{

    onKeyUp = (e) => {
        this.props.onKeyUp(e.target.value)
    }

    render(){
        return(
            <div className={'search-bar'}>
                <input type="search"
                       onKeyUp={this.onKeyUp}
                       placeholder={'Введите...'}
                />
            </div>
        )
    }
}