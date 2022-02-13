import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import { BrowserRouter } from 'react-router-dom';
import {Provider, StoreContext} from "./StoreContext";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
            <App state={state}/>
            </Provider>
        </React.StrictMode>,
        </BrowserRouter>, document.getElementById('root')
    );
}

reportWebVitals();


rerenderEntireTree(store.getState())
store.subscribe( () => {
    let state = store.getState()
    rerenderEntireTree(state)
} )



