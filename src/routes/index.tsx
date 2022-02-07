import React from 'react';
import {
   BrowserRouter,
   Route,
   Routes as RouterDomRoutes,
} from 'react-router-dom';
import { Home } from './Home';
import { Keyboard } from './Keyboard';

export const Routes: React.FC = () => {
   return (
      <BrowserRouter>
         <RouterDomRoutes>
            <Route path="/" element={<Home />} />
            <Route path="keyboard" element={<Keyboard />} />
         </RouterDomRoutes>
      </BrowserRouter>
   );
};
