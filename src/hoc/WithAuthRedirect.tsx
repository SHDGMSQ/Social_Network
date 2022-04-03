import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../redux/redux-store';
import {connect} from 'react-redux';

type MapStateToProps = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export function WithAuthRedirect<T>(Component: ComponentType<T>){

    const RedirectComponent = (props: MapStateToProps) => {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to="/login/"/>;
        return <Component {...restProps as T}/>;
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}