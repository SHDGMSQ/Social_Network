import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    getUsers,
    InitialStateType,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollow,
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../common/preloader/Preloader';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';
import {RouteComponentProps} from 'react-router-dom';


type UsersContainerPropsType = RouteComponentProps<PathParamsPropsType & OwnPropsType>

type PathParamsPropsType = {
    userId: string
}
type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: number[]
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsFollowingProgress: (isFollowing: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}


type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType


class UsersContainer extends React.Component<UsersContainerPropsType> {


    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                usersPage={this.props.usersPage}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.isFollowing}
            />
        </>
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.followingInProgress
    }
}


export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsers,
    }),
)(UsersContainer)

