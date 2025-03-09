import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, Form, ListGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Posts = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // Читаємо значення параметру "limit" із query-параметрів (за замовчуванням 10)
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')) : 10;

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limitInput, setLimitInput] = useState('');

    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Помилка завантаження постів:", error);
                setLoading(false);
            });
    }, [limit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (limitInput) {
            // Оновлюємо query-параметри – нове значення параметру "limit"
            setSearchParams({ limit: limitInput });
        }
    };

    return (
        <div>
            <h1>Posts</h1>
            <Form onSubmit={handleSubmit} className="mb-3">
                <Form.Group controlId="limitInput" className="mb-3">
                    <Form.Label>Кількість постів</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Введіть ліміт постів"
                        value={limitInput}
                        onChange={(e) => setLimitInput(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Оновити
                </Button>
            </Form>
            {loading ? (
                <Spinner animation="border" />
            ) : (
                <ListGroup>
                    {posts.map((post) => (
                        <Card key={post.id} as={Link} to={`/posts/${post.id}`} className="text-decoration-none text-dark">
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.body}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </ListGroup>
            )}
        </div>
    );
};

export default Posts;
