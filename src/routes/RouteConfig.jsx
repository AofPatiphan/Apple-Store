import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layouts/mainlayout/MainLayout';
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
    const role = 'guest';
    return (
        <>
            {role === 'user' ? (
                <>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            {routes[role].map((item) => (
                                <Route
                                    path={item.path}
                                    element={item.element}
                                    key={item.path}
                                />
                            ))}
                        </Route>
                    </Routes>
                    {/* <Footer /> */}
                </>
            ) : role === 'admin' ? (
                <>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            {routes[role].map((item) => (
                                <Route
                                    path={item.path}
                                    element={item.element}
                                    key={item.path}
                                />
                            ))}
                        </Route>
                    </Routes>
                </>
            ) : (
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        {routes[role].map((item) => (
                            <Route
                                path={item.path}
                                element={item.element}
                                key={item.path}
                            />
                        ))}
                    </Route>
                </Routes>
            )}
        </>
    );
}

export default RouteConfig;
