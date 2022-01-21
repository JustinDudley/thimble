import React from 'react'
import { LetterBox } from '../LetterBox'

import './style.css'

export const KeyboardTouchSection: React.FC = () => {
    const array_4 = new Array(4).fill('');

    return (
        <>
            <div id='keyboardTouchSection'>
                hello from keyboardTouchSection
            <div id='keyboardRow'>
                {array_4.map(() => <LetterBox />)}
            </div>
            </div>
        </>
    )
}