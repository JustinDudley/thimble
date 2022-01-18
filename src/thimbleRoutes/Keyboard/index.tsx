import React from 'react';
import { Link } from 'react-router-dom';

export const Keyboard:React.FC = () => {
    return (
        <div>
            <div>hello from Keyboard</div>
            <div>
                <nav
                    style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem"
                    }}
                >
                    <Link to="/">go to Home</Link>
                </nav>
            </div>
      </div>
    )
}