import React from 'react'

function AcceptPopup(props) {
    const { popupStateHandler, info, show,
        confirmHandler, cancelHandler } = props



    return (
        <div className={'popup-container'}
            style={{
                visibility: show ? 'visible' : 'hidden',
                opacity: show ? 1 : 0
            }}>
            <div className={'popup-cover'}>
                <p className={'popup-info'}>{info}</p>
                <button className={'popup-close-btn'} onClick={popupStateHandler}>&times;</button>

                <button className={'button-confirm'} onClick={confirmHandler}>Onayla</button>


                <button className={'button-cancel'} onClick={cancelHandler}>İptal</button>

            </div>

        </div>
    );
}

export default AcceptPopup