import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './redux/redux-store';




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



