import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {ProfilePageType} from "../../App";
import {GeneralType} from "../../redux/store";

export type ProfileType = {
    state: ProfilePageType
    dispatch: (action: GeneralType) => void
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts
                posts={props.state.posts}
                newPostText={props.state.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}
export default Profile;