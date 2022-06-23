import React from 'react';
import './Card.css'

const Card = ({ image, description }) => {

    return (
        <div className={'card-container'}>

            <p className={'card-info'}>{description}</p>

        </div>
    );
};

export default Card;
