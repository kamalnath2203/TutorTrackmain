import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const cities = [
    { name: 'Chennai', image: 'https://static.toiimg.com/thumb/49355017/How-to-reach-Chennai.jpg?width=636&height=358&resize=4' },
    { name: 'Coimbatore', image: 'https://i.pinimg.com/736x/16/07/94/160794bddcbea28704b90e76d67e3969.jpg' },
    { name: 'Madurai', image: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2022/10/8/madurai-temple-1.jpg' },
    { name: 'Trichy', image: '  https://www.tripsavvy.com/thmb/5BiGQvqDjtU7oaASbGHJTqgUgJk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-181080335-5c59138446e0fb000152fba8.jpg' },
    { name: 'Dindigul', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/cc/5f/ea/temple-which-lies-at.jpg' },
    { name: 'Salem', image: 'https://imagesvs.oneindia.com/ta/img/2020/06/salem-doubledecker-bridge3-1591866633.jpg' },
];

const PageContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    textAlign: 'center',
}));

const CityCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

const CardImage = styled(CardMedia)({
    paddingTop: '56.25%', // 16:9 aspect ratio
});

const CardContentStyled = styled(CardContent)(({ theme }) => ({
    flexGrow: 1,
    textAlign: 'left',
}));

const TopCities = () => {
    return (
        <PageContainer maxWidth="lg">
            <Typography variant="h3" gutterBottom>
                Explore Top Cities for Home Tuition
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Discover the best cities where you can find top-notch tutors for home tuition.
            </Typography>
            <Grid container spacing={4}>
                {cities.map((city) => (
                    <Grid item key={city.name} xs={12} sm={6} md={4}>
                        <CityCard>
                            <CardImage image={city.image} title={city.name} />
                            <CardContentStyled>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {city.name}
                                </Typography>
                                <Typography>
                                    Find experienced tutors in {city.name} for a variety of subjects and levels.
                                </Typography>
                            </CardContentStyled>
                        </CityCard>
                    </Grid>
                ))}
            </Grid>
            <Box mt={4}>
                <Button variant="contained" color="primary" component={Link} to="/login">
                    Start Learning
                </Button>
            </Box>
        </PageContainer>
    );
};

export default TopCities;
