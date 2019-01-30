import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './js/App';
// import Firebase, { FirebaseContext } from './js/Firebase';
import Firebase, { FirebaseContext } from './js/Firebase/firebaseIndex';

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <FirebaseContext.Provider value={new Firebase()}>
            <App />
        </FirebaseContext.Provider>,
        document.getElementById('app'));
});