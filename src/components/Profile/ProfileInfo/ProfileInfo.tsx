import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileType} from "../Profile";
import { ProfileStatus } from './ProfileStatus';


type ProfileInfoPropsType = {
    profile: ProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                {/*<img
                    src='https://static4.depositphotos.com/1000423/454/i/600/depositphotos_4548401-stock-photo-symbol-of-yin-and-yang.jpg'/>*/}
            </div>
            <ProfileStatus status={'Hello my friends'}/>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>aboutMe: {props.profile.aboutMe}</div>
                <div>facebook: {props.profile.contacts.facebook}</div>
                <div>website: {props.profile.contacts.website}</div>
                <div>vk: {props.profile.contacts.vk}</div>
                <div>twitter: {props.profile.contacts.twitter}</div>
                <div>instagram: {props.profile.contacts.instagram}</div>
                <div>youtube: {props.profile.contacts.youtube}</div>
                <div>github: {props.profile.contacts.github}</div>
                <div>mainLink: {props.profile.contacts.mainLink}</div>
                <div>Status lookingJob: {props.profile.lookingForAJob}</div>
                <div>Description: {props.profile.lookingForAJobDescription}</div>
                <div>FullName: {props.profile.fullName}</div>
                <div>UserId: {props.profile.userId}</div>
            </div>
        </div>
    )
}
export default ProfileInfo;