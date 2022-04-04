import React, { useContext } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { ErrContext } from '../../../contexts/ErrContext';

function Login() {
    const {
        facebookLogin,
        email,
        setEmail,
        password,
        setPassword,
        handleSubmitLogin,
    } = useContext(AuthContext);
    const { error } = useContext(ErrContext);

    return (
        <>
            <div className="container" style={{ paddingTop: '50px' }}>
                <div className="row">
                    <div className="col-lg-4 col-md-2 col-sm-2 col-xs-0"></div>
                    <div className="col-lg-4 col-md-8 col-sm-8 col-xs-12">
                        <h1>Login</h1>
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-2 col-xs-0"></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-2 col-sm-2 col-xs-0"></div>
                    <div className="col-lg-4 col-md-8 col-sm-8 col-xs-12">
                        <div className="">
                            <form onSubmit={handleSubmitLogin}>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className={`form-control  ${
                                            error && !email ? 'is-invalid' : ''
                                        }`}
                                        placeholder="E-mail"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    <div className="invalid-feedback">
                                        Please fill your email.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className={`form-control  ${
                                            error && !password
                                                ? 'is-invalid'
                                                : ''
                                        }`}
                                        value={password}
                                        placeholder="Password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    <div className="invalid-feedback">
                                        Please fill your email.
                                    </div>
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
                                <button
                                    type="submit"
                                    className="btn facebookLoginButton loginButton"
                                    onClick={facebookLogin}
                                >
                                    <strong>Facebook</strong>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-2 col-xs-0"></div>
                </div>
            </div>
        </>
    );
}

export default Login;
