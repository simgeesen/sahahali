import React, { useState } from 'react';
import Info from '../UI/Info';
import Confirmation from "./Confirmation";
import './Detail.css'

const Detail = (props) => {

    const {
        detailPanelToggler,
        chosenElement,
        user,
        onConfirmationHandler,
        triggerPopup } = props

    const { chosenDates } = chosenElement


    const [confirmationStatus, setConfirmationStatus] = useState(false)

    const confirmationPanelHandler = () => {
        setConfirmationStatus(!confirmationStatus)
    }


    return (
        <div className={'panel-container'}>
            <>
                <Info
                    infoPanelToggler={detailPanelToggler}
                    chosenElement={chosenElement}
                />


                <button className={'panel-open-confirmation-btn'}
                    onClick={confirmationPanelHandler}
                >
                    {confirmationStatus ? 'Kapat' : 'Zaman Seç'}
                </button>
            </>

            {confirmationStatus &&
                <Confirmation
                    chosenDates={chosenDates}
                    user={user}
                    confPanelHandler={confirmationPanelHandler}
                    onConfirmationHandler={onConfirmationHandler}
                    triggerPopup={triggerPopup} />
            }
        </div>
    );
};

export default Detail;

