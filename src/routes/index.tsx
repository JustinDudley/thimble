import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as RouterDomRoutes,
} from 'react-router-dom';
import { Home } from './Home';
import { Keyboard } from './Keyboard';

export const Routes: React.FC = () => {
  const appBarAdjustment = '88%';

  return (
    <BrowserRouter>
      <RouterDomRoutes>
        <Route
          path="/"
          element={<Home appBarAdjustment={appBarAdjustment} />}
        />
        <Route
          path="keyboard"
          element={<Keyboard appBarAdjustment={appBarAdjustment} />}
        />
      </RouterDomRoutes>
    </BrowserRouter>
  );
};
