import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { Keyboard } from './keyboard';

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
