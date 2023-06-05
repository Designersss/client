import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from "./store/UserStore";
import MusicStore from "./store/MusicStore";
import ServicesStore from "./store/ServicesStore";
import PlayerStore from "./store/PlayerStore";

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        music: new MusicStore(),
        services: new ServicesStore(),
        playerMusic: new PlayerStore()
    }}>
        <App/>
    </Context.Provider>
);
