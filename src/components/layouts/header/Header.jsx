import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import './header.css';

function Header() {
    const { handleSubmitLogout, role } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div className="navDefault ">
            <div className="row">
                <div className="col-lg-2 col-md-0 col-sm-0 col-xs-0">
                    {location.pathname === '/login' ? (
                        <Link className="ps-3" to={'/'}>
                            <img
                                src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
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
                                    src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
                                    alt=""
                                    className="logoPic"
                                />
                            </Link>
                            <Link to={'/'}>Store</Link>
                            <Link to={'/mac'}>Mac</Link>
                            <Link to={'/'}>iPad</Link>
                            <Link to={'/'}>iPhone</Link>
                            <Link to={'/'}>Watch</Link>
                            <Link to={'/'}>Airpods</Link>
                            <Link to={'/'}>TV & Home</Link>
                            <Link to={'/'}>Cart</Link>
                        </>
                    )}
                </div>
                <div className="col-lg-2 col-md-0 col-sm-0 col-xs-0 d-flex justify-content-end align-items-center">
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
                            className="btn navButton ms-3 me-4"
                            onClick={handleSubmitLogout}
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
