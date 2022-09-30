import React from 'react';
import logotaza from '../../assets/logotaza.png';
import { CartWidget } from "../CartWidget/CartWidget";

export const Navbar = () => {
    return (
        <header>
            <div clasName= 'menu'>
            <box-icon name='menu-alt-right' flip='horizontal' color='#ffffff' ></box-icon>
            </div>
            <a href='#' >
                <div className='logo'>
                    <img src={logotaza} alt='logo' width='100'></img>
                </div>
            </a>
            <ul>
                <li>
                    <a href='#'>INICIO</a>
                </li>
                <li>
                    <a href='#'>PRODUCTOS</a>
                </li>
            </ul>
            <div className='cart'>
                <CartWidget />
            </div>
        </header>
    )
}