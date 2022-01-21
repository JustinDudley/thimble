import React, { useState } from 'react';

import './style.css'

const Mini: React.FC = () => {

    const [isClicked, setIsClicked] = useState(false);

    return (
        <div 
            id="mini" 
            onClick={() => {console.log('mini clicked'); setIsClicked(true);}}
            style={{backgroundColor: isClicked? 'red': 'inherit'}}
        />
    )
}

export const LetterBox: React.FC = () => {
    return (
        <div id="letterBox">
            <div id="letterShadow" />

            <div id='theLetter'>k</div> 
            {/* <img style={{position: 'absolute', top: '20%', left: '20%', width: '60%', height: '60%' , zIndex: '-2'}} src={require("../../../../assets/images/letter_D.png")} alt='letter' width='100%' height='100%' /> */}
            
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini /> 
        </div>
    )
}

