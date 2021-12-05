import React from 'react';
import s from './Header.module.css'

export type HeaderType = {}

const Header: React.FC<HeaderType> = () => {
    return (
        <header className={s.header}>
            {<img src='https://assets.dryicons.com/uploads/icon/svg/12258/7645c920-97b2-4a49-acb3-a6fd0a545306.svg'/>}
        </header>
    )
}
export default Header;