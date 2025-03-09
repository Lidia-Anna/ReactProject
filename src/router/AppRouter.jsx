import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../templates/MainLayout.jsx';
import Home from '../pages/Home';
import Posts from "../pages/Posts.jsx";
import PostDetail from '../pages/PostDetail';



import Login from "../pages/Login.jsx";
import ProtectedPage from "../pages/ProtectedPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
const AppRouter = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
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
