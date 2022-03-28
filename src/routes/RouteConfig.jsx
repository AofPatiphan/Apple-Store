import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layouts/mainlayout/MainLayout';
import Login from '../components/auths/login/Login';
import Register from '../components/auths/register/Register';
import Home from '../pages/home/Home';
import { AuthContext } from '../contexts/AuthContext';
import Mac from '../pages/mac/Mac';
import Store from '../pages/store/Store';
import ProductDetail from '../pages/productpage/ProductDetail';
import Cart from '../pages/cart/Cart';

const routes = {
    guest: [
        { path: '/', element: <Home /> },
        { path: '/mac', element: <Mac /> },
        { path: '/login', element: <Login /> },
        { path: '/store', element: <Store /> },
        { path: '/register', element: <Register /> },
        { path: '*', element: <Navigate to="/" replace={true} /> },
    ],
    user: [
        { path: '/', element: <Home /> },
        { path: '/mac', element: <Mac /> },
        { path: '/store', element: <Store /> },
        { path: '/store/:productId', element: <ProductDetail /> },
        { path: '/cart/:id', element: <Cart /> },
        { path: '*', element: <Navigate to="/" replace={true} /> },
    ],
    admin: [
        { path: '/', element: <Home /> },
        { path: '/mac', element: <Mac /> },
        { path: '/store', element: <Store /> },
        { path: '/store/:productId', element: <ProductDetail /> },
        { path: '*', element: <Navigate to="/" replace={true} /> },
    ],
};

function RouteConfig() {
    const { role, user } = useContext(AuthContext);

    if ((role === 'user' || role === 'admin') && !user) {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

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
                </>
            ) : role === 'admin' ? (
                <>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            {routes[role]?.map((item) => (
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
                <>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            {routes[role]?.map((item) => (
                                <Route
                                    path={item.path}
                                    element={item.element}
                                    key={item.path}
                                />
                            ))}
                        </Route>
                    </Routes>
                </>
            )}
        </>
    );
}

export default RouteConfig;
