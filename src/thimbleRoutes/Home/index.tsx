import React from 'react';
import { Link } from 'react-router-dom';

import "./style.css"

export const Home: React.FC  = () => {
    return (
        <div id='home'>
            <div id='welcome'>Welcome to THIMBLE</div>
            <nav id='navButton'>
                <Link to="/keyboard" id='linkInHome'>get started</Link>
            </nav>
      </div>
    )
}