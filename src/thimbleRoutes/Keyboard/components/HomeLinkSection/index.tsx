import React from 'react'
import { Link } from 'react-router-dom'

import "./style.css"

export const HomeLinkSection: React.FC = () => {
    return (
        <nav>
            <Link to="/" id='linkSection'>{'<-- back to Home Page'}</Link>
        </nav>
    )
}