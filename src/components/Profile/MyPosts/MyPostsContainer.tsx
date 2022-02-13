import React from 'react';
import {addPostAC, addTitleValueAC} from '../../../redux/profile-reducer';
import {StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";


export type MyPostsContainerType = {
    store: StoreType
}


const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {

    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC());
    }
    const onPostChange = (message: string) => {
        props.store.dispatch(addTitleValueAC(message))
    }


    return (<MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}/>   )
}
export default MyPostsContainer;