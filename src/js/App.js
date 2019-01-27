import React from 'react';
import { HashRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
import LandingPage from './LandingPage';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
