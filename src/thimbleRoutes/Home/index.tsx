import React from 'react';
import { Link } from 'react-router-dom';

import "./style.css"

export const Home: React.FC  = () => {
    return (
        <div id='home'>
            <div id='welcome'>Welcome to THIMBLE</div>
            <div id='navButton'>
                <nav>
                    <Link to="/keyboard" style={{textDecoration: 'none', color: '#301D43'}}>get started</Link>
                </nav>
            </div>
      </div>
    )
}