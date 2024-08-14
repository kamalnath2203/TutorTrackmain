import React from 'react';
import { Container, Typography, Grid, List, ListItem, ListItemText, Box } from '@mui/material';

const enrolledStudents = [
    'Student 1',
    'Student 2',
    'Student 3',
];

const todoList = [
    'Prepare next lesson',
    'Grade assignments',
    'Update course materials',
];

const TutorHome = () => {
    return (
        <Container>
            <Box 
                sx={{ 
                    my: 4, 
                    p: 2, 
                    backgroundColor: '#f0f0f0', 
                    borderRadius: 1, 
                    textAlign: 'center' 
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Welcome to TutorTrack!
                </Typography>
                <Typography variant="h6" gutterBottom>
                    We're excited to have you onboard as a tutor.
                </Typography>
                <Typography variant="body1">
                    Here you can manage your enrolled students and keep track of your to-do list.
                </Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                        Enrolled Students
                    </Typography>
                    <List>
                        {enrolledStudents.map((student, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={student} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                        To-do List
                    </Typography>
                    <List>
                        {todoList.map((task, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={task} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TutorHome;
