import React from 'react'
import { LetterBox } from '../LetterBox'

import './style.css'

export const KeyboardTouchSection: React.FC = () => {
    const array_4 = new Array(4).fill('');
    const topRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
    const middleRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
    const bottomRow = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

    return (
        <>
            <div id='keyboardTouchSection'>
                {/* hello from keyboardTouchSection */}
                <div id='keyboardRow'>
                    {array_4.map(() => <LetterBox />)}
                </div>
            </div>
        </>
    )
}