import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TaskCard = ({ task, onDelete }) => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Text>{task.description}</Card.Text>
                <Card.Text><strong>Status:</strong> {task.status}</Card.Text>
                <Card.Text><strong>Priority:</strong> {task.priority}</Card.Text>
                <div>
                    <Link to={`/task/${task.id}/edit`} className="btn btn-primary me-2">
                        Редагувати
                    </Link>
                    <Button variant="danger" onClick={() => onDelete(task.id)}>
                        Видалити
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default TaskCard;