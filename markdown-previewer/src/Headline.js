import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import './headline-style.css'

function Headline({text,handleClick}){
    return (
        <div class="headline">
            <div class="text">{text}</div>
            <button class="icon" onClick={handleClick} ><FontAwesomeIcon icon={faArrowsAlt}/></button>
        </div>
    );
}
export default Headline;