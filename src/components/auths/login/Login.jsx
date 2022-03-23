import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="">
            <div className="container" style={{ paddingTop: '50px' }}>
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <h1>Login</h1>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <div className="">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3 form-check d-flex justify-content-between">
                                    <div>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                        />
                                        <label className="form-check-label">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link
                                        to={'/register'}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        Create account
                                    </Link>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-secondary loginButton"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    );
}

export default Login;
