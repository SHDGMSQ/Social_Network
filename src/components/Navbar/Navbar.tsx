import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {SidebarType} from "../../App";
import {Friends} from "./Friends/Friends";

export type NavbarType = {
    state: SidebarType
}


const Navbar: React.FC<NavbarType> = (props) => {


    let friendsElement = props.state.friends.map(f => <Friends key={f.id} name={f.name} avatar={f.avatar}/>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="users" activeClassName={s.activeLink}>Find Users</NavLink>
            </div>
            <div className={s.friends}>
                <h3>Friends</h3>
                <div>
                    {friendsElement}
                </div>
            </div>
        </nav>
    )
}
export default Navbar;