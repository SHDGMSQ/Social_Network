import {usersAPI} from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA';


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
type InitialStateAuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}


let initialState: InitialStateAuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export const authReducer = (state: InitialStateAuthType = initialState, action: GeneralType): InitialStateAuthType => {

    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.payload.data,
                isAuth: true
            };
        }
        default:
            return state;
    }
};

type GeneralType = setAuthUserDataType

type setAuthUserDataType = ReturnType<typeof setAuthUserDataSuccess>
export const setAuthUserDataSuccess = (data: InitialStateAuthType) => {
    return {
        type: SET_USER_DATA,
        payload: {
            data
        }
    } as const;
};

export const setAuthUserData = () => {

    return (dispatch) => {

        usersAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataSuccess(data));
            }
        });
    }
}
