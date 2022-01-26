import React, { useState } from 'react';
import { colors } from '../../../../helpers/jsColors';

import './style.css'

const MiniBox: React.FC<{count: number}> = ({count}) => {
    const numMiniShown = 4;
    const [isClicked, setIsClicked] = useState(false);
    const [miniCount, setMiniCount] = useState(0);

    return (
        <div 
            id="mini-box" 
            onClick={() => {
                setIsClicked(true);
                setMiniCount(count); 
            }}
            style={{backgroundColor: isClicked && count === miniCount + 1? colors.purpleFeedback : isClicked && count - (miniCount + 1) < numMiniShown? colors.purpleFaded: 'inherit'}}
        />
    )
}

export const WholeKey: React.FC<{letter: string}> = ({letter}) => {
    const miniBoxes = new Array(16).fill('')
    const [count, setCount] = useState(0)

    return (
        <div 
            id="whole-key"
            style={{ width: letter === ' '? '47vw': '9.5vw'}}
            onClick={() => {setCount(count + 1);console.log(count)}}
        >
            {miniBoxes.map(() => <MiniBox count={count} />)}
            <div id='shown-key'>{letter}</div> 
        </div>
    )
}