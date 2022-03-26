import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {PostType} from './components/Profile/MyPosts/Post/Post';
import {DialogItemType} from './components/Dialogs/DialogItem/DialogItem';
import {MessagesType} from './components/Dialogs/Message/Message';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import {ProfileContainer} from './components/Profile/ProfileInfo/ProfileContainer';
import {ProfileType} from './components/Profile/Profile';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {Login} from './components/Login/Login';

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
            <HeaderContainer/>
            <Navbar state={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path='/Social_Network' render={ () => <ProfileContainer/>}/>
                <Route path='/profile/:userId?' render={ () => <ProfileContainer/>}/>
                <Route path='/dialogs' render={ () => <DialogsContainer/>}/>
                <Route path='/news' render={ () => <News/>}/>
                <Route path='/music' render={ () => <Music/>}/>
                <Route path='/settings' render={ () => <Settings/>}/>
                <Route path='/users' render={ () => <UsersContainer/>}/>
                <Route path='/login' render={ () => <Login/>}/>
            </div>
        </div>
    );
}


export default App;
