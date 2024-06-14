import React, { useEffect } from 'react';
import FeedbackForm from '../Feedback/FeedbackForm';
import LogoutButton from '../Auth/LogoutButton';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/';
        }
    }, [])
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                <Link to={'/list'}>Feedback List</Link>
                <LogoutButton />
            </div>
            <div className="dashboard-content">
                <FeedbackForm />
            </div>
        </div>
    );
};

export default Dashboard;
