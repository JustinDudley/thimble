import React from 'react';
import { Link } from 'react-router-dom';

import "./styles.css"

export const Home: React.FC  = () => {
    return (
        <div className='home'>
            <div>hello from home</div>
            <div>
                <nav
                    style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem"
                    }}
                >
                <Link to="/keyboard">go to Keyboard</Link>
                </nav>
            </div>
      </div>
    )
}