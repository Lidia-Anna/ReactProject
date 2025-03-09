import React from 'react';
import { Container, Button } from 'react-bootstrap';
import TaskList from '../components/TaskList';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container className="mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Список завдань</h2>
                <Link to="/task/new">
                    <Button variant="success">Додати завдання</Button>
                </Link>
            </div>
            <TaskList />
        </Container>
    );
};

export default HomePage;