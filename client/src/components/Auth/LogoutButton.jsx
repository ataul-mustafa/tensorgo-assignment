import React from 'react';
import { toast } from 'react-toastify';

const LogoutButton = () => {
    const handleLogout = async () => {
        localStorage.removeItem('token');
        toast.success("Logged out successfully")
        window.location.href = '/';
    };

    return (
        <button style={{background: 'green'}} onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;
