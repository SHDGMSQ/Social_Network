import React from "react";
import Profile, {ProfileType} from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {setUserProfile} from "../../../redux/profile-reducer";
import {withRouter} from 'react-router-dom'


type ProfileContainerPropsType = {}




export class ProfileAPIContainer extends React.Component<any, any> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data)
        });
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
    setUserProfile: setUserProfile
})(WithUrlDataContainerComponent)