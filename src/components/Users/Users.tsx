import s from './Users.module.css';
import React from 'react';
import {InitialStateType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import {usersAPI} from '../../api/api';


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    usersPage: InitialStateType
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i)
            pages.push(i);
    }


    return (
        <div>
            <div>
                {
                    pages.map((m, i) => {
                        return <span key={i}
                                     className={props.currentPage === m ? s.selectedPage : ''}
                                     onClick={(e) => {
                                         props.onPageChanged(m);
                                     }}
                        >{m}</span>;
                    })
                }
            </div>
            {
                props.usersPage.users.map(m => <div key={m.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + m.id}>
                        <img
                            src={m.photos.small !== null ? m.photos.small : 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'}
                            className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            m.followed
                                ? <button onClick={() => {

                                    usersAPI.unfollowAtUser(m.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(m.id);
                                        }
                                    });

                                }}>Unfollow</button>
                                : <button onClick={() => {

                                    usersAPI.followAtUser(m.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(m.id);
                                        }
                                    });

                                }}>Follow</button>
                        }

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{m.name}</div>
                        <div>{m.status}</div>
                    </span>
                    <span>
                        <div>{'m.location.country'}</div>
                        <div>{'m.location.city'}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    );
};