import React from 'react';
import Profile, {ProfileType} from '../Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {getUserProfile} from '../../../redux/profile-reducer';
import {withRouter, RouteComponentProps } from 'react-router-dom';
import {WithAuthRedirect} from '../../../hoc/WithAuthRedirect';
import { compose } from 'redux';


type ProfileContainerPropsType = RouteComponentProps<PathParamsPropsType & OwnPropsType>

type PathParamsPropsType = {
    userId: string
}

export type mapStateToPropsType = {
    profile: ProfileType | null
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId);
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    };
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)