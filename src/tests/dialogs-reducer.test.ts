import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "../redux/dialogs-reducer";
import {DialogsPageType} from "../App";

let startState: DialogsPageType
beforeEach( () => {
    startState = {
        dialogs: [
            {id: 1, name: 'Dima', avatar: {}},
            {id: 2, name: 'Andrew', avatar: {}},
            {id: 3, name: 'Victor', avatar: {}},
            {id: 4, name: 'Sveta', avatar: {}}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
        ],
        newMessageBody: ''
    }
} )


//TEST FOR UPDATE-NEW-MESSAGE-BODY
test('new message from dialogs should be correct', () => {

    const body = 'newText'

    const endState = dialogsReducer(startState, updateNewMessageBodyAC(body))

    expect(endState.newMessageBody).toBe('newText')

})

//TEST FOR SEND-MESSAGE
test('new message from dialogs should be added', () => {


    const endState = dialogsReducer(startState, sendMessageAC())

    expect(endState.messages.length).toBe(4)

})