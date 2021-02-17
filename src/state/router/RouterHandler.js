import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import { Loading } from './RouterHandler.styled';

import routes from './routes';

const RouterHandler = () => (
    <Router>
        <Suspense fallback={<Loading />}>
            <Switch>
                {routes.map((route) => {
                    return (
                        <Route key={route.name} {...route} />
                    )
                })}
                <Route path='*'>
                    <Redirect to='/404' />
                </Route>
            </Switch>
        </Suspense>
    </Router>
);
export default RouterHandler;
