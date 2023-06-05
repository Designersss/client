import React, {useContext} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "./routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import NotFound from "../pages/NotFound";

const Router = observer(() => {
    const {music} = useContext(Context)
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component}  />
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component}  />
            )}
            <Route path="*" element={NotFound}/>
        </Routes>
    );
});

export default Router;