import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, addTitleValue} from './redux/state';


export const rerenderEntireTree = (state) => {
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
