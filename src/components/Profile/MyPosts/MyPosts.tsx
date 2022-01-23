import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";

export type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: {type: string, message?: string}) => void
}

const MyPosts: React.FC<MyPostsType> = (props) => {


    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }
    const onChangeTextareaHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        let message = e.currentTarget.value
        props.dispatch({type: 'ADD-TITLE-VALUE', message: message})
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