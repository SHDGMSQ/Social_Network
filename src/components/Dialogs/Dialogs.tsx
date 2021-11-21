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


let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrew'},
  ]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
  ]

const Dialogs = (props:any) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>

                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                </div>
                <div className={s.messages}>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message={messagesData[2].message}/>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;