import React from 'react';
import s from './Header.module.css'

export type HeaderType = {}

const Header: React.FC<HeaderType> = () => {
    return (
        <header className={s.header}>
            <img src='https://e7.pngegg.com/pngimages/518/586/png-clipart-computer-icons-earth-logo-earth-globe-monochrome.png'/>
        </header>
    )
}
export default Header;