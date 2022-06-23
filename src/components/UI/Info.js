import React from 'react'
import "./Info.css"

function Info(props) {
    const { infoPanelToggler, chosenElement } = props

    const { address, tel, name, price } = chosenElement
    return (
        <div className={'info-container'}>

            <div className={'info-title-wrapper'}>
                <p className={'info-title'}>{name}</p>
                    <button className={'info-close-btn'} onClick={infoPanelToggler}>&times;</button>

            </div>

            <div className={'info-item-wrapper'}>
                <div className={'info-text-wrapper'}>
                    <p className={'info-text'}>Adres: {address}</p>
                    <p className={'info-text'}>Tel: {tel}</p>
                    <p className={'info-text'}>Ücret: {price}₺</p>

                </div>
            </div>
        </div>
    )
}

export default Info