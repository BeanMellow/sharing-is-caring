import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';

const Logo = props => {
    return (
        <div className='logoContainer'>
            {/* <div className='mainContainer'> */}
            <div>
                <FontAwesomeIcon icon={faBars} onClick={props.toggleMenu('navMenu')} />
                {/* <h1 className='logo'>SharingIsCaring</h1> */}
                <h1 className='logo'>Caring By Sharing</h1>
                <FontAwesomeIcon icon={faUserCog} onClick={props.toggleMenu('userMenu')} />
            </div>
        </div>
    );
}

const Navigation = props => {
    return (
        <nav className='menu'>
            <ul className={props.state.userMenu}>
                <li>Log in</li>
                <li>Sign up</li>
            </ul>
            <ul className={props.state.navMenu}>
                <li>Start</li>
                <li>Our idea</li>
                <li>About us</li>
                <li>Organizations</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

class Header extends React.Component {
    state = {
        username: false,
        navMenu: 'hidden',
        userMenu: 'hidden'
    }

    toggleMenu = menu => () => {
        // const toggle = this.state[menu] === 'hidden' ? 'active' : 'hidden';
        // const toggle = this.state[menu] === 'hidden' ? 'slideInRight' : 'hidden';
        const slide = menu === 'navMenu' ? 'slideInLeft' : 'slideInRight';
        const toggle = this.state[menu] === 'hidden' ? slide : 'hidden';
        const otherMenu = menu === 'navMenu' ? 'userMenu' : 'navMenu';
        this.setState({
            [menu]: toggle,
            [otherMenu]: 'hidden'
        });
    }

    render() {
        return (
            <div className='headerContainer'>
                <div className='mainContainer'>
                    <Logo
                        username={this.state.username}
                        toggleMenu={this.toggleMenu}
                    />
                    <Navigation state={this.state} />
                </div>
            </div>
        );
    }
}

const CallToAction = () => (
    <div className='ctaContainer'>
        <div className='mainContainer'>
            <div>
                <div className='image'></div>
                <h2>Start helping today!</h2>
            </div>
            <div>
                <h2>Give away stuff you no longer use to those who actually need it.</h2>
                <div className='decoration'></div>
            </div>
        </div>
    </div>
);

class LandingPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <CallToAction />
            </React.Fragment>
        );
    }
}

export default LandingPage;