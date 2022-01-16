import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = (props: any) => {
    return (
        <div>
            <div>
                <img
                    src='https://static4.depositphotos.com/1000423/454/i/600/depositphotos_4548401-stock-photo-symbol-of-yin-and-yang.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;