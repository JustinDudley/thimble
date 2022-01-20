import React from 'react'
import { LetterBox } from '../LetterBox'

import './style.css'

export const KeyboardTouchSection: React.FC = () => {
    return (
        <>
            <div id='keyboardTouchSection'>hello from keyboardTouchSection</div>
            <div id='keyboardRow'>
                <LetterBox />
                <LetterBox />
            </div>
        </>
    )
}