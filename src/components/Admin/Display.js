import { React, useState } from 'react'
import Card from '../UI/Card';
import SearchBar from '../UI/SearchBar';

import "./../Home/Home.css";

function Display(props) {

    const { listOfHaliSaha } = props

    const [inputText, setInputText] = useState('')

    const inputHandler = (input) => {
        setInputText(input);
    };
    const clearSearchHandler = () => {
        setInputText('')
    }
    return (
        <>
            <h1>Eklenen Halı Sahalar</h1>


<div className={'list-container'}>
                <ul className={'list-ul'}>
                    {
                        listOfHaliSaha.map((element) =>
                            <li className={'list-li'} key={element.id}>
                                <div className={'list-element'}
                                    onClick={() => {
                                        props.chosenElementHandler(element)
                                        
                                    }}>
                                    <Card image={element.image} description={element.name} />
                                </div>
                            </li>
                        )}

                </ul>
            </div>
        </>
    )
}

export default Display