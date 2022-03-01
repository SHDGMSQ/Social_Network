import React from "react";
import s from './Users.module.css'
import {InitialStateType, UserType} from "../../redux/users-reducer";
import axios from "axios";

type UsersType = {
    usersPage: InitialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}


export const Users = (props: UsersType) => {
    if (props.usersPage.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
            props.setUsers(response.data.items)
        } );
    }

    return <div>
        {
            props.usersPage.users.map( m => <div key={m.id}>
                <span>
                    <div>
                        <img src={m.photos.small !==null ? m.photos.small: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'} className={s.userPhoto}/>
                    </div>
                    <div>
                        {
                            m.followed
                            ? <button onClick={ () => {props.unfollow(m.id)} }>Unfollow</button>
                            : <button onClick={ () => {props.follow(m.id)} }>Follow</button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{m.name}</div>
                        <div>{m.status}</div>
                    </span>
                    <span>
                        <div>{"m.location.country"}</div>
                        <div>{"m.location.city"}</div>
                    </span>
                </span>
            </div> )
        }
    </div>
}