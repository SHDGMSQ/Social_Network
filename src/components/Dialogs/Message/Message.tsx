import React from "react";
import s from './../Dialogs.module.css'


export type MessagesType = {
    id?: number
    message: string
}

const Message: React.FC<MessagesType> = (props) => {
    return <div className={s.message}>{props.message}</div>
}


export default Message;