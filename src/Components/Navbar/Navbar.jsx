//import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
import { useRef } from 'react'
const Navbar = () => {
    const menuRef = useRef();
    const openMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.right = "0";
        }
    }

    const closeMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.right = "-350px";
        }
    }
    return (
        <div className='navbar'>
            <img src='/src/assets/rohan logo - Copy.png' alt='logo' />
            <img onClick={openMenu} className='nav-mob-open' src="/src/assets/menu_open.svg" alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <img onClick={closeMenu} className='nav-mob-close' src="/src/assets/menu_close.svg" alt="" />
                <li><AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink> </li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p>About Me </p></AnchorLink>         </li>
                <li><AnchorLink className='anchor-link' offset={50} href='#project'><p>Projects</p></AnchorLink> </li>
                <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'><p>Portfolio</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink> </li>
            </ul>
            <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        </div>
    )
}

export default Navbar