import {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

function Login(){
    return (
        <Fragment>            
            <NavLink to="/register">Register</NavLink>
            <h1>Login</h1>
        </Fragment>
    );
}

export default Login;