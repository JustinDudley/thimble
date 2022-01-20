import React, { useState } from 'react';

import './style.css'

const Mini: React.FC = () => {

    const [isClicked, setIsClicked] = useState(false);

    return (
        <div 
            id="mini" 
            onClick={() => {console.log('mini clicked'); setIsClicked(true);}}
            style={{backgroundColor: isClicked? 'red': 'inherit'}}
        >
            x
        </div>
    )
}

const MiniRow: React.FC = () => {
    return (
        <div id='miniRow'>
            <Mini />
            <Mini />
            <Mini />
        </div>
    )
}

export const LetterBox: React.FC = () => {
    return (
        <div id="letterBox">
            <MiniRow />
            <MiniRow />
            <MiniRow />
            <MiniRow />
            <MiniRow />
        </div>
    )
}

