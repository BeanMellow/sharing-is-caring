import app from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBd3iqQ8UbyZy7e8V7CBc2XY3pytxORBJ8",
    authDomain: "to-do-list-a34ba.firebaseapp.com",
    databaseURL: "https://to-do-list-a34ba.firebaseio.com",
    projectId: "to-do-list-a34ba",
    storageBucket: "to-do-list-a34ba.appspot.com",
    messagingSenderId: "1028098908344"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    // Auth API

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () =>
        this.auth.signOut();

    doPasswordReset = email =>
        this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;