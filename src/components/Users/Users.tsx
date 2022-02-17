import React from "react";
import s from './Users.module.css'
import {InitialStateType, UserType} from "../../redux/users-reducer";

type UsersType = {
    usersPage: InitialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}


export const Users = (props: UsersType) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple115/v4/6d/ec/06/6dec0611-3620-8289-55b5-7245ee6ea4d3/source/512x512bb.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple115/v4/6d/ec/06/6dec0611-3620-8289-55b5-7245ee6ea4d3/source/512x512bb.jpg',
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple115/v4/6d/ec/06/6dec0611-3620-8289-55b5-7245ee6ea4d3/source/512x512bb.jpg',
                followed: false,
                fullName: 'Andrew',
                status: 'I am a boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ],)
    }

    return <div>
        {
            props.usersPage.users.map( m => <div key={m.id}>
                <span>
                    <div>
                        <img src={m.photoUrl} className={s.userPhoto}/>
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
                        <div>{m.fullName}</div>
                        <div>{m.status}</div>
                    </span>
                    <span>
                        <div>{m.location.country}</div>
                        <div>{m.location.city}</div>
                    </span>
                </span>
            </div> )
        }
    </div>
}