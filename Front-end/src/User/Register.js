import {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

function Register(){
    return (
        <Fragment>            
            <NavLink to="/login">Login</NavLink>
            <h1>Register</h1>
        </Fragment>
    );
}

export default Register;