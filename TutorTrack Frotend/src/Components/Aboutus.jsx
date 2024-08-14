import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
    textAlign: 'center',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    fontWeight: 'bold',
}));

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: theme.shadows[5],
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[10],
    },
}));

const CardImage = styled(CardMedia)({
    width: '100%',
    height: '200px',
    objectFit: 'cover',
});

const CardContentStyled = styled(CardContent)(({ theme }) => ({
    padding: theme.spacing(2),
}));

const TeamButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

const AboutUs = () => {
    return (
        <StyledContainer maxWidth="lg">
            <SectionTitle variant="h2">About Us</SectionTitle>
            <Typography variant="h5" gutterBottom>
                Welcome to TutorTrack – your trusted partner in connecting students with top-notch tutors for home tuition. We are dedicated to providing a seamless and enriching learning experience for students of all ages.
            </Typography>
            <Typography variant="h6" paragraph>
                Our mission is to bridge the gap between students and experienced tutors by offering personalized, high-quality education that meets the unique needs of each learner. We believe that education is the key to unlocking potential and achieving success, and we strive to make it accessible and engaging for everyone.
            </Typography>
            <Typography variant="h6" paragraph>
                Our vision is to become the leading platform for home tuition by continually enhancing our services, expanding our network of skilled tutors, and leveraging technology to create innovative solutions for education.
            </Typography>

            <SectionTitle variant="h4">Meet Our Team</SectionTitle>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <CardImage
                            component="img"
                            alt="Bill Gates"
                            image="https://media.cnn.com/api/v1/images/stellar/prod/240116120407-bill-gates-091323.jpg?c=16x9&q=h_833,w_1480,c_fill"
                            title="John Doe"
                        />
                        <CardContentStyled>
                            <Typography variant="h6">Bill Gates</Typography>
                            <Typography variant="body2" color="textSecondary">CEO & Founder</Typography>
                            <Typography variant="body2" paragraph>
                                Bill has a passion for education and a vision to revolutionize the way students and tutors connect. With years of experience in the education sector, John leads TutorTrack with a commitment to excellence and innovation.
                            </Typography>
                            <TeamButton variant="contained">Contact Bill</TeamButton>
                        </CardContentStyled>
                    </StyledCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <CardImage
                            component="img"
                            alt="Jane Smith"
                            image="https://imageio.forbes.com/specials-images/imageserve/66ad370b10d0b8e5cf9badc1/Jeff-Bezos/0x0.jpg?crop=3200,1799,x0,y71,safe&height=399&width=711&fit=bounds"
                            title="Jeff Bezos"
                        />
                        <CardContentStyled>
                            <Typography variant="h6">Jeff Bezos</Typography>
                            <Typography variant="body2" color="textSecondary">Chief Operations Officer</Typography>
                            <Typography variant="body2" paragraph>
                                Jeff oversees the day-to-day operations of TutorTrack, ensuring that our platform runs smoothly and efficiently. With her expertise in operational management, she plays a crucial role in our team's success.
                            </Typography>
                            <TeamButton variant="contained">Contact Jeff</TeamButton>
                        </CardContentStyled>
                    </StyledCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <CardImage
                            component="img"
                            alt="Michael Brown"
                            image="https://www.investopedia.com/thmb/XJDLdvCuNbcWk_EVZzXx84ae82c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1258889149-1f50bb87f9d54dca87813923f12ac94b.jpg"
                            title="Michael Brown"
                        />
                        <CardContentStyled>
                            <Typography variant="h6">Elon Musk</Typography>
                            <Typography variant="body2" color="textSecondary">Head of Technology</Typography>
                            <Typography variant="body2" paragraph>
                                Musk is responsible for the technological advancements and innovations at TutorTrack. His expertise in tech development helps us stay ahead of the curve and provide a state-of-the-art platform for our users.
                            </Typography>
                            <TeamButton variant="contained">Contact Musk</TeamButton>
                        </CardContentStyled>
                    </StyledCard>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default AboutUs;
