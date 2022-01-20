import React from 'react';
import { Link } from 'react-router-dom';

export const Keyboard:React.FC = () => {
    return (
        <div>
            <div>keyboard page</div>
            <nav>
                <Link to="/">go back to Home</Link>
            </nav>
      </div>
    )
}