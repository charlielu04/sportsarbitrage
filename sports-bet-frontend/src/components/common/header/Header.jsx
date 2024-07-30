import React from 'react';
import { Navbar } from '../../common';
import './Header.css'
import logo from './logo.png';

function Header(){


    return (
        <section className="header">
        <section className="header-top">
          <section className="header-top__logo">
            <a href="/">
                <img src= {logo} alt = "Logo" className="logo"/>
            </a>
          </section>
          <section className="header-top__navbar">
            <section className="header-top__navigation">
              <Navbar />
            </section>
            <hr className="header-top__seperator" />
          </section>
        </section>
      </section>
    );

}

export default Header;