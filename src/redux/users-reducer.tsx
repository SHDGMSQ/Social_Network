import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

type UsersLocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number,
    photos: any
    followed: boolean
    name: string
    status: string
    location: UsersLocationType
}
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}


let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

};

export const usersReducer = (state: InitialStateType = initialState, action: GeneralType): InitialStateType => {

    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users: state.users.map(m => m.id === action.payload.userId ? {...m, followed: true} : m)};
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(m => m.id === action.payload.userId ? {...m, followed: false} : m)
            };
        }
        case 'SET-USERS': {
            return {...state, users: [...action.payload.users]};
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.payload.currentPage};
        }
        case 'SET-USERS-TOTAL-COUNT': {
            return {...state, totalUsersCount: action.payload.count};
        }
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.payload.isFetching};
        }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {...state,
                followingInProgress: action.payload.isFollowing
                    ? [...state.followingInProgress, action.payload.userId]
                    :state.followingInProgress.filter(id => id !== action.payload.userId)
            };
        }
        default:
            return state;
    }
};

type GeneralType = FollowType
    | UnfollowType
    | SetUsersType
    | SetCurrentPageType
    | SetUsersTotalCountType
    | ToggleIsFetchingType
    | ToggleIsFollowingProgressType

type FollowType = ReturnType<typeof followSuccess>
export const followSuccess = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    } as const;
};

type UnfollowType = ReturnType<typeof unfollowSuccess>
export const unfollowSuccess = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        }
    } as const;
};

type SetUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const;
};

type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    } as const;
};

type SetUsersTotalCountType = ReturnType<typeof setUsersTotalCount>
export const setUsersTotalCount = (count: number) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        payload: {
            count
        }
    } as const;
};

type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const;
};

type ToggleIsFollowingProgressType = ReturnType<typeof toggleIsFollowingProgress>
export const toggleIsFollowingProgress = (isFollowing: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: {
            isFollowing,
            userId
        }
    } as const;
};

export const getUsers = (currentPage: number, pageSize: number) => {

    return (dispatch) => {

        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
        });
    }
}


export const follow = (userId) => {

    return (dispatch) => {

        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
}
}
export const unfollow = (userId) => {

    return (dispatch) => {

        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
    }
}