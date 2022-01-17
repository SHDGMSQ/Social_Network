import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";

export type MyPostsType = {
    posts: Array<PostType>
    addPost: (message: string) => void
    addTitleValue: (title: string) => void
}

const MyPosts: React.FC<MyPostsType> = (props) => {


    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        // @ts-ignore
        let text = newPostValue.current.value;
        if (text){
        props.addPost(text);
    }
        // @ts-ignore
        newPostValue.current.value = ''
    }
    const onChangeTextareaHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{props.addTitleValue(e.currentTarget.value)}
    let newPostValue = React.createRef<HTMLTextAreaElement>()


    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostValue}
                              onChange={onChangeTextareaHandler}
                    ></textarea>
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