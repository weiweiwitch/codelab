import * as React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
// import Other from './containers/other';

import BasicExample from './containers/basic';
import Router4Redux from './containers/router4redux';

const AppRoute = () => {
    console.info('AppRoute');
    return (
        <div>
            <ul>
                <li><Link to={`/`}>Index</Link></li>
                <li><Link to="/basic">基本路由测试</Link></li>
                <li><Link to="/router4redux">测试Router和Redux的结合</Link></li>
            </ul>

            <hr/>

            <Route path={`/basic`} component={BasicExample}/>
            <Route path={`/router4redux`} component={Router4Redux}/>
            <Route render={() => <div>Always Match</div>}/>
        </div>
    );
};

export default AppRoute;