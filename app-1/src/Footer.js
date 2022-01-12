import React from 'react'
import './Footer.css'
import tmdb from './assets/images/logo-tmdb.svg'

function Footer() {
    return (
        <footer className='footer'>
            <div>
                <p className='footer_p'>
                    Copyright © 2022. Movind, Inc. 
                </p>
                <img className='footer_logo' src={tmdb} alt='logo TMDB' ></img>
            </div>
            
            
        </footer>
    )
}

export default Footer
