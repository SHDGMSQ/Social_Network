import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

export type HeaderType = {
    isAuth: boolean,
    login: string
}

const Header: React.FC<HeaderType> = (props) => {
    return (
        <header className={s.header}>
            {<img src='https://assets.dryicons.com/uploads/icon/svg/12258/7645c920-97b2-4a49-acb3-a6fd0a545306.svg'/>}

            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                :<NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;