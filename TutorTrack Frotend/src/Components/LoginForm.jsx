import React, { useState } from 'react';
import axios from 'axios';
import { Typography, TextField, Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        let valid = true;

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Please enter a valid email address.');
            valid = false;
        } else {
            setEmailError('');
        }
        if (!password) {
            setPasswordError('Password is required.');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            try {
                if (email === 'admin@gmail.com' && password === 'asd') {
                    toast.success('Admin login successful!');
                    navigate('/admin-dashboard');
                } else {
                    const response = await axios.post('http://localhost:8080/login', { email, password });
                    if (response.status === 200) {
                        toast.success('Login successful!');
                        navigate('/homepage');
                    }
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    toast.error('Invalid credentials');
                } else {
                    toast.error('An error occurred');
                }
            }
        }
    };

    const handleSignUpRedirect = () => {
        navigate('/signup');
    };

    const handleTutorLoginRedirect = () => {
        navigate('/tutor-login');
    };

    return (
        <Box 
            sx={{
                minHeight: '100vh', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                p: 2
            }}
        >
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: 8,
                        border: '1px solid #ccc',
                        padding: 4,
                        borderRadius: 2,
                        boxShadow: 2,
                        backgroundColor: '#fff'
                    }}
                >
                    <Typography variant="h5">Login</Typography>
                    <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={!!emailError}
                            helperText={emailError}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={!!passwordError}
                            helperText={passwordError}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, backgroundColor: '#008000', '&:hover': { backgroundColor: '#005700' } }}
                        >
                            Login
                        </Button>
                        <Button
                            fullWidth
                            variant="text"
                            sx={{ color: '#008000', '&:hover': { color: '#005700' } }}
                            onClick={handleSignUpRedirect}
                        >
                            Don't have an account? Sign Up
                        </Button>
                        <Button
                            fullWidth
                            variant="text"
                            sx={{ color: '#008000', '&:hover': { color: '#005700' } }}
                            onClick={handleTutorLoginRedirect}
                        >
                            Sign in as a Tutor
                        </Button>
                    </Box>
                </Box>
            </Container>
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    backgroundColor: '#f5f5f5',
                    textAlign: 'center',
                    py: 2
                }}
            >
                
            </Box>
            <ToastContainer />
        </Box>
    );
};

export default Login;
