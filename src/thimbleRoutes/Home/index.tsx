import React from 'react';
import { Link } from 'react-router-dom';

import "./style.css"

export const Home: React.FC  = () => {
    return (
        <div id='home'>
            <div>Welcome to THIMBLE !</div>
            <nav>
                <Link to="/keyboard">get started</Link>
            </nav>
      </div>
    )
}