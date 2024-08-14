import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Frontpage = () => {
    return (
        <Container className="frontpage-container">
            <Typography variant="h2" align="center" gutterBottom style={{ fontFamily: 'verdana, sans-serif' }}>
                Welcome to TutorTrack 
            </Typography>
            <Typography 
                variant="h5" 
                align="center" 
                gutterBottom 
                style={{ fontFamily: 'georgia, sans-serif', fontStyle: 'italic' }}
            >
                Unlock Your Potential with Our Expert Online Tutors: Personalized, Flexible, and Engaging Learning Experiences Tailored Just for You. Whether You're Looking to Excel in Academics, Master a New Skill, or Prepare for Exams, Our Dedicated Tutors Are Here to Guide You Every Step of the Way. Join Us and Transform Your Learning Journey Today!
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item>
                    <Button variant="contained" color="primary" component={Link} to="/login">
                        Student Login
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary" component={Link} to="/signup">
                        Student Sign Up
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="success" component={Link} to="/become-tutor">
                        Tutor Login
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Frontpage;
