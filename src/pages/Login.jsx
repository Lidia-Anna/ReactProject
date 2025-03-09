import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Симулюємо вхід користувача – зберігаємо токен у localStorage
        localStorage.setItem('token', 'my-secret-token');
        // Після логіну виконуємо навігацію до захищеної сторінки
        navigate('/protected');
    };

    return (
        <div>
            <h1>Login</h1>
            <p>Будь ласка, увійдіть, щоб отримати доступ до захищеної сторінки.</p>
            <Button onClick={handleLogin}>Увійти</Button>
        </div>
    );
};

export default Login;
