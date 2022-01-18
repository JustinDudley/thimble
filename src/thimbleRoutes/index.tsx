import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home/home';
import { Keyboard } from './Keyboard/keyboard';

export const ThimbleRoutes: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='keyboard' element={<Keyboard />} />
            </Routes>
        </BrowserRouter>
    )
}
