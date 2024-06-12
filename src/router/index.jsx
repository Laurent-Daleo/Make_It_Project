import React from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import "../style/global_settings.scss";
import Home from "../pages/home";
import Notfound from "../pages/notFound";
import SignUp from "../pages/signup";
import SignIn from "../pages/signIn"
import routes from './routes'


function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.home} element={<Home />} />
                <Route path="*" element={<Notfound />} />
                <Route path={routes.SignUp} element={<SignUp />} />
                <Route path={routes.SignIn} element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;