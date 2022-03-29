import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import './header.css';

function Header() {
    const { handleSubmitLogout, role } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <div className="navDefault d-none d-lg-block">
                <div className="row" style={{ marginRight: 0 }}>
                    <div className="col-lg-2 col-md-0 col-sm-0 col-xs-0 pt-2 pb-2">
                        {location.pathname === '/login' ? (
                            <Link className="ps-3" to={'/'}>
                                <img
                                    src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1648224054/Wow/kisspng-apple-logo-apple-desktop-models-5b4a434798a381.9096071615315935436252_glrwju.png"
                                    alt=""
                                    className="logoPic"
                                />
                            </Link>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-around align-items-center navLink">
                        {location.pathname === '/login' ? (
                            <></>
                        ) : (
                            <>
                                <Link to={'/'}>
                                    <img
                                        src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1648224054/Wow/kisspng-apple-logo-apple-desktop-models-5b4a434798a381.9096071615315935436252_glrwju.png"
                                        alt=""
                                        className="logoPic"
                                    />
                                </Link>
                                <Link to={'/store'}>Store</Link>
                                <Link to={'/mac'}>Mac</Link>
                                <Link to={'/ipad'}>iPad</Link>
                                <Link to={'/iphone'}>iPhone</Link>
                                <Link to={'/watch'}>Watch</Link>
                                <Link to={'/airpods'}>Airpods</Link>
                                <Link to={'/tv'}>TV & Home</Link>
                                <Link to={'/cart'}>Order</Link>
                            </>
                        )}
                    </div>
                    <div className="col-lg-2 col-md-0 col-sm-0 col-xs-0 d-flex justify-content-end align-items-center">
                        {role === 'admin' ? (
                            <button className="btn" style={{ color: 'white' }}>
                                Add Product
                            </button>
                        ) : (
                            <></>
                        )}
                        {role === 'guest' ? (
                            location.pathname !== '/login' && (
                                <button
                                    className="btn navButton"
                                    onClick={() => navigate('/login')}
                                >
                                    Login
                                </button>
                            )
                        ) : (
                            <button
                                className="btn navButton "
                                onClick={handleSubmitLogout}
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-block d-lg-none">
                <div className="container-fluid">
                    <Link to={'/'}>
                        <img
                            src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1648224054/Wow/kisspng-apple-logo-apple-desktop-models-5b4a434798a381.9096071615315935436252_glrwju.png"
                            alt=""
                            className="logoPic"
                        />
                    </Link>
                    {location.pathname !== '/login' ? (
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
                    ) : (
                        <></>
                    )}
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to={'/store'}>
                                    Store
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/mac'}>
                                    Mac
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/ipad'} className="nav-link">
                                    iPad
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/iphone'} className="nav-link">
                                    iPhone
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/watch'} className="nav-link">
                                    Watch
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/airpods'} className="nav-link">
                                    Airpods
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/tv'} className="nav-link">
                                    TV & Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/cart'} className="nav-link">
                                    Cart
                                </Link>
                            </li>
                        </ul>
                        {role === 'admin' ? (
                            <button className="btn" style={{ color: 'white' }}>
                                Add Product
                            </button>
                        ) : (
                            <></>
                        )}
                        {role === 'guest' ? (
                            location.pathname !== '/login' && (
                                <button
                                    className="btn navButton"
                                    onClick={() => navigate('/login')}
                                >
                                    Login
                                </button>
                            )
                        ) : (
                            <button
                                className="btn navButton "
                                onClick={handleSubmitLogout}
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
