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
    const miniBoxes = new Array(15).fill('')
    const [count, setCount] = useState(0)

    return (
        <div 
            id="whole-key"
            style={{ width: letter === ' '? '47vw': '9.5vw'}}
            onClick={() => {setCount(count + 1);console.log(count)}}
        >
            {miniBoxes.map(() => <MiniBox count={count} />)}
            <div id='shown-key'>{letter}</div> 
            {/* <img style={{pointerEvents: 'none', position: 'absolute', top: '5%', left: '5%', width: '90%', height: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '6px', boxSizing: 'border-box', border: '1px solid black'}} src={require("../../../../assets/images/letter_D.png")} alt='letter' width='100%' height='100%' /> */}
        </div>
    )
}