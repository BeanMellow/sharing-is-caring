import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { faUserCog } from '@fortawesome/free-solid-svg-icons';

const CallToAction = () => (
    <div className='ctaContainer'>
        <div className='mainContainer'>
            <div className='image'></div>
            <div>
                <h2>Start helping today!</h2>
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
                {/* <Header /> */}
                <CallToAction />
            </React.Fragment>
        );
    }
}

export default LandingPage;