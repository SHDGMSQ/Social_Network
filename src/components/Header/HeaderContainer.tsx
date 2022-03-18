import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';

export type HeaderType = {}

export class HeaderAPIComponent extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                // let {id, login, email} = response.data.data
                this.props.setAuthUserData(response.data.data)
            }
        });
    }


    render() {
        return <>
            <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
        </>;
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    setAuthUserData: setAuthUserData,
})(HeaderAPIComponent);