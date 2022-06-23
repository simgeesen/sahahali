import React, { useState } from 'react';
import Card from "../UI/Card";
import Detail from "./Detail"
import "./Home.css"
import SearchBar from '../UI/SearchBar';


const Home = (props) => {
    const { user, listOfHaliSaha, onAddReservationHandler, triggerPopup } = props


    const [detailPanelStatus, setDetailPanelStatus] = useState(false)
    const [chosenElement, setChosenElement] = useState({})




    const onConfirmationHandler = () => {
        onAddReservationHandler(chosenElement)
    }


    const detailPanelToggler = () => {
        setDetailPanelStatus(!detailPanelStatus)
    }

    const chosenElementHandler = (element) => {
        setChosenElement(element)
        detailPanelToggler()
    }


    return (
        <div className={'home-container'}>
            {detailPanelStatus &&
                <Detail
                    user={user}
                    detailPanelToggler={detailPanelToggler}
                    chosenElement={chosenElement}
                    onConfirmationHandler={onConfirmationHandler}
                    triggerPopup={triggerPopup}
                />}
            {!detailPanelStatus &&
            <div className={'list-container'}>
                <ul className={'list-ul'}>
                    {
                        listOfHaliSaha.map((element) =>
                            <li className={'list-li'} key={element.id}>
                                <div className={'list-element'}
                                    onClick={() => {
                                        chosenElementHandler(element)
                                        
                                    }}>
                                    <Card description={element.name} />
                                </div>
                            </li>
                        )}

                </ul>
            </div>
}
            </div>
    );
};

export default Home;
