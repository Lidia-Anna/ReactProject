import React, { useEffect, useState } from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Отримання даних користувачів через fetch
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Помилка завантаження користувачів:', error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Spinner animation="border" />;
    }

    return (
        <div>
            <h1>Users</h1>
            <ListGroup>
                {users.map((user) => (
                    <ListGroup.Item key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default Users;
