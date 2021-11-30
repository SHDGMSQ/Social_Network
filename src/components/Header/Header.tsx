import React from 'react';
import s from './Header.module.css'

export type HeaderType = {}

const Header: React.FC<HeaderType> = () => {
    return (
        <header className={s.header}>
            <img src='https://png.pngtree.com/element_pic/00/16/07/06577d261edb9ec.jpg'/>
        </header>
    )
}
export default Header;