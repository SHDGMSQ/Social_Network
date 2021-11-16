import React from 'react';
import s from './Post.module.css'

const Post = (props: any) => {
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