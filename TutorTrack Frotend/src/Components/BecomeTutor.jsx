import React, { useState } from 'react';
import axios from 'axios';
import { Container, Box, TextField, Button, Typography, Grid, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BecomeTutor = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [certificate, setCertificate] = useState(null);
    const [experience, setExperience] = useState('');
    const [expectedSalary, setExpectedSalary] = useState('');
    const [availableHoursStart, setAvailableHoursStart] = useState('');
    const [availableHoursEnd, setAvailableHoursEnd] = useState('');
    const [department, setDepartment] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (firstName && lastName && experience && expectedSalary && availableHoursStart && availableHoursEnd && department && certificate) {
            const formData = new FormData();
            formData.append('firstName', firstName);
            formData.append('lastName', lastName);
            formData.append('certificate', certificate);
            formData.append('experience', experience);
            formData.append('expectedSalary', expectedSalary);
            formData.append('availableHoursStart', availableHoursStart);
            formData.append('availableHoursEnd', availableHoursEnd);
            formData.append('department', department);

            try {
                const response = await axios.post('http://localhost:8080/api/tutors/become', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                alert('Tutor application submitted successfully');
                navigate('/tutorhome');
            } catch (error) {
                console.error('Error submitting tutor application:', error);
                alert('Error submitting tutor application: ' + (error.response?.data?.message || error.message));
            }
        } else {
            alert('Please fill in all the fields and upload a certificate.');
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setCertificate(e.target.files[0]);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 5,
                    p: 3,
                    border: '1px solid #ccc',
                    borderRadius: 2,
                    boxShadow: 2,
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Become a Tutor
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="First Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <input
                                accept=".pdf"
                                style={{ display: 'none' }}
                                id="certificate-upload"
                                type="file"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="certificate-upload">
                                <Button
                                    variant="contained"
                                    component="span"
                                    fullWidth
                                    sx={{ mt: 2, mb: 1 }}
                                >
                                    Upload Certificate (PDF)
                                </Button>
                            </label>
                            {certificate && (
                                <Typography variant="body2" align="center" color="textSecondary">
                                    {certificate.name}
                                </Typography>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Experience"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Expected Salary"
                                type="number"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={expectedSalary}
                                onChange={(e) => setExpectedSalary(e.target.value)}
                                required
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Available Hours Start (HH:mm)"
                                type="time"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={availableHoursStart}
                                onChange={(e) => setAvailableHoursStart(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Available Hours End (HH:mm)"
                                type="time"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={availableHoursEnd}
                                onChange={(e) => setAvailableHoursEnd(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Department"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default BecomeTutor;
