import React from 'react';
import { HashRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import Idea from './Idea';
import About from './About';
import Organizations from './Organizations';
import Contact from './Contact';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                {/* <Switch> */}
                <React.Fragment>
                    <Header />
                    <Route exact path='/' component={LandingPage} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/idea' component={Idea} />
                    <Route path='/about' component={About} />
                    <Route path='/organizations' component={Organizations} />
                    <Route path='/contact' component={Contact} />
                </React.Fragment>
                {/* </Switch> */}
            </HashRouter>
        );
    }
}

export default App;
