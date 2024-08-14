import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import { styled } from '@mui/system';

const courses = [
    {
        id: 1,
        name: 'Advanced  java',
        // description: '',
        image: 'https://via.placeholder.com/200?text=Math',
        staff: 'John Durairaj',
    },
    {
        id: 2,
        name: 'DevOps essential',
        // description: 'Physics, Chemistry, and Biology basics.',
        image: 'https://via.placeholder.com/200?text=Science',
        staff: 'Inbaraj',
    },
    {
        id: 3,
        name: 'DSA',
        // description: 'Literature and language skills.',
        image: 'https://via.placeholder.com/200?text=English',
        staff: 'Heisenberg',
    },
    // Add more courses as needed
];

const StyledCard = styled(Card)(({ theme }) => ({
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[6],
    },
}));

const YourCourses = () => {
    return (
        <Container sx={{ mt: 12, mb: 8 }}>
            <Typography variant="h4" gutterBottom>
                Your Registered Courses
            </Typography>
            <Grid container spacing={4}>
                {courses.map(course => (
                    <Grid item xs={12} sm={6} md={4} key={course.id}>
                        <StyledCard>
                            <CardMedia
                                component="img"
                                alt={course.name}
                                height="140"
                                image={course.image}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {course.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {course.description}
                                </Typography>
                                <Box mt={2}>
                                    <Typography variant="body2" color="textSecondary">
                                        <strong>Staff:</strong> {course.staff}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default YourCourses;
