import React from "react";
import s from './Friends.module.css'

type friendsType = {
    name: string,
    avatar: object
}

export const Friends: React.FC<friendsType> = (props) => {
    return (
        <div className={s.friends}>
            <div>
                {props.name}
            </div>
            <div>
                {props.avatar}
            </div>
        </div>
    )
}
