import React from 'react';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../redux/redux-store';
import {connect} from 'react-redux';

export type mapStateToPropsForRedirectType = {
    isAuth: boolean
}
let mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login/'/>
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}