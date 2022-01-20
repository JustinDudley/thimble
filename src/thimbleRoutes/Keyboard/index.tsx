import React from 'react';
import { ExampleTextSection } from './components/ExampleTextSection';
import { HomeLinkSection } from './components/HomeLinkSection';
import { KeyboardTouchSection } from './components/KeyboardTouchSection';

import "./style.css"

export const Keyboard:React.FC = () => {
    return (
        <div id='keyboardPage'>
            <HomeLinkSection />
            <ExampleTextSection />
            <KeyboardTouchSection />
        </div>
    )
}