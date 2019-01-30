import React from 'react';
import { NavLink } from 'react-router-dom';
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

const Navigation = props => (
    <nav className='menu'>
        <ul className={props.state.userMenu}>
            <li><NavLink to='/login' onClick={props.closeMenus} className='link' activeClassName='activeLink'>
                Log in
                </NavLink></li>
            <li><NavLink to='/register' onClick={props.closeMenus} className='link' activeClassName='activeLink'>
                Sign up
                </NavLink></li>
        </ul>
        <ul className={props.state.navMenu}>
            <li><NavLink to='/' onClick={props.closeMenus} className='link'>
                Start
                </NavLink></li>
            <li><NavLink to='/idea' onClick={props.closeMenus} className='link' activeClassName='activeLink'>
                Our idea
                </NavLink></li>
            <li><NavLink to='/about' onClick={props.closeMenus} className='link' activeClassName='activeLink'>
                About us
                </NavLink></li>
            <li><NavLink to='/organizations' onClick={props.closeMenus} className='link' activeClassName='activeLink'>
                Organizations
                </NavLink></li>
            <li><NavLink to='/contact' onClick={props.closeMenus} className='link' activeClassName='activeLink'>
                Contact
                </NavLink></li>
        </ul>
    </nav>
);

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

    closeMenus = () => {
        this.setState({
            navMenu: 'hidden',
            userMenu: 'hidden'
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
                    <Navigation state={this.state} closeMenus={this.closeMenus} />
                </div>
            </div>
        );
    }
}

export default Header;