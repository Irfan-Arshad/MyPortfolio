import React, { useState } from 'react';
import './navbar.css';
import contactImg from '../../assets/contact.png';
import logo from '../../assets/IA Dev Logo.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='Logo'/>
            <div className='navMenu'>
                <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500} className='navMenuListItem'>Home</Link>
                <Link activeClass='active' to ='skills' spy={true} smooth={true} offset={-100} duration={500} className='navMenuListItem'>About Me</Link>
                <Link activeClass='active' to ='' spy={true} smooth={true} offset={-100} duration={500} className='navMenuListItem'>Projects</Link>
            </div>
            <button className='navMenuButton' onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt='' className='navMenuImg' />Contact Me</button>

                <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className='navMenu2' style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to ='skills' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About Me</Link>
                <Link activeClass='active' to ='' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to ='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>    
        </nav>
    )
}
export default Navbar;