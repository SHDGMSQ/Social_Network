import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = (props:any) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/1">Dima</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/2">Andrey</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/3">Yuri</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/4">Sveta</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/5">John</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/6">Michail</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/7">Alexander</NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>
                        Hi
                    </div>
                    <div className={s.message}>
                        How are you?
                    </div>
                    <div className={s.message}>
                        Yo
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;