import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/navbar/ms-logo.svg'


export const Navbar = () => {
    return (
        <nav className="fixed-menu">

                <div className="nav container">
                    <div>
                        <Link to="/"><img src={Logo} alt='logo-multimedia-stars' className="nav-logo" /></Link>
                    </div>

                    <ul className="nav-menu">
                        <li><Link className="nav-item" to="/">Home</Link></li>
                        <li><Link className="nav-item" to="/services">Services</Link></li>
                        <li><Link className="nav-item" to="/about">About</Link></li>
                        <li><Link className="nav-item" to="/contact">Contact</Link></li>
                    </ul>
                </div>

        </nav>
    )
}
