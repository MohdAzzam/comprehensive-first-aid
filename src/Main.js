import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from './screens/home/home';
import Login from './screens/login/Login';
import Register from './screens/register/Register';

export default function Main() {
    return (
        <Switch>
            <Route exact component={Home} path='/' />
            <Route exact component={Login} path='/login' />
            <Route exact component={Register} path='/register' />
        </Switch>
    )
}