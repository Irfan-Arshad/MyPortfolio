import React from 'react';
import './navbar.css';
import contactImg from '../../assets/contact.png';
import logo from '../../assets/IA Dev Logo.png';
import { Link } from 'react-scroll';



const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='Logo'/>
            <div className='navMenu'>
                <Link className='navMenuListItem'>Home</Link>
                <Link className='navMenuListItem'>About Me</Link>
                <Link className='navMenuListItem'>Projects</Link>
            </div>
            <button className='navMenuButton'>
                <img src={contactImg} alt='' className='navMenuImg' />Contact Me</button>
        </nav>
    )
}
export default Navbar;