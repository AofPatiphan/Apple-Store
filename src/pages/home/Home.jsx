import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <div className="homeBody">
            <div>
                <div className="homeBanner">
                    <div className="headline">iPhone 13 Pro</div>
                    <div className="subhead">Oh.So.Pro.</div>
                    <div className="cta-link">
                        <Link to={'/'}>{'Learn more >'}</Link>
                        <Link to={'/'} style={{ marginLeft: '35px' }}>
                            {'Buy >'}
                        </Link>
                    </div>
                </div>
                <div className="iphonesebanner">
                    <div className="abovehead">The new</div>
                    <div className="headline2">iPhone</div>
                    <div className="subhead">
                        Love the power.Love the price.
                    </div>
                    <div className="cta-link">
                        <Link to={'/'}>{'Learn more >'}</Link>
                        <Link to={'/'} style={{ marginLeft: '35px' }}>
                            {'Buy >'}
                        </Link>
                    </div>
                    <div>
                        <img
                            src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1648227947/Wow/IMG_0059_syjdb4.png"
                            alt=""
                            className="sepic"
                        />
                    </div>
                    <div className="ipadbanner">
                        <div className="row"></div>
                        <div style={{ width: '50%' }}>
                            <div className="cta-link2">
                                <img
                                    src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1648229771/Wow/asd_xzqaf4.png"
                                    alt=""
                                />
                                <div>
                                    <Link to={'/'}>{'Learn more >'}</Link>
                                    <Link
                                        to={'/'}
                                        style={{ marginLeft: '35px' }}
                                    >
                                        {'Buy >'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
