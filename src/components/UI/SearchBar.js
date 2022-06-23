import React from 'react'
import "./SearchBar.css"

function SearchBar(props) {
    const { inputHandler, inputText, clearSearchHandler } = props


    const onInputChangeHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        inputHandler(lowerCase)
    }

    const onClearClickedHandler = () => {
        clearSearchHandler()
    }

    return (
        <div className={'search-bar-wrapper'}>
            <input
                className={'search-bar'}
                value={inputText ?? ""}
                type={'text'}
                placeholder={'Ara'}
                onChange={onInputChangeHandler} />

            <button className={'search-bar-clear-btn'} onClick={onClearClickedHandler}>&times;</button>
        </div>
    )
}

export default SearchBar