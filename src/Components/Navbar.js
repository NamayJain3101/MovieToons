import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { NavLinksData } from '../Context/NavLinksData'

export default class Navbar extends Component {

    closeNavbar = () => {
        document.querySelector('.toggler').checked = false;
    }

    render() {
        return (
            <NavWrapper>
                <nav id="main-nav">
                    <h1><span>MOVIETOONS</span></h1>
                    <ul>
                        {
                            NavLinksData.map(link => {
                                return (
                                    <li key={link.id}>
                                        <Link to={link.path}>
                                            {link.icon}
                                            {link.text.toUpperCase()}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <div className="menu-wrap">
                    <input type="checkbox" className="toggler" />
                    <div className="hamburger"><div></div></div>
                    <div className="menu">
                        <div>
                            <div>
                                <ul>
                                    {
                                        NavLinksData.map(link => {
                                            return (
                                                <li key={link.id} onClick={this.closeNavbar}>
                                                    <Link to={link.path}>
                                                        {link.icon}
                                                        {link.text.toUpperCase()}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.header`
    /* color: black; */
    #main-nav {
        background: #ffffff;
        color: black;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        border-bottom: 4px solid black;
        background: rgba(255, 99, 71, 0.7);
        z-index: 1;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #main-nav h1 {
        display: flex;
        align-items: center;
        margin-bottom: 0;
        font-size: 1.5em;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    #main-nav ul{
        list-style: none;
        display: flex;
        align-items: center;
        margin-bottom: 0;
    }

    #main-nav ul li {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #main-nav ul li a:link,
    #main-nav ul li a:visited{
        text-decoration: none;
        color: black;
        padding: 1rem 0.6rem;
        margin: 0 0.50rem;
        transition: border-bottom 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
    }

    #main-nav ul li a .link-icon {
        font-size: 1.4em;
    }

    .menu-wrap{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
    }

    .menu-wrap .toggler{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        cursor: pointer;
        width: 50px;
        height: 50px;
        opacity: 0;
    }

    .menu-wrap .hamburger{ 
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 60px;
        height: 60px;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Hamburger Line */
    .menu-wrap .hamburger > div{
        position: relative;
        flex: none;
        width: 100%;
        height: 3px;
        background: #888888;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease;
    }

    /* Hamburger Lines - Top & Bottom */
    .menu-wrap .hamburger > div::before,
    .menu-wrap .hamburger > div::after{
        content:'';
        border-radius: 10px;
        position: absolute;
        z-index: 1;
        top: -10px;
        width: 100%;
        height: 3px;
        background: inherit;
    }

    /* Moves Line down */
    .menu-wrap .hamburger > div::after{
        top: 10px;
    }

    /* Toggler Animation */

    .menu-wrap .toggler:checked + .hamburger > div{
        transform: rotate(135deg);
    }

    /* Turns Lines Into X */
    .menu-wrap .toggler:checked + .hamburger > div:before,
    .menu-wrap .toggler:checked + .hamburger > div:after{
        top: 0;
        transform: rotate(90deg);
    }

    /* Rotate on hover when Checked */
    .menu-wrap .toggler:checked:hover + .hamburger > div{
        transform: rotate(225deg);
    }

    /* Show Menu */
    .menu-wrap .toggler:checked ~ .menu{
        visibility: visible;
    }

    .menu-wrap .toggler:checked ~ .menu > div{
        transform: scale(1);
        transition-duration: 1s;
    }

    .menu-wrap .toggler:checked ~ .menu > div > div{
        opacity: 1;
        transition: opacity 0.4s ease 0.4s;
    }

    .menu-wrap .menu{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        visibility: hidden;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menu-wrap .menu > div{
        background: rgba(197, 226, 243, 1);
        /* background: white; */
        border-radius: 50%;
        width: 200vw;
        height: 220vw;
        display: flex;
        flex: none;
        align-items: center;
        justify-content: center;
        transform: scale(0);
        transition: all 0.4s ease;
    }

    .menu-wrap .menu > div > div{
        text-align: center;
        max-width: 100vw;
        max-height: 110vh;
        opacity: 0;
        transition: opacity 0.4s ease;
    }

    .menu-wrap .menu > div > div > ul > li{
        list-style: none;
        color: #444444;
        font-size: 1.5rem;
        padding: 1rem;
    }

    .menu-wrap .menu > div > div > ul > li > a{
        color: inherit;
        text-decoration: none;
        transition: color 0.4s ease;
    }

    .menu-wrap .menu > div > div > ul > li > a > .link-icon {
        margin-right: 0.6rem;
    }

    .menu-wrap .menu > div > div > ul > li > a:hover {
        color: #888888;
    }

    @media(min-width: 701px) {
        .menu-wrap {
            display: none;
        }
    }

    @media(max-width: 700px) {
        #main-nav {
            display: none;
        }
        #main-nav ul li a .link-icon {
            margin-right: 0.6rem;
        }
    }
`
