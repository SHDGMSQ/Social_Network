import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {PostType} from "./components/Profile/MyPosts/Post/Post";
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessagesType} from "./components/Dialogs/Message/Message";

//init commit

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
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
    dispatch: (action: {type: string, message?: string}) => void
    store: any
}


const App: React.FC<AppType> = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route
                            path='/profile'
                            element={<Profile
                                state={props.state.profilePage}
                                dispatch={props.dispatch}
                            />}/>
                        <Route
                            path='/dialogs'
                            element={<Dialogs store={props.store}/>}/>
                        <Route
                            path='/news'
                            element={<News/>}/>
                        <Route
                            path='/music'
                            element={<Music/>}/>
                        <Route
                            path='/settings'
                            element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
