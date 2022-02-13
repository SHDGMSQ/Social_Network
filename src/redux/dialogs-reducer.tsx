import {DialogsPageType} from "../App";
import { GeneralType } from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


let initialState = {
    dialogs: [
        {id: 1, name: 'Dima', avatar: <img src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'/>},
        {id: 2, name: 'Andrew', avatar: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoOxv-DbMlA1aiqJ0-xnHSL8sPh8JH2rp3w&usqp=CAU'/>},
        {id: 3, name: 'Victor', avatar: <img src='http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'/>},
        {id: 4, name: 'Sveta', avatar: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhT-EC-5D31yyKETHFLz80Uj5yAuP8_5BVQ&usqp=CAU'/>}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: GeneralType): DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let copyState = {...state, newMessageBody: action.payload.body}
            return copyState
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody
            state.messages.push({id: 6, message: body})
            state.newMessageBody = ''
            return state
        }
        default: return state
    }
}



export type sendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE,
        payload: {}
    } as const
}

export type updateNewMessageBodyACType = ReturnType<typeof updateNewMessageBodyAC>
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        payload: {
            body
        }
    } as const
}