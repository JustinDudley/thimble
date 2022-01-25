import React, { useState } from 'react';
import { colors } from '../../../../helpers/jsColors';

import './style.css'

const Mini: React.FC<{count: number}> = ({count}) => {
    const numShown = 4;
    const [isClicked, setIsClicked] = useState(false);
    const [miniCount, setMiniCount] = useState(0);

    return (
        <div 
            id="mini" 
            onClick={() => {
                setIsClicked(true);
                setMiniCount(count); 
            }}
            style={{backgroundColor: isClicked && count === miniCount + 1? colors.purpleFeedback : isClicked && count - (miniCount + 1) < numShown? colors.purpleFaded: 'inherit'}}
        />
    )
}

export const LetterBox: React.FC<{letter: string}> = ({letter}) => {
    const array_15 = new Array(15).fill('')
    const [count, setCount] = useState(0)

    return (
        <div 
            id="letterBox"
            onClick={() => {setCount(count + 1);console.log(count)}}
        >
            {array_15.map(() => <Mini count={count} />)}
            <div id='theLetter'>{letter}</div> 
            {/* <img style={{position: 'absolute', top: '20%', left: '20%', width: '60%', height: '60%' , zIndex: '-2'}} src={require("../../../../assets/images/letter_D.png")} alt='letter' width='100%' height='100%' /> */}
            
        </div>
    )
}

// ugh redundant code
// export const SpaceBox: React.FC<{letter: string}> = ({letter}) => {
//     const array_15 = new Array(15).fill('')
//     const [count, setCount] = useState(0)

//     return (
//         <div 
//             id="spaceBox"
//             onClick={() => {setCount(count + 1);console.log(count)}}
//         >
//             <div id="letterInset" />
//             <div id='theLetter'>{letter}</div> 
//             {/* <img style={{position: 'absolute', top: '20%', left: '20%', width: '60%', height: '60%' , zIndex: '-2'}} src={require("../../../../assets/images/letter_D.png")} alt='letter' width='100%' height='100%' /> */}
            
//             {array_15.map(() => <Mini count={count} />)}
//         </div>
//     )
// }
