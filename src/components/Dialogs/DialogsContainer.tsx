import React from "react";
import { sendMessageAC, updateNewMessageBodyAC } from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";



export type DialogsContainerType = {
    store: StoreType
}

const DialogsContainer: React.FC<DialogsContainerType> = (props) => {

    let state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (<Dialogs
        updateNewMessageBody={onNewMessageChange}
        sendMessage={onSendMessageClick}
        dialogsPage={state}
    />)
}
export default DialogsContainer;



