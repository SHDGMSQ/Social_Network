import {ProfilePageType} from "../App";
import { GeneralType } from "./store";

const ADD_POST = 'ADD-POST'
const ADD_TITLE_VALUE = 'ADD-TITLE-VALUE'

let initialState =  {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: GeneralType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 3, message: state.newPostText, likesCount: 0};
            state.newPostText = ''
            state.posts.push(newPost);
            return state
        }
        case ADD_TITLE_VALUE: {
            let copyState = {...state, newPostText: action.payload.message}
            return copyState;
        }
        default: return state
    }
}



export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: ADD_POST,
        payload: {}
    } as const
}

export type addTitleValueACType = ReturnType<typeof addTitleValueAC>
export const addTitleValueAC = (message: string) => {
    return {
        type: ADD_TITLE_VALUE,
        payload: {
            message
        }
    } as const
}

