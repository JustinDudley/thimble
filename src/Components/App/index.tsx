import React from 'react';
// import logo from '../../logo.svg';
import { Home } from '../../routes/home';
import { Keyboard } from '../../routes/keyboard';
import './index.css';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='keyboard' element={<Keyboard />} />


        {/* <Home></Home>
        <Keyboard></Keyboard> */}
      </Routes>
    </BrowserRouter>
    // <div>hello from App/index</div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
