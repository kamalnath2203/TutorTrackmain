import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const tutors = [
    { id: 1, name: 'John Durairaj', fee: '4000 rs/hr', image: 'https://www.behindwoods.com/uploads/60051e79da7ba.jpg', experience: '5 years', rating: '4.5/5', description: 'Expert in Java and Python' },
    { id: 2, name: 'Inbaraj', fee: '3500 rs/hr', image: 'https://static.toiimg.com/thumb/msid-83029785,width-1280,height-720,imgsize-511983,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg', experience: '3 years', rating: '4.0/5', description: 'Specialist in Python and Data Science' },
    { id: 3, name: 'Heisenberg', fee: '1500 rs/hr', image: 'https://www.giantfreakinrobot.com/wp-content/uploads/2022/08/bryan-cranston.jpg', experience: '2 years', rating: '3.5/5', description: 'Focuses on AIML and Data Structures' },
    { id: 4, name: 'Malar', fee: '900 rs/hr', image: 'https://static.toiimg.com/thumb/msid-47600242,imgsize-33916,width-400,resizemode-4/47600242.jpg', experience: '6 years', rating: '4.7/5', description: 'Experienced in Embedded Systems' },
    { id: 5, name: 'Dayalan', fee: '1250 rs/hr', image: 'https://images.filmibeat.com/ta/img/2019/11/aduthasattai133-1575096890.jpg', experience: '4 years', rating: '4.2/5', description: 'Expert in Algorithms and Operating Systems' },
    { id: 6, name: 'Venkatesh', fee: '3000 rs/hr', image: '', experience: '7 years', rating: '4.6/5', description: 'Specializes in Java and AIML' },
    { id: 7, name: 'Sujitha', fee: '2000 rs/hr', image: '', experience: '5 years', rating: '4.4/5', description: 'Expert in Python and Machine Learning' },
    { id: 8, name: 'Ravi Kumar', fee: '2500 rs/hr', image: '', experience: '6 years', rating: '4.3/5', description: 'Specializes in Embedded Systems' },
    { id: 9, name: 'Karthik', fee: '1800 rs/hr', image: '', experience: '3 years', rating: '4.0/5', description: 'Focuses on Data Structures and Algorithms' },
    { id: 10, name: 'Anjali', fee: '2200 rs/hr', image: '', experience: '4 years', rating: '4.5/5', description: 'Expert in Operating Systems and Algorithms' },
    { id: 11, name: 'Rajesh', fee: '3200 rs/hr', image: '', experience: '8 years', rating: '4.7/5', description: 'Specialist in Python and AIML' },
    { id: 12, name: 'Priya', fee: '2700 rs/hr', image: '', experience: '5 years', rating: '4.6/5', description: 'Experienced in Java and Machine Learning' },
];

const courses = [
    { id: 1, name: 'Advanced Java', description: 'Comprehensive Java programming course.' },
    { id: 2, name: 'Python', description: 'Introduction to Python programming.' },
    { id: 3, name: 'AIML', description: 'In-depth course on AI and Machine Learning.' },
    { id: 4, name: 'Data Structures and Algorithm', description: 'Fundamentals of data structures and algorithms.' },
    { id: 5, name: 'Embedded System', description: 'Understanding embedded systems and their applications.' },
    { id: 6, name: 'Operating System', description: 'Comprehensive study of operating systems.' },
];

const StyledCard = styled(Card)(({ theme }) => ({
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    height: 200,
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
        height: 150,
    },
}));

const CoursePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const course = courses.find(course => course.id === parseInt(id));

    
    const [searchQuery, setSearchQuery] = useState('');

    
    const filteredTutors = tutors.filter(tutor =>
        tutor.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const defaultImage = 'https://via.placeholder.com/150?text=No+Image';

    const handleContactClick = (tutorId) => {
        navigate(`/booking/${tutorId}`);
    };

    return (
        <Container sx={{ mt: 12, mb: 8 }}>
            <Typography variant="h2" gutterBottom align="center" color="primary">
                {course.name}
            </Typography>
            <Typography variant="h5" gutterBottom align="center">
                {course.description}
            </Typography>
            <Typography variant="h4" gutterBottom>
                Available Tutors
            </Typography>
            <TextField
                fullWidth
                variant="outlined"
                label="Search Tutors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ mb: 4 }}
            />
            <Grid container spacing={4}>
                {filteredTutors.map((tutor) => (
                    <Grid item xs={12} sm={6} md={4} key={tutor.id}>
                        <StyledCard>
                            <StyledCardMedia
                                component="img"
                                alt={tutor.name}
                                image={tutor.image || defaultImage}
                                title={tutor.name}
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {tutor.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" gutterBottom>
                                    {tutor.fee}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleContactClick(tutor.id)}
                                >
                                    Contact Tutor
                                </Button>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CoursePage;
