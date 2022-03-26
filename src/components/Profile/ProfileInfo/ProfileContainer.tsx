import React from 'react';
import Profile, {ProfileType} from '../Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {getUserProfile} from '../../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';


type ProfileContainerPropsType = {}




export class ProfileAPIContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

type mapStateToPropsType = {
    profile: ProfileType | null
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps,{
    getUserProfile: getUserProfile
})(WithUrlDataContainerComponent)