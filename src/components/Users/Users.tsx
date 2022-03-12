import React from "react";
import s from './Users.module.css'
import axios from "axios";

class Users extends React.Component<any, any> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
}

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages: number[] = []
        for (let i = 1; i <= pagesCount; i++) {
            if (i)
                pages.push(i)
        }
        return <div>
            <div>
                {
                    pages.map((m, i) => {
                        return <span key={i}
                                     className={this.props.currentPage === m ? s.selectedPage : ''}
                                     onClick={ (e) => {
                                         this.onPageChanged(m)} }
                        >{m}</span>
                    })
                }
            </div>
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