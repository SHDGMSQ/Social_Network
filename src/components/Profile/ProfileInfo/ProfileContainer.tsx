import React from 'react';
import Profile, {ProfileType} from '../Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {getStatus, getUserProfile, updateStatus} from '../../../redux/profile-reducer';
import {withRouter, RouteComponentProps } from 'react-router-dom';
import {WithAuthRedirect} from '../../../hoc/WithAuthRedirect';
import { compose } from 'redux';


type ProfileContainerPropsType = RouteComponentProps<PathParamsPropsType & OwnPropsType>

type PathParamsPropsType = {
    userId: string
}

export type mapStateToPropsType = {
    profile: ProfileType | null
    status: string
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (status: string) => void
}

type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    };
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer)