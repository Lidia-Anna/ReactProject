import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetTasksQuery, useDeleteTaskMutation } from '../api/tasksApi';
import TaskCard from './TaskCard';
import { setStatusFilter } from '../features/filterSlice';
import { Button, ButtonGroup, Spinner } from 'react-bootstrap';

const TaskList = () => {
    const { data: tasks, error, isLoading } = useGetTasksQuery();
    const [deleteTask] = useDeleteTaskMutation();
    const filterStatus = useSelector((state) => state.filter.status);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        if (window.confirm('Ви впевнені, що хочете видалити завдання?')) {
            deleteTask(id);
        }
    };

    const filteredTasks = tasks?.filter(task =>
        filterStatus === 'all' ? true : task.status === filterStatus
    );

    if (isLoading) return <Spinner animation="border" />;
    if (error) return <p>Помилка завантаження завдань</p>;

    return (
        <div>
            <ButtonGroup className="mb-3">
                {['all', 'нове', 'в роботі', 'завершене'].map(status => (
                    <Button
                        key={status}
                        variant={filterStatus === status ? "primary" : "outline-primary"}
                        onClick={() => dispatch(setStatusFilter(status))}
                    >
                        {status === 'all' ? 'Всі' : status}
                    </Button>
                ))}
            </ButtonGroup>
            {filteredTasks?.map(task => (
                <TaskCard key={task.id} task={task} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default TaskList;