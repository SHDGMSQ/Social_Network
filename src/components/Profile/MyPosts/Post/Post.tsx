import React from 'react';
import s from './Post.module.css'


export type PostType = {
    id?: number
    message: string
    likesCount: number
}

const Post: React.FC<PostType> = (props) => {
    return (
        <div>
                <div className={s.item}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrZqTCInyg6RfYC7Ape20o-EWP1EN_A8fOA&usqp=CAU" />
                    {props.message}
                    <div>
                    <span>like</span> {props.likesCount}
                    </div>
                </div>
        </div>
    )
}
export default Post;