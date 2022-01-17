import state, { subscribe } from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, addTitleValue} from './redux/state';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 addTitleValue={addTitleValue}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reportWebVitals();


rerenderEntireTree(state)
subscribe(rerenderEntireTree)



