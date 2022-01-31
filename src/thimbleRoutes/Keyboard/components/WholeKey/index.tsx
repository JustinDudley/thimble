import React, { useState } from 'react';
import { colors } from '../../../../helpers/jsColors';

import TargetLogo from '../../../../assets/images/target-logo.svg'
import './style.css'

// this file, and especially CSS file, assume a 3x3=9 miniBoxes in each wholeKey
const numMinisInRow = 3;
const numMinisInColumn = 3;
// Beware: keyWidth and spaceWidth have corresponding CSS variables in style.css
const keyWidth = 9.5; // need space for 10 keys, so each is slightly less than 10% view-width
const spaceWidth = 47;

const MiniBox: React.FC<{letter: string; keyCounter: number; miniBoxId: number; keyboardCounter: number; gradientRecord: number[]; setGradientRecord: React.Dispatch<React.SetStateAction<number[]>>
}> = ({letter, keyCounter, keyboardCounter, miniBoxId, gradientRecord, setGradientRecord}) => {
    const numMinisToShow = 3; //save
    const [miniCounter, setMiniCounter] = useState(0); //save

    const numTargetsToShow = 2;
    const [isClicked, setIsClicked] = useState(false);
    const [keyBoardCounterSnapshot, setKeyboardCounterSnapshot] = useState(0);

    return (
        <div 
            id="mini-box" 
            onClick={() => {
                setIsClicked(true);
                setKeyboardCounterSnapshot(keyboardCounter);
                setGradientRecord(() => {
                    gradientRecord[miniBoxId] = gradientRecord[miniBoxId] + 1;
                    return gradientRecord;
                })
                // setMiniCounter(keyCounter); //save

            }}
            // SAVE BELOW:  This sets the colors for my follow-the-leader purple:
            // style={{backgroundColor: isClicked && keyCounter === miniCounter + 1? colors.purpleFeedback : isClicked && keyCounter - (miniCounter + 1) < numMinisToShow? colors.purpleFaded:'inherit'}}
        >
            {isClicked && keyboardCounter - numTargetsToShow <= keyBoardCounterSnapshot && <img 
                src={TargetLogo} 
                alt='target logo' 
                style={{
                    position: 'absolute', 
                    // move center of target (1) to left and top of MiniBox, then (2) to centerpoint of MiniBox
                    left: letter === ' ' ? `${keyWidth * (-0.5) + (0.5 * spaceWidth)/numMinisInRow}vw` : `${keyWidth * (-0.5) + (0.5 * keyWidth)/numMinisInRow}vw`,
                    top: `calc(-${keyWidth * 0.5}vw + 50%)`,
                    width: `${keyWidth}vw`, 
                    pointerEvents: 'none',
                    opacity: keyboardCounter - 1 === keyBoardCounterSnapshot? 1: 0.3,
                    zIndex: '1'                  
                }} 
            />}
        </div>
    )
}

export const WholeKey: React.FC<{letter: string; keyboardCounter: number;}> = ({letter, keyboardCounter}) => {
    const miniBoxIds = [0,1,2,3,4,5,6,7,8]
    const [keyCounter, setKeyCounter] = useState(0)
    const [gradientRecord, setGradientRecord] = useState([0,0,0,0,0,0,0,0,0]);

    const mostPresses = Math.max(...gradientRecord)
    const mostPressedMiniBox = gradientRecord.indexOf(mostPresses)

  let direction = '';
  if (mostPresses !== 0) {
        switch(mostPressedMiniBox) {
            case 0: direction = 'left top'; break;
            case 1: direction = 'top'; break;
            case 2: direction = 'right top'; break;
            case 3: direction = 'left'; break;
            case 4: direction = ''; break; //center gets clicked OR key has not yet been clicked at all
            case 5: direction = 'right'; break;
            case 6: direction = 'left bottom'; break;
            case 7: direction = 'bottom'; break;
            case 8: direction = 'right bottom';
        }
    }

    return (
        <div 
            className={letter === ' '? 'space' : 'key'}
            id="whole-key"
            onClick={() => {setKeyCounter(keyCounter + 1)}}
        >
            {miniBoxIds.map((miniBoxId) => <MiniBox key={miniBoxId} miniBoxId={miniBoxId} letter={letter} keyCounter={keyCounter} keyboardCounter={keyboardCounter} gradientRecord={gradientRecord} setGradientRecord={setGradientRecord} />)}
            <div 
                id='shown-key'
                style={{background: direction === ''? '#E8E8E8' : `linear-gradient(to ${direction}, #E8E8E8, 85%, #888)`}}
            >
                <div style={{zIndex: '1'}}>
                    {letter}
                </div>
            </div> 
        </div>
    )
}
