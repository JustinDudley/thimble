import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Keyboard } from './Keyboard';

export const ThimbleRoutes: React.FC = () => {

    const appBarAdjustment = '88%';

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home appBarAdjustment={appBarAdjustment}/>} />
                <Route path='keyboard' element={<Keyboard appBarAdjustment={appBarAdjustment}/>} />
            </Routes>
        </BrowserRouter>
    )
}
