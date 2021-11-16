import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://www.ronenbekerman.com/wp-content/uploads/2010/05/Grand-prize-winner-bertrand-benoit-exterior-1200px.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile;