import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import TaskForm from '../components/TaskForm';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetTasksQuery, useAddTaskMutation, useUpdateTaskMutation } from '../api/tasksApi';

const TaskEditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: tasks, isLoading } = useGetTasksQuery();
    const [addTask] = useAddTaskMutation();
    const [updateTask] = useUpdateTaskMutation();

    const isNew = id === 'new' || id === undefined;

    if (isLoading) return <Spinner animation="border" />;

    let initialValues = {
        title: '',
        description: '',
        status: 'нове',
        priority: 'medium',
    };

    if (!isNew) {
        const task = tasks.find(t => t.id.toString() === id);
        if (task) {
            initialValues = task;
        }
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            if (isNew) {
                await addTask(values).unwrap();
            } else {
                await updateTask({ id, ...values }).unwrap();
            }
            navigate('/');
        } catch (error) {
            console.error('Помилка збереження завдання', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Container className="mt-4">
            <h2>{isNew ? 'Додати завдання' : 'Редагувати завдання'}</h2>
            <TaskForm initialValues={initialValues} onSubmit={handleSubmit} />
        </Container>
    );
};

export default TaskEditPage;