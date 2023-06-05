import './App.css'
import Router from "./router/Router";
import './styles/global.scss'
import {BrowserRouter} from "react-router-dom";
import NavBar from "./component/navigation/NavBar";
import LeftBar from "./component/navigation/LeftBar";
import {useContext, useEffect} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {check} from "./https/userApi";
import Player from "./component/player/Player";
const App = observer (() => {
    const {user} = useContext(Context)
    useEffect(() => {
        check().then(data => {
            user.setUser(data)
            user.setIsAuth(true)
        })
    }, [])
    return (
        <BrowserRouter>
            <LeftBar />
            <NavBar/>
            <Router />
            <Player />
        </BrowserRouter>
    );
})

export default App;
