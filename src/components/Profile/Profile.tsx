import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {ProfilePageType} from "../../App";

export type ProfileType = {
    state: ProfilePageType
    addPost: (message: string) => void
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts
                posts={props.state.posts}
                addPost={props.addPost}
            />
        </div>
    )
}
export default Profile;