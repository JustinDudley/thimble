import React, { useState } from 'react';
import { colors } from '../../../../helpers/jsColors';

import TargetLogo from '../../../../assets/images/target-logo.svg'
import './style.css'

// this file, and CSS file, assume a 4x4=16 miniBoxes in each wholeKey
const keyWidth = 9.5;
const spaceWidth = 47;
const targetMult = 4; //How many times wider the target logo is than the width of the miniBox

const MiniBox: React.FC<{letter: string; count: number}> = ({letter, count}) => {
    const numMiniShown = 5;
    const [isClicked, setIsClicked] = useState(false);
    const [miniCount, setMiniCount] = useState(0);

    return (
        <div 
            id="mini-box" 
            onClick={() => {
                setIsClicked(true);
                setMiniCount(count); 
            }}
            style={{backgroundColor: isClicked && count === miniCount + 1? colors.purpleFeedback : isClicked && count - (miniCount + 1) < numMiniShown? colors.purpleFaded:'inherit'}}
        >
            {isClicked && <img src={TargetLogo} alt='target logo' style={{position: 'absolute', top: `-${1.5 * keyWidth/4}vw`, left: `-${1.5 * keyWidth/4}vw`, width: `${letter === ' '? (targetMult * 100) * keyWidth/spaceWidth : (targetMult * 100)}%`}} />}
        </div>
    )
}

export const WholeKey: React.FC<{letter: string}> = ({letter}) => {
    const miniBoxes = new Array(16).fill('')
    const [count, setCount] = useState(0)

    return (
        <div 
            id="whole-key"
            style={{ width: letter === ' '? `${spaceWidth}vw`: `${keyWidth}vw`}}
            onClick={() => {setCount(count + 1);console.log(count)}}
        >
            {miniBoxes.map(() => <MiniBox letter={letter} count={count} />)}
            <div id='shown-key'>{letter}</div> 
        </div>
    )
}