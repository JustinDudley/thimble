import React from 'react';
import { Link } from 'react-router-dom';

import "./style.css"

export const Home: React.FC<{appBarAdjustment: string}>  = ({appBarAdjustment}) => {
    return (
        <div id="homeViewHeight">
            <div id='homePage' style={{height: appBarAdjustment}}>
                <div id='welcome'>Welcome to THIMBLE</div>
                <nav id='navButton'>
                    <Link to="/keyboard" id='linkInHome'>get started</Link>
                </nav>
            </div>
      </div>
    )
}