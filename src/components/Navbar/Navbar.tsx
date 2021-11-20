import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={(Link)=> Link.isActive? s.activeLink: ''}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={(Link)=> Link.isActive? s.activeLink: ''}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={(Link)=> Link.isActive? s.activeLink: ''}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="music" className={(Link)=> Link.isActive? s.activeLink: ''}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="settings" className={(Link)=> Link.isActive? s.activeLink: ''}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;