import React from "react";
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";


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
                <Profile {...this.props}/>
            </div>
        )
    }
}

type mapStateToPropsType = {}

let mapStateToProps = (props: mapStateToPropsType) => {

}

export const ProfileContainer = connect(mapStateToProps, {setUserProfile(profile)})(ProfileAPIContainer)