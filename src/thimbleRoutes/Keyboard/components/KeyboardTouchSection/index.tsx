import React from 'react'
import { LetterBox } from '../LetterBox'

import './style.css'

export const KeyboardTouchSection: React.FC = () => {
    const lettersTop = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
    const lettersMiddle = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
    const lettersBottom = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    const spaceRow = [',', ' ', '.']

    return (
        <>
            <div id='keyboardTouchSection'>
                <div className='keyboardRow'>
                    {lettersTop.map((letter) => <LetterBox letter={letter} />)}
                </div>
                <div className='keyboardRow'>
                    {lettersMiddle.map((letter) => <LetterBox letter={letter} />)}
                </div>
                <div className='keyboardRow'>
                    {lettersBottom.map((letter) => <LetterBox letter={letter} />)}
                </div>
                <div className='keyboardRow'>
                    {spaceRow.map((letter) => <LetterBox letter={letter} />)}
                </div>
            </div>
        </>
    )
}
