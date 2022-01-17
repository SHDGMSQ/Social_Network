import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import {rerenderEntireTree} from "./rerenderEntireTree";


rerenderEntireTree(state)

reportWebVitals();
