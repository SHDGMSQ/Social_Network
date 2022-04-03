import {ProfilePageType} from '../App';
import {GeneralType} from './store';
import {profileAPI, usersAPI} from '../api/api';
import {ProfileType} from '../components/Profile/Profile';

const ADD_POST = 'ADD-POST';
const ADD_TITLE_VALUE = 'ADD-TITLE-VALUE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
    ],
    newPostText: '',
    profile: null,
    status: '',
};

export const profileReducer = (state: ProfilePageType = initialState, action: GeneralType): ProfilePageType => {
    let stateCopy = {
        ...state,
        posts: [...state.posts],
    };
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 3, message: state.newPostText, likesCount: 0};
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case ADD_TITLE_VALUE: {
            stateCopy.newPostText = action.payload.message;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.payload.profile};
        }
        case SET_STATUS: {
            stateCopy.status = action.payload.status;
            return stateCopy;
        }
        default:
            return state;
    }
};


export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: ADD_POST,
        payload: {}
    } as const;
};

export type addTitleValueACType = ReturnType<typeof addTitleValueAC>
export const addTitleValueAC = (message: string) => {
    return {
        type: ADD_TITLE_VALUE,
        payload: {
            message
        }
    } as const;
};

export type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile
        }
    } as const;
};

export type setStatusType = ReturnType<typeof setStatus>
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        payload: {
            status
        }
    } as const;
};


export const getUserProfile = (userId: string) => {

    return (dispatch) => {

        usersAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    };
};
export const getStatus = (userId: string) => {

    return (dispatch) => {

        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data));
        });
    };
};

export const updateStatus = (status) => {

    return (dispatch) => {

        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    };
};
