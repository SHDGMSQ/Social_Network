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

const Dialogs = (props:any) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>

                    <DialogItem name='Dima' id='1'/>
                    <DialogItem name='Andrew' id='2'/>
                    <DialogItem name='Yuri' id='3'/>
                    <DialogItem name='Sveta' id='4'/>
                    <DialogItem name='John' id='5'/>
                    <DialogItem name='Michael' id='6'/>
                    <DialogItem name='Alexander' id='7'/>

                </div>
                <div className={s.messages}>
                    <Message message="Hi"/>
                    <Message message="How are you?"/>
                    <Message message="Yo"/>
                    <Message message="Yo"/>
                    <Message message="Yo"/>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;