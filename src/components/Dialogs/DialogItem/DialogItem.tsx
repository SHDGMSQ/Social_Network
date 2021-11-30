import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


export type DialogItemType = {
    name: string
    id: number
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = `/dialogs/${props.id}`

    return <div className={s.dialog}>
        <img src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'/>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;