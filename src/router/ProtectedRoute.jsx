import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const [isAuthChecked, setIsAuthChecked] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Симулюємо перевірку токена з localStorage
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
        setIsAuthChecked(true);
    }, []);

    if (!isAuthChecked) {
        // Поки перевірка не завершена, показуємо індикатор завантаження
        return <div>Завантаження...</div>;
    }

    if (!isAuthenticated) {
        // Якщо токена немає, перенаправляємо на сторінку логіну
        return <Navigate to="/login" replace />;
    }

    // Якщо користувач автентифікований, відображаємо захищений контент
    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
