import React, {ChangeEvent} from 'react';
import {addPostAC, addTitleValueAC, GeneralType } from '../../../redux/state';
import s from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";

export type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: GeneralType) => void
}

/*type GeneralType = addPostACType
| addTitleValueACType

type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: 'ADD-POST',
        preload: {}
    } as const
}

type addTitleValueACType = ReturnType<typeof addTitleValueAC>
export const addTitleValueAC = (message: string) => {
    return {
        type: 'ADD-TITLE-VALUE',
        preload: {
            message
        }
    } as const
}*/

const MyPosts: React.FC<MyPostsType> = (props) => {


    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostAC());
    }
    const onChangeTextareaHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value
        props.dispatch(addTitleValueAC(message))
    }
    let newPostValue = React.createRef<HTMLTextAreaElement>()


    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostValue}
                              onChange={onChangeTextareaHandler}
                              value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )
}
export default MyPosts;