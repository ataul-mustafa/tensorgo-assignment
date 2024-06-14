import React, { useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './login.css';
import { toast } from 'react-toastify';

const GoogleLoginButton = () => {
    const onSuccess = async (response) => {
        const { credential } = response;
        try {
            const result = await axios.post('http://localhost:5000/auth/google/callback', { token: credential });
            localStorage.setItem("token", result.data.token);
            toast.success("Login success");
            window.location.href = '/dashboard'; // Redirect on successful login
        } catch (error) {
            toast.error(error.response.data.error);
        }
    };

    const onFailure = (response) => {
        toast.error("Login Failed");
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            window.location.href = '/dashboard';
        }
    }, [])

    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID}>
            <GoogleLogin
                onSuccess={onSuccess}
                onError={onFailure}
                className="google-login-button" // Apply custom button class if needed
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;
