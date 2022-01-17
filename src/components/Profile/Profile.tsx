import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {ProfilePageType} from "../../App";

export type ProfileType = {
    state: ProfilePageType
    addPost: (message: string) => void
    addTitleValue: (title: string) => void
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts
                posts={props.state.posts}
                newPostText={props.state.newPostText}
                addPost={props.addPost}
                addTitleValue={props.addTitleValue}
            />
        </div>
    )
}
export default Profile;