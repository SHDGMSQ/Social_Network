import {authAPI, usersAPI} from '../api/api';

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

type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (data: InitialStateAuthType) => {
    return {
        type: SET_USER_DATA,
        payload: {
            data
        }
    } as const;
};

export const getAuthUserData = () => {

    return (dispatch) => {

        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data));
                }
            });
    };
};
