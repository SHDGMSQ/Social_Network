import React from "react";
import s from './Users.module.css'
import axios from "axios";

class Users extends React.Component<any, any> {


    componentDidMount() {
        alert('NEW')
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <div>
            {
                this.props.usersPage.users.map(m => <div key={m.id}>
                <span>
                    <div>
                        <img
                            src={m.photos.small !== null ? m.photos.small : 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'}
                            className={s.userPhoto}/>
                    </div>
                    <div>
                        {
                            m.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(m.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(m.id)
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
                        <div>{"m.location.country"}</div>
                        <div>{"m.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>;
    }
}

export default Users