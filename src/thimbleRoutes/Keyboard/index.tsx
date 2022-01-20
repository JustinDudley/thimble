import React from 'react';
import { AllButHomeLink } from './AllButHomeLink';
import { HomeLinkSection } from './components/HomeLinkSection';

import "./style.css"

export const Keyboard:React.FC = () => {
    return (
        <div id='keyboardPage'>
            <HomeLinkSection />
            <AllButHomeLink />     
        </div>
    )
}