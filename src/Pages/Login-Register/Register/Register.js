import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './register.css';
const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password Did not Match, Try again !!')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.lastname, history);
        e.preventDefault();
    }
    return (
        <div className="container my-5 ">
            <div className="register-form mx-auto w-75">
                <h3 className="fw-bold text-center my-3">Register : Create Account</h3>
                {
                    !isLoading && <form onSubmit={handleLoginSubmit} className="form-inputField mb-3">
                        <input className="border-0" onBlur={handleOnBlur} type="name" name="firstname" placeholder="First Name" />
                        <br />
                        <input className="border-0" onBlur={handleOnBlur} type="name" name="lastname" placeholder="Last Name" required />
                        <br />
                        <input className="border-0" onBlur={handleOnBlur} type="email" name="email" placeholder="Your Email" required />
                        <br />
                        <input className="border-0" onBlur={handleOnBlur} type="password" name="password" id="" placeholder="Your Password" required />
                        <br />
                        <input className="border-0" onBlur={handleOnBlur} type="password" name="password2" id="" placeholder="Re-Enter Password" required />
                        <br />
                        <input className="submit d-flex m-auto btn rounded-2 w-auto text-center px-4 py-1 " type="submit" value="Submit" />
                    </form>
                }
                {
                    isLoading && <Spinner animation="border" />
                }

                {
                    user?.email && <Alert variant='success'>Registered Successfully</Alert>
                }

                {
                    authError && <Alert variant='danger'>{authError}</Alert>
                }
                <p>Already Have an acount? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;