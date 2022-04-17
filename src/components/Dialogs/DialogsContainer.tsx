import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {DialogsPageType} from '../../App';
import {compose, Dispatch} from 'redux';
import React from 'react';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import Dialogs from './Dialogs';


type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,

    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
           dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);






