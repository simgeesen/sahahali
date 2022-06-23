import React from 'react';
import './Popup.css'
const Popup = (props) => {

    const { popupStateHandler, info, show } = props



    return (
        <div className={'popup-container'}
            style={{
                visibility: show ? 'visible' : 'hidden',
                opacity: show ? 1 : 0
            }}>
            <div className={'popup-cover'}>
                <p className={'popup-info'}>{info}</p>
                <button className={'popup-close-btn'} onClick={popupStateHandler}>&times;</button>

            </div>

        </div>
    );
};

export default Popup;
