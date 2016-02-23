import React from 'react'
import { match, Router, browserHistory } from 'react-router'
import { render } from 'react-dom'
import routes from './routes/RootRoute'
import {Promise} from 'es6-promise';
import map from 'lodash/map';
import filter from 'lodash/map';

const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`

/*
// calling `match` is simply for side effects of
// loading route/component code for the initial location
match({ routes, location }, (err, redirectLocation, renderProps) => {
    render(
        <Router routes={routes} history={browserHistory} />,
        document.getElementById('app')
    )
});
*/

match({ routes, location, history: browserHistory }, (error, redirectLocation, renderProps) => {
    render(
        <Router {...renderProps} />,
        document.getElementById('app')
    )
});

/*
match({ routes, location }, (err, redirectLocation, renderProps) => {
    Promise.all(
        map(
            filter(renderProps.routes, 'getChildRoutes'), (route) => {
                //console.log("client.js getChildRoutes: " + route);
                return new Promise((resolve, reject) => route.getChildRoutes(renderProps.location, resolve))
            }
        )
    ).then(() => {
        render(
        <Router routes={routes} history={browserHistory} />,
            document.getElementById('app')
        )
    });
});
*/

/*
match({ routes, location }, (err, redirectLocation, renderProps) => {
    //console.log(location);
    //console.log(JSON.stringify(renderProps));

    if(location == "/about") {
        Promise.all(
            System.import('./routes/AboutRoute')
        ).then(() => {
            render(
            <Router routes={routes} history={browserHistory} />,
                document.getElementById('app')
            )
        });
    } else {
        render(
            <Router routes={routes} history={browserHistory} />,
            document.getElementById('app')
        )
    }
});
*/
