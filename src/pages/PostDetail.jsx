import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Spinner } from 'react-bootstrap';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Отримання детальної інформації про користувача
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setPost(data))
            .catch((error) => console.error('Помилка завантаження даних', error))
            .finally(() => setLoading(false))
    }, [id]);

    if (loading) {
        return <Spinner animation="border" />;
    }

    if (!post) {
        return <p>Пост не знайдено.</p>;
    }

    return (
        <Card>
            <Card.Header>Детальна інформація</Card.Header>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    <strong>Назва поста: </strong> {post.title}<br/>
                    <strong>Опис поста: </strong> {post.body}<br/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PostDetail;