import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { ErrContext } from '../../../contexts/ErrContext';
import './register.css';

function Register() {
    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        confirmPassword,
        setConfirmPassword,
        email,
        setEmail,
        password,
        setPassword,
        handleSubmitRegister,
    } = useContext(AuthContext);
    const { error } = useContext(ErrContext);
    return (
        <>
            <div className="container" style={{ paddingTop: '50px' }}>
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <h1>Register</h1>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <div className="">
                            <form onSubmit={handleSubmitRegister}>
                                <div className="mb-3">
                                    <label className="form-label">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control  ${
                                            error && !firstName
                                                ? 'is-invalid'
                                                : ''
                                        }`}
                                        value={firstName}
                                        placeholder="First name"
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                    />
                                    <div className="invalid-feedback">
                                        Please fill your first name.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control  ${
                                            error && !lastName
                                                ? 'is-invalid'
                                                : ''
                                        }`}
                                        value={lastName}
                                        placeholder="Last name"
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                    />
                                    <div className="invalid-feedback">
                                        Please fill your last name.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className={`form-control  ${
                                            error && !email ? 'is-invalid' : ''
                                        }`}
                                        value={email}
                                        placeholder="E-mail"
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
                                        Please fill your password.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Confirm password
                                    </label>
                                    <input
                                        type="password"
                                        className={`form-control  ${
                                            error && !confirmPassword
                                                ? 'is-invalid'
                                                : ''
                                        }`}
                                        value={confirmPassword}
                                        placeholder="Confirm password"
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                    />
                                    <div className="invalid-feedback">
                                        Please fill your confirm password.
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-secondary registerButton mt-3"
                                >
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </>
    );
}

export default Register;
