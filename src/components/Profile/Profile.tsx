import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


import MyPostsContainer from './MyPosts/MyPostsContainer';
import {updateStatus} from '../../redux/profile-reducer';

type ProfileContactsType = {
    facebook: string
    website: null | string
    vk: string
    twitter: string
    instagram: string
    youtube: null | string
    github: string
    mainLink: null | string
}
type ProfilePhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: ProfilePhotosType
}

export type ProfileComponentPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const Profile: React.FC<ProfileComponentPropsType> = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
};
export default Profile;