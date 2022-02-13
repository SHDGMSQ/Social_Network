import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";


export type DialogsContainerType = {}

const DialogsContainer: React.FC<DialogsContainerType> = (props) => {

   /* let state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }*/

    return <StoreContext.Consumer>
        {

        (store) => {

            let state = store.getState().dialogsPage

            const onSendMessageClick = () => {
               store.dispatch(sendMessageAC())
            }
            let onNewMessageChange = (body: string) => {
             store.dispatch(updateNewMessageBodyAC(body))
            }

            return <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />}}
    </StoreContext.Consumer>
}
export default DialogsContainer;



