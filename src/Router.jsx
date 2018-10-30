import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Other from './Other';
import App from './App';

export default function Router(props) {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/other" component={Other} />
            </Switch>
        </BrowserRouter>      
    );
}