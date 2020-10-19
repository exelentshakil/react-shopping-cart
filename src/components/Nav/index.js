import React from 'react'
import './nav.css'

// impor nav link

import { Link } from 'react-router-dom'

const index = () => {
    return (
        <div className="nav">
            <div className="logo">LOGO</div>
            <ul id="mainmenu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart(0)</Link></li>
            </ul>
        </div>
    )
}

export default index
