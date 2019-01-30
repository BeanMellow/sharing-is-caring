import React from 'react';
// import { FirebaseContext } from './Firebase/firebaseIndex';
import { withFirebase } from './Firebase/firebaseIndex';
import { Link } from 'react-router-dom';

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
};

class RegisterFormBase extends React.Component {
    state = { ...INITIAL_STATE };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit = event => {
        const { username, email, passwordOne } = this.state;
        event.preventDefault();
        console.log('Submit');

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    render() {
        const isInvalid =
            this.state.passwordOne !== this.state.passwordTwo ||
            this.state.passwordOne === '' ||
            this.state.email === '' ||
            this.state.username === '';

        return (
            <div className='formContainer'>
                <div className='mainContainer'>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='username'>Username</label>
                        <input
                            id='username'
                            value={this.state.username}
                            onChange={this.handleChange('username')}
                            type='text'
                            placeholder='Full name'
                        />

                        <label htmlFor='email'>Email</label>
                        <input
                            id='email'
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            // type='email'
                            type='text'
                            placeholder='Email Address'
                        />

                        <label htmlFor='passwordOne'>Password</label>
                        <input
                            id='passwordOne'
                            value={this.state.passwordOne}
                            onChange={this.handleChange('passwordOne')}
                            type='password'
                            placeholder='Password'
                        />

                        <label htmlFor='passwordTwo'>Repeat password</label>
                        <input
                            id='passwordTwo'
                            value={this.state.passwordTwo}
                            onChange={this.handleChange('passwordTwo')}
                            type='password'
                            placeholder='Reapeat Password'
                        />

                        <button disabled={isInvalid} type='submit'>
                            Sign up
                        </button>
                        {this.state.error && <p>{this.state.error.nessage}</p>}
                        <p>Already got an account? <Link to='/login' className='link'>Sign in</Link></p>
                    </form>
                </div>
            </div>
        );
    }
}

const RegisterForm = withFirebase(RegisterFormBase);

const Register = () => (
    <div>
        <h2>Register</h2>
        <RegisterForm />
        {/* <FirebaseContext.Consumer>
            {firebase => <RegisterForm firebase={firebase} />}
        </FirebaseContext.Consumer> */}
    </div>
);

export default Register;