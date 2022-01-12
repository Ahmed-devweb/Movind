import React from 'react'
import { Link } from "react-router-dom";
import logo from './assets/images/logo-movind.PNG'
import './Header.css'


function Header({headerlink,headerlinkname}) {
    return (
        <header className='header'>
            <nav className='nav'>
                <img  className='logo_img' src={logo} alt='logo de movind'></img>
                <ul className='nav_list'>
                    <li><Link to={headerlink}>{headerlinkname}</Link></li>
                </ul>
            </nav>
            
        </header>
        
        
    )
}

export default Header
