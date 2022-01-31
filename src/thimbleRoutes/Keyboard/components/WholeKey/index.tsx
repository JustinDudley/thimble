import React, { useState } from 'react';
import { colors } from '../../../../helpers/jsColors';

import TargetLogo from '../../../../assets/images/target-logo.svg'
import './style.css'

// this file, and especially CSS file, assume a 3x3=9 miniBoxes in each wholeKey
const numMinisInRow = 3;
const numMinisInColumn = 3;
const keyWidth = 9.5; // need space for 10 keys, so each is slightly less than 10% view-width
const spaceWidth = 47;

const MiniBox: React.FC<{letter: string; keyCount: number; position: number; keyboardCount: number; gradientRecord: number[]; setGradientRecord: React.Dispatch<React.SetStateAction<number[]>>
}> = ({letter, keyCount, keyboardCount, position, gradientRecord, setGradientRecord}) => {
    const numMiniToShow = 3; //save
    const numTargetsToShow = 2;
    const [isClicked, setIsClicked] = useState(false);
    const [miniCount, setMiniCount] = useState(0); //save
    const [keyBoardCountSnapshot, setKeyboardCountSnapshot] = useState(0);

    return (
        <div 
            id="mini-box" 
            onClick={() => {
                setIsClicked(true);
                setMiniCount(keyCount); 
                setKeyboardCountSnapshot(keyboardCount);
                //refactor:
                setGradientRecord(gradientRecord.map((element, index) => {
                    if (index === position) {
                        element = element + 1
                    }
                    return element
                }))
            }}
            // SAVE BELOW:  This sets the colors for my follow-the-leader purple:
            // style={{backgroundColor: isClicked && keyCount === miniCount + 1? colors.purpleFeedback : isClicked && keyCount - (miniCount + 1) < numMiniToShow? colors.purpleFaded:'inherit'}}
        >
            {isClicked && keyboardCount - numTargetsToShow <= keyBoardCountSnapshot && <img 
                src={TargetLogo} 
                alt='target logo' 
                style={{
                    position: 'absolute', 
                    // move center of target (1) to left and top of MiniBox, then (2) to centerpoint of MiniBox
                    left: letter === ' ' ? `${keyWidth * (-0.5) + (0.5 * spaceWidth)/numMinisInRow}vw` : `${keyWidth * (-0.5) + (0.5 * keyWidth)/numMinisInRow}vw`,
                    top: `calc(-${keyWidth * 0.5}vw + 50%)`,
                    width: `${keyWidth}vw`, 
                    pointerEvents: 'none',
                    opacity: keyboardCount - 1 === keyBoardCountSnapshot? 1: 0.3,
                    zIndex: '1'                  
                }} 
            />}
        </div>
    )
}

export const WholeKey: React.FC<{letter: string; keyboardCount: number;}> = ({letter, keyboardCount}) => {
    const miniBoxes = [0,1,2,3,4,5,6,7,8]
    const [keyCount, setKeyCount] = useState(0)
    const [gradientRecord, setGradientRecord] = useState([0,0,0,0,0,0,0,0,0]);

    const max = Math.max(...gradientRecord)
    const highestIndex = gradientRecord.indexOf(max)

    // refactor these 4 lines?
    let direction = '';
    if (max === 0) {
        direction = '';
    }
    else {
        switch(highestIndex) {
            case 0: direction = 'left top'; break;
            case 1: direction = 'top'; break;
            case 2: direction = 'right top'; break;
            case 3: direction = 'top'; break;
            case 4: direction = ''; break; //center gets clicked OR key has not yet been clicked at all
            case 5: direction = 'right'; break;
            case 6: direction = 'right bottom'; break;
            case 7: direction = 'bottom'; break;
            case 8: direction = 'right bottom';
        }
    }

    return (
        <div 
            id="whole-key"
            style={{ width: letter === ' '? `${spaceWidth}vw`: `${keyWidth}vw`}}
            onClick={() => {setKeyCount(keyCount + 1)}}
        >
            {miniBoxes.map((position) => <MiniBox position={position} letter={letter} keyCount={keyCount} keyboardCount={keyboardCount} gradientRecord={gradientRecord} setGradientRecord={setGradientRecord} />)}
            <div 
                id='shown-key'
                style={{background: direction === ''? '#E8E8E8' : `linear-gradient(to ${direction}, #E8E8E8 65%, #555)`}}
            >
                <div style={{zIndex: '1'}}>
                    {letter}
                </div>
            </div> 
        </div>
    )
}
