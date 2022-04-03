import React from 'react';
import s from './ProfileInfo.module.css';


type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false
    };

    activateEditMode() {
        this.setState({
            editMode: true
        });
    }

    deActivateEditMode() {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input value={this.props.status} onBlur={this.deActivateEditMode.bind(this)} autoFocus/>
                    </div>
                }
            </div>
        );
    }
};