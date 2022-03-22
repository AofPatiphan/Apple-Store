import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../components/auths/login/Login';
import Register from '../components/auths/register/Register';
import Home from '../pages/home/Home';

const routes = {
    guest: [
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '*', element: <Navigate to="/" replace={true} /> },
    ],
    user: [
        { path: '/', element: <Home /> },
        { path: '*', element: <Navigate to="/" replace={true} /> },
    ],
    admin: [
        { path: '/', element: <Home /> },
        { path: '*', element: <Navigate to="/" replace={true} /> },
    ],
};

function RouteConfig() {
    const role = 'user';
    return (
        <>
            {role === 'user' ? (
                <>
                    <Routes>
                        {routes[role].map((item) => (
                            <Route
                                path={item.path}
                                element={item.element}
                                key={item.path}
                            />
                        ))}
                    </Routes>
                    {/* <Footer /> */}
                </>
            ) : (
                <Routes>
                    {routes[role].map((item) => (
                        <Route
                            path={item.path}
                            element={item.element}
                            key={item.path}
                        />
                    ))}
                </Routes>
            )}
        </>
    );
}

export default RouteConfig;
