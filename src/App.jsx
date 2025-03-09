import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskEditPage from './pages/TaskEditPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/task/new" element={<TaskEditPage />} />
                <Route path="/task/:id/edit" element={<TaskEditPage />} />
            </Routes>
        </Router>
    );
};

export default App;