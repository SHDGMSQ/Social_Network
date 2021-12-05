import React, {RefObject} from 'react';
import s from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";

export type MyPostsType = {
    posts: Array<PostType>
}

const MyPosts: React.FC<MyPostsType> = (props) => {


    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        let text = newPostValue.current?.value;
        alert(text)
    }
    let newPostValue: RefObject<HTMLTextAreaElement> = React.createRef()

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostValue}></textarea>
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