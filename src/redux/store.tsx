import {addPostACType, addTitleValueACType, profileReducer, setStatusType, setUserProfileType} from './profile-reducer';
import {dialogsReducer, sendMessageACType, updateNewMessageBodyACType} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {StateType} from '../App';

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer) => void
    dispatch: (action: GeneralType) => void
}
export type GeneralType = sendMessageACType
    | updateNewMessageBodyACType
    | addPostACType
    | addTitleValueACType
    | setUserProfileType
    | setStatusType


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first post', likesCount: 20},
            ],
            newPostText: '',
            profile: null,
            status: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima', avatar: <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"/>},
                {
                    id: 2,
                    name: 'Andrew',
                    avatar: <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoOxv-DbMlA1aiqJ0-xnHSL8sPh8JH2rp3w&usqp=CAU"/>
                },
                {
                    id: 3,
                    name: 'Victor',
                    avatar: <img
                        src="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"/>
                },
                {
                    id: 4,
                    name: 'Sveta',
                    avatar: <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhT-EC-5D31yyKETHFLz80Uj5yAuP8_5BVQ&usqp=CAU"/>
                }
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
            ],
            newMessageBody: ''
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Dimych',
                    avatar: <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvp2aUDG6dtrmSeUygp27_sk5fvdUa3FxjMA&usqp=CAU"/>
                },
                {
                    id: 2,
                    name: 'Sveta',
                    avatar: <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ6Fd7CkhZQJWCON-lIjz-FtljOF0LeBggaQ&usqp=CAU"/>
                },
                {
                    id: 3,
                    name: 'Victor',
                    avatar: <img src="https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma.jpg"/>
                },
                {
                    id: 4,
                    name: 'Nadezhda',
                    avatar: <img
                        src="data:image/jpeg;base64,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"/>
                }
            ]
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber(state) {
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;

