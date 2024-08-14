import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Box, Typography, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper as TablePaper } from '@mui/material';

const StaffRegistration = () => {
    const [tutors, setTutors] = useState([]);
    const [registeredTutors, setRegisteredTutors] = useState([]);

    useEffect(() => {
        const fetchTutors = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/tutors/fetch');
                setTutors(response.data);
            } catch (error) {
                console.error('Error fetching tutors:', error);
                alert('Error fetching tutors: ' + (error.response?.data?.message || error.message));
            }
        };

        fetchTutors();
    }, []);

    const handleRegister = (tutor) => {
        setRegisteredTutors([...registeredTutors, tutor]);
    };

    const handleTerminate = async (tutorId) => {
        try {
            await axios.delete(`http://localhost:8080/api/tutors/${tutorId}`);
            // Remove the tutor from the registered list
            setRegisteredTutors(registeredTutors.filter(tutor => tutor.id !== tutorId));
            // Refresh the tutor list
            const updatedTutors = await axios.get('http://localhost:8080/api/tutors/fetch');
            setTutors(updatedTutors.data);
            alert('Tutor terminated successfully');
        } catch (error) {
            console.error('Error terminating tutor:', error);
            alert('Error terminating tutor: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 5,
                    p: 3,
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Staff Registration
                </Typography>
                <Grid container spacing={3}>
                    {tutors.map((tutor) => (
                        <Grid item xs={12} sm={6} md={4} key={tutor.id}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Typography variant="h6" component="h2">
                                    {tutor.firstName} {tutor.lastName}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Experience: {tutor.experience}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Expected Salary: ${tutor.expectedSalary}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Available Hours: {tutor.availableHoursStart} - {tutor.availableHoursEnd}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Department: {tutor.department}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{ mt: 2 }}
                                    onClick={() => handleRegister(tutor)}
                                >
                                    Register
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    fullWidth
                                    sx={{ mt: 2 }}
                                    onClick={() => handleTerminate(tutor.id)}
                                >
                                    Terminate
                                </Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {registeredTutors.length > 0 && (
                    <Box mt={5}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Registered Tutors
                        </Typography>
                        <TableContainer component={TablePaper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Experience</TableCell>
                                        <TableCell>Expected Salary</TableCell>
                                        <TableCell>Department</TableCell>
                                        <TableCell>Available Hours</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {registeredTutors.map((tutor) => (
                                        <TableRow key={tutor.id}>
                                            <TableCell>{tutor.firstName} {tutor.lastName}</TableCell>
                                            <TableCell>{tutor.experience}</TableCell>
                                            <TableCell>${tutor.expectedSalary}</TableCell>
                                            <TableCell>{tutor.department}</TableCell>
                                            <TableCell>{tutor.availableHoursStart} - {tutor.availableHoursEnd}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default StaffRegistration;
