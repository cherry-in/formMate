import React, { useState } from "react";
import "./app.scss"
import history from "../history";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Login from '../pages/Login/index';
import SignUp from "../pages/SignUp/index";
import Main from "../pages/Main/index";
import Search from "../pages/Search/index";
import Workspace from "../pages/Workspace/index";
import Mypage from "../pages/Mypage/index";

function App() {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/workspace/:formId" component={Workspace} />
                <Route exact path="/mypage" component={Mypage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
