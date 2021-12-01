import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


export type DialogItemType = {
    name: string
    id: number
    avatar: object
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = `/dialogs/${props.id}`

    return <div className={s.dialog}>
        {props.avatar}
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;