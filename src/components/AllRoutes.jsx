import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Checkout from '../pages/checkout/Checkout';
import Contact from '../pages/Contact';
import AddNewpackage from '../pages/dashboard/adminDashboard/AddNewpackage';
import AllOrders from '../pages/dashboard/adminDashboard/AllOrders';
import AllPackages from '../pages/dashboard/adminDashboard/AllPackages';
import Summary from '../pages/dashboard/adminDashboard/Summary';
import Users from '../pages/dashboard/adminDashboard/Users';
import NotFoundInDashboard from '../pages/dashboard/commonDashboard/NotFoundInDashboard';
import Profile from '../pages/dashboard/commonDashboard/Profile';
import Dashboard from '../pages/dashboard/Dashboard';
import AddReview from '../pages/dashboard/userDashboard/AddReview';
import MyOrders from '../pages/dashboard/userDashboard/MyOrders';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Packages from '../pages/Packages';
import Register from '../pages/Register';
import PrivateOutlet from './PrivateOutlet';

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/packages/:packageid" element={<PrivateOutlet />}>
                <Route path="" element={<Checkout />} />
            </Route>
            <Route path="/dashboard" element={<PrivateOutlet />}>
                <Route path="" element={<Dashboard />}>
                    <Route path="summary" element={<Summary />} />
                    <Route path="allusers" element={<Users />} />
                    <Route path="allpackages" element={<AllPackages />} />
                    <Route path="addnewpackage" element={<AddNewpackage />} />
                    <Route path="allorders" element={<AllOrders />} />
                    <Route path="myorders" element={<MyOrders />} />
                    <Route path="addreview" element={<AddReview />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="*" element={<NotFoundInDashboard />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default AllRoutes;
