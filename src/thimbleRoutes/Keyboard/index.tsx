import React from 'react';
import { ExampleTextSection } from './components/ExampleTextSection';
import { HomeLinkSection } from './components/HomeLinkSection';
import { KeyboardTouchSection } from './components/KeyboardTouchSection';

import "./style.css"

export const Keyboard:React.FC<{appBarAdjustment: string}> = ({appBarAdjustment}) => {
    return (
        <div id="keyboardViewHeight">
            <div id='keyboardPage' style={{height: appBarAdjustment}}>
                <HomeLinkSection />
                <ExampleTextSection />
                <KeyboardTouchSection />
            </div>
        </div>
    )
}