import React from 'react';
import {addPostAC, addTitleValueAC} from '../../../redux/profile-reducer';

import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


export type MyPostsContainerType = {}


const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {

    //const state = props.store.getState()

    /*const addPost = () => {
        props.store.dispatch(addPostAC());
    }
    const onPostChange = (message: string) => {
        props.store.dispatch(addTitleValueAC(message))
    }*/


    return (
        <StoreContext.Consumer>
            {
            (store) => {

                const state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostAC());
                }
                const onPostChange = (message: string) => {
                    store.dispatch(addTitleValueAC(message))
                }

                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>}
        }
        </StoreContext.Consumer>)
}
export default MyPostsContainer;