import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GoogleLoginButton from './components/Auth/GoogleLoginButton';
import Dashboard from './components/Dashboard/Dashboard';
import FeedbackList from './components/Feedback/FeedbackList';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<GoogleLoginButton />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/list" element={<FeedbackList />} />
                </Routes>
            </Router>
            <ToastContainer
                position="top-center"
                autoClose={2500}
            />
        </>
    );
};

export default App;
