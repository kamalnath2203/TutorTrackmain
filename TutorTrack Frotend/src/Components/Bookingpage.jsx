import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Button, TextField } from '@mui/material';

const tutors = [
    { id: 1, name: 'John Durairaj', fee: '4000 rs/hr', image: 'https://pbs.twimg.com/media/EQ504kqWkAIAHaw.jpg:large', experience: '5 years', rating: '4.5/5', description: 'Expert in Java and Python' },
    { id: 2, name: 'Inbaraj', fee: '3500 rs/hr', image: 'https://static.toiimg.com/thumb/msid-83029785,width-1280,height-720,imgsize-511983,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg', experience: '3 years', rating: '4.0/5', description: 'Specialist in Python and Data Science' },
    { id: 3, name: 'Heisenberg', fee: '1500 rs/hr', image: '', experience: '2 years', rating: '3.5/5', description: 'Focuses on AIML and Data Structures' },
    { id: 4, name: 'Malar', fee: '900 rs/hr', image: '', experience: '6 years', rating: '4.7/5', description: 'Experienced in Embedded Systems' },
    { id: 5, name: 'Dayalan', fee: '1250 rs/hr', image: '', experience: '4 years', rating: '4.2/5', description: 'Expert in Algorithms and Operating Systems' },
    { id: 6, name: 'Venkatesh', fee: '3000 rs/hr', image: '', experience: '7 years', rating: '4.6/5', description: 'Specializes in Java and AIML' },
    { id: 7, name: 'Sujitha', fee: '2000 rs/hr', image: '', experience: '5 years', rating: '4.4/5', description: 'Expert in Python and Machine Learning' },
    { id: 8, name: 'Ravi Kumar', fee: '2500 rs/hr', image: '', experience: '6 years', rating: '4.3/5', description: 'Specializes in Embedded Systems' },
    { id: 9, name: 'Karthik', fee: '1800 rs/hr', image: '', experience: '3 years', rating: '4.0/5', description: 'Focuses on Data Structures and Algorithms' },
    { id: 10, name: 'Anjali', fee: '2200 rs/hr', image: '', experience: '4 years', rating: '4.5/5', description: 'Expert in Operating Systems and Algorithms' },
    { id: 11, name: 'Rajesh', fee: '3200 rs/hr', image: '', experience: '8 years', rating: '4.7/5', description: 'Specialist in Python and AIML' },
    { id: 12, name: 'Priya', fee: '2700 rs/hr', image: '', experience: '5 years', rating: '4.6/5', description: 'Experienced in Java and Machine Learning' },
];

const BookingPage = () => {
    const { tutorId } = useParams();
    const navigate = useNavigate();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numStudents, setNumStudents] = useState('');

    const tutor = tutors.find(t => t.id === parseInt(tutorId)) || {};

    const {
        image = 'https://via.placeholder.com/200?text=No+Image',
        name = 'Unknown Tutor',
        experience = 'N/A',
        rating = 'N/A',
        description = 'No description available',
        fee = 'N/A',
    } = tutor;

    const handleSubmit = (event) => {
        event.preventDefault();
        // Redirect to payment page with the tutor details passed as state
        navigate('/payment', { state: { tutor } });
    };

    return (
        <Container sx={{ mt: 12, mb: 8 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt={name}
                            image={image}
                            title={name}
                            sx={{ height: 300, objectFit: 'cover' }}
                        />
                        <CardContent>
                            <Typography variant="h5">{name}</Typography>
                            <Typography variant="body1" color="textSecondary">Experience: {experience}</Typography>
                            <Typography variant="body1" color="textSecondary">Rating: {rating}</Typography>
                            <Typography variant="body1" color="textSecondary">{description}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>Book Tutor</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Time"
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Number of Students"
                            type="number"
                            value={numStudents}
                            onChange={(e) => setNumStudents(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <Button variant="contained" color="primary" type="submit">
                            Book Now
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BookingPage;

