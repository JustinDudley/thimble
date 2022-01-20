import React from 'react';
import { ExampleTextSection } from './components/ExampleTextSection';
import { KeyboardTouchSection } from './components/KeyboardTouchSection';

export const AllButHomeLink: React.FC = () => {
    return (
        <>
            <ExampleTextSection />
            <KeyboardTouchSection />
        </>
    )
}