import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
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
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Confirm password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                    />
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
