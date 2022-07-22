import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Checkout from '../pages/checkout/Checkout';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Packages from '../pages/Packages';
import Register from '../pages/Register';
import Dashboard from './Dashboard';
import PrivateOutlet from './PrivateOutlet';

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:packageid" element={<Checkout />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/*" element={<PrivateOutlet />}>
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );
}

export default AllRoutes;
