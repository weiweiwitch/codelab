import * as React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import { Link } from 'react-router-dom';

const BasicExample = ({match}: RouteComponentProps<{}>) => {

    console.info('BasicExample ', match.path, match.url);
    return (
        <div>
            <ul>
                <li>
                    <Link to={`/`}>Return to Index</Link>
                </li>
                <li>
                    <Link to={`${match.url}`}>Home</Link>
                </li>
                <li>
                    <Link to={`${match.url}/about`}>About</Link>
                </li>
                <li>
                    <Link to={`${match.url}/topics`}>Topics</Link>
                </li>
            </ul>

            <hr/>
            <Switch>
                <Route exact={true} path={match.url} component={Home}/>
                <Route path={`${match.url}/about`} component={About}/>
                <Route path={`${match.url}/topics`} component={Topics}/>
            </Switch>
        </div>
    );
};

// 简单页面
const Home = ({match}: RouteComponentProps<{}>) => {

    console.info('Home ', match.path, match.url);
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
};

// 简单页面
const About = ({match}: RouteComponentProps<{}>) => {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
};

const Topics = ({match}: RouteComponentProps<{}>) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route
            exact={true}
            path={match.url}
            render={() => <h3>Please select a topic. path: {match.url}</h3>}
        />
    </div>
);

const Topic = ({match}: RouteComponentProps<{ topicId: string }>) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

export default BasicExample;