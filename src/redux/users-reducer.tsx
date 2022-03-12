const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'

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
}


let initialState: InitialStateType =  {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,

    /*[
        {id: 1, photoUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple115/v4/6d/ec/06/6dec0611-3620-8289-55b5-7245ee6ea4d3/source/512x512bb.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'} },
        {id: 1, photoUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple115/v4/6d/ec/06/6dec0611-3620-8289-55b5-7245ee6ea4d3/source/512x512bb.jpg', followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'} },
        {id: 1, photoUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple115/v4/6d/ec/06/6dec0611-3620-8289-55b5-7245ee6ea4d3/source/512x512bb.jpg', followed: false, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'} },
    ],*/
}

export const usersReducer = (state: InitialStateType = initialState, action: GeneralType): InitialStateType => {

    switch (action.type) {
        case "FOLLOW": {
           return {...state, users: state.users.map ( m => m.id === action.payload.userId ? {...m, followed: true}: m )}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map ( m => m.id === action.payload.userId ? {...m, followed: false}: m )}
        }
        case "SET-USERS": {
            return {...state, users: [...action.payload.users]}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.payload.currentPage}
        }
        case "SET-USERS-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.payload.count}
        }
        default: return state
    }
}

type GeneralType = FollowACType
| UnfollowACType
| SetUsersACType
| SetCurrentPageACType
| SetUsersTotalCountAC

type FollowACType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    } as const
}

type UnfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        }
    } as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}

type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    } as const
}

type SetUsersTotalCountAC = ReturnType<typeof setUsersTotalCountAC>
export const setUsersTotalCountAC = (count: number) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        payload: {
            count
        }
    } as const
}

