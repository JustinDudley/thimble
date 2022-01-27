import React, { useState } from 'react';
import { colors } from '../../../../helpers/jsColors';

import TargetLogo from '../../../../assets/images/target-logo.svg'
import './style.css'

// this file, and CSS file, assume a 3x3=9 miniBoxes in each wholeKey
const numMinisInRow = 3;
const numMinisInColumn = 3;
const keyWidth = 9.5; // need space for 10 keys, so each is slightly less than 10% view-width
const spaceWidth = 47;

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
            style={{backgroundColor: isClicked && count === miniCount + 1? colors.purpleFeedback : isClicked && count - (miniCount + 1) < numMiniShown? colors.purpleFaded:'gray'}}
        >
            {isClicked && <img 
                src={TargetLogo} 
                alt='target logo' 
                style={{
                    position: 'absolute', 
                    top: `calc(${-9.5 * 0.5}vw + 50%)`,
                    left: `${9.5 * (-0.5 + 0.5/numMinisInRow)}vw`,
                    width: `${keyWidth}vw`, 
                    pointerEvents: 'none'
                }} 
            />}
        </div>
    )
}

export const WholeKey: React.FC<{letter: string}> = ({letter}) => {
    const miniBoxes = new Array(numMinisInRow * numMinisInColumn).fill('')
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