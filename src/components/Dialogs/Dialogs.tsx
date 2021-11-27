import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props:any) => {
    let path = `/dialogs/${props.id}`

    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props:any) => {
    return <div className={s.message}>{props.message}</div>
}

let dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrew'},
  ]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
  ]

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
let messagesElements = messages.map(m => <Message message={m.message} />)

const Dialogs = (props:any) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>

        </div>
    )
}
export default Dialogs;