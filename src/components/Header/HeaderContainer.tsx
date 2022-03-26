import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';

export type HeaderType = {}

export class HeaderAPIComponent extends React.Component<any, any> {

    componentDidMount() {
        this.props.getAuthUserData();
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
    };
};

export const HeaderContainer = connect(mapStateToProps, {
    getAuthUserData: getAuthUserData,
})(HeaderAPIComponent);