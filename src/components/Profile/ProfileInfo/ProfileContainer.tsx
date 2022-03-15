import React from "react";
import Profile, {ProfileType} from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {setUserProfile} from "../../../redux/profile-reducer";


type ProfileContainerPropsType = {}

export class ProfileAPIContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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

export const ProfileContainer = connect(mapStateToProps,{
    setUserProfile: setUserProfile
})(ProfileAPIContainer)