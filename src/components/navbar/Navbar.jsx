import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Outlet, Link } from 'react-router-dom';
import logo from '../../assets/logo2.png'
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <div className='campus__navbar'>
                <div className='campus__navbar-links'>
                    <div className='campus__navbar-links_logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='campus__navbar-links_container'>
                        <p><Link to="/">Forside</Link></p>
                        <p><Link to="/players">Spillere</Link></p>
                        <p><Link to="/contact">Kontakt</Link></p>
                        <p><Link to="/blog">Nyheder</Link></p>
                    </div>
                </div>
                <div className='campus__navbar-sign'>
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
                </div>
                <div className='campus__navbar-menu'>
                    {toggleMenu
                        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className='campus__navbar-menu_container scale-up-center'>
                            <div className='campus__navbar-menu_container-links'>
                                <p><Link to="/">Forside</Link></p>
                                <p><Link to="/players">Spillere</Link></p>
                                <p><Link to="/contact">Kontakt</Link></p>
                                <p><Link to="/blog">Nyheder</Link></p>
                                <div className='campus__navbar-menu_container-links-sign'>
                                    <p>Sign in</p>
                                    <button type="button">Sign up</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar