import React from 'react';
import {addPostAC, addTitleValueAC} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {PostType} from "./Post/Post";
import {Dispatch} from "redux";


export type MyPostsContainerType = {}
type MapStateToPropsType = {
    posts: Array<PostType>,
    newPostText: string
}
type MapDispatchToPropsType = {
    updateNewPostText: (message: string) => void
    addPost: () => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (message: string) => {
            dispatch(addTitleValueAC(message))
        },
        addPost: () => {
            dispatch(addPostAC())
        },

    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;