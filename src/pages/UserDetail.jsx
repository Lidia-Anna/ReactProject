import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Spinner } from 'react-bootstrap';

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Отримання детальної інформації про користувача
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.error('Помилка завантаження даних користувача:', error))
            .finally(() => setLoading(false))
    }, [id]);

    if (loading) {
        return <Spinner animation="border" />;
    }

    if (!user) {
        return <p>Користувача не знайдено.</p>;
    }

    return (
        <Card>
            <Card.Header>Детальна інформація</Card.Header>
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                    <strong>Email:</strong> {user.email}<br />
                    <strong>Телефон:</strong> {user.phone}<br />
                    <strong>Веб-сайт:</strong> {user.website}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default UserDetail;
