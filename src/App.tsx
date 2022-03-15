import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, HashRouter, Navigate, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {PostType} from "./components/Profile/MyPosts/Post/Post";
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessagesType} from "./components/Dialogs/Message/Message";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from './components/Users/UsersContainer';
import {ProfileContainer} from "./components/Profile/ProfileInfo/ProfileContainer";
import {ProfileType} from "./components/Profile/Profile";
//wefwef

// axios
//     .get('https://blabla.com/users')
//     .then( data => console.log(data) );

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}
export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessagesType>
    newMessageBody: string
}
export type SidebarType = {
    friends: Array<SidebarFriendsType>
}
export type SidebarFriendsType = {
    id: number
    name: string
    avatar: object
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type AppType = {
    state: StateType
}


const App: React.FC<AppType> = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className="app-wrapper-content">
                    <Route path='/profile' component={ProfileContainer}/>
                    <Route path='/dialogs' component={DialogsContainer}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' component={UsersContainer}/>
            </div>
        </div>
    );
}


export default App;
