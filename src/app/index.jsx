import React, { useState } from "react";
import "./app.scss"
import history from "../history";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Login from '../pages/Login';
import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import Search from "../pages/Search";
import Workspace from "../pages/Workspace";
import Mypage from "../pages/Mypage";

function App() {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/workspace/:id" component={Workspace} />
                <Route exact path="/mypage" component={Mypage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
