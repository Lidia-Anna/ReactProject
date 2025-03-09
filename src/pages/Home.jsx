import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        // Програмна навігація на сторінку About
        navigate('/posts');
    };

    return (
        <div>
            <h1>Home Page</h1>
            <p>Ласкаво просимо на демонстраційну сторінку проекту з React Router.</p>
            <Button variant="primary" onClick={handleNavigate}>
                Перейти до Blogs сторінки
            </Button>
        </div>
    );
};

export default Home;
