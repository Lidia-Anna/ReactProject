import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../templates/MainLayout.jsx';
import Home from '../pages/Home';
import About from '../pages/About';
import Users from '../pages/Users.jsx';
import UserDetail from '../pages/UserDetail';
import Posts from "../pages/Posts.jsx";
import Login from "../pages/Login.jsx";
import ProtectedPage from "../pages/ProtectedPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
const AppRouter = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/users/:id" element={<UserDetail />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/protected"
                        element={
                            <ProtectedRoute>
                                <ProtectedPage />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default AppRouter;
