import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import './header.css';

function Header() {
    const { handleSubmitLogout } = useContext(AuthContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>
                        <img
                            src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1648014900/Wow/kisspng-world-of-warcraft-emoticon-facebook-computer-icons-wow-5ac0eafc601834.3491116815225925083936_xwfj1s.png"
                            alt=""
                            style={{
                                width: '40px',
                                height: '40px',
                                objectFit: 'cover',
                            }}
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to={'/'}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/login'}>
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/register'}>
                                    Register
                                </Link>
                            </li>
                        </ul>
                        <button
                            type="button"
                            className="btn"
                            onClick={handleSubmitLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
