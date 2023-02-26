import React from 'react'
import { Outlet, Link } from "react-router-dom";

import logo from '../../assets/logo2.png';

import './footer.css';

const footer = () => {
    return (
        <div className='campus__footer section__padding'>
            <div className='campus__footer-links'>
                <div className="campus__footer-links_logo">
                    <img src={logo} alt="campus_logo" />
                </div>

                <div className="campus__footer-links_div">
                    <h4>Links</h4>
                    <p>
                        <Link to="/">Forside</Link>
                    </p>
                    <p>
                        <Link to="/contact">Kontakt</Link>
                    </p>
                    <p>
                        <Link to="/players">Spillere</Link>
                    </p>
                    <p>
                        <Link to="/blog">Blog</Link>
                    </p>
                </div>
                <div className="campus__footer-links_div">
                    <h4>Kontakt os</h4>
                    <p>Rødegårdsvej 202, 5230 Odense</p>
                    <p>28707102</p>
                    <p>bestyrelse@fccampus.dk</p>
                </div>
            </div>
            <div className="campus__footer-copyright">
                <p>@2023 FC Campus. All rights reserved.</p>
            </div>
        </div>
    )
}

export default footer