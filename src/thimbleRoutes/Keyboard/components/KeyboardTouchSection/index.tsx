import React, { useState } from 'react'
import { WholeKey } from '../WholeKey'

import './style.css'

export const KeyboardTouchSection: React.FC = () => {
    const lettersTop = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
    const lettersMiddle = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
    const lettersBottom = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    const spaceRow = [',', ' ', '.']

    const [keyboardCount, setKeyboardCount] = useState(0);

    return (
        <>
            <div 
                id='keyboard-touch-section'
                onClick={() => setKeyboardCount(keyboardCount + 1)}
            >
                <div className='keyboard-row'>
                    {lettersTop.map((letter) => <WholeKey letter={letter} keyboardCount={keyboardCount} />)}
                </div>
                <div className='keyboard-row'>
                    {lettersMiddle.map((letter) => <WholeKey letter={letter} keyboardCount={keyboardCount} />)}
                </div>
                <div className='keyboard-row'>
                    {lettersBottom.map((letter) => <WholeKey letter={letter} keyboardCount={keyboardCount} />)}
                </div>
                <div className='keyboard-row'>
                    {spaceRow.map((letter) => <WholeKey letter={letter} keyboardCount={keyboardCount} />)}
                </div>
            </div>
        </>
    )
}
