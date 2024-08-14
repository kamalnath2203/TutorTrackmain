import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Typography, Container, Grid, Card, CardContent, CardMedia, TextField, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const PaymentPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('upi');

    const tutor = state?.tutor || {};

    const {
        image = 'https://via.placeholder.com/200?text=No+Image',
        name = 'Unknown Tutor',
        experience = 'N/A',
        rating = 'N/A',
        description = 'No description available',
        fee = 'N/A',
    } = tutor;

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        // Handle payment submission logic here
        navigate('/payment-success');
    };

    return (
        <Container sx={{ mt: 12, mb: 8 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>Payment Details</Typography>
                    <form onSubmit={handlePaymentSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            type="text"
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Phone Number"
                            type="tel"
                            required
                            sx={{ mb: 2 }}
                        />
                        <RadioGroup
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            sx={{ mb: 2 }}
                        >
                            <FormControlLabel value="upi" control={<Radio />} label="UPI" />
                            <FormControlLabel value="credit-card" control={<Radio />} label="Credit Card" />
                            <FormControlLabel value="net-banking" control={<Radio />} label="Net Banking" />
                        </RadioGroup>
                        {paymentMethod === 'upi' && (
                            <TextField
                                fullWidth
                                label="UPI ID"
                                type="text"
                                required
                                sx={{ mb: 2 }}
                            />
                        )}
                        {paymentMethod === 'credit-card' && (
                            <>
                                <TextField
                                    fullWidth
                                    label="Card Number"
                                    type="text"
                                    required
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label="Expiry Date"
                                    type="text"
                                    required
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label="CVV"
                                    type="text"
                                    required
                                    sx={{ mb: 2 }}
                                />
                            </>
                        )}
                        {paymentMethod === 'net-banking' && (
                            <TextField
                                fullWidth
                                label="Bank Name"
                                type="text"
                                required
                                sx={{ mb: 2 }}
                            />
                        )}
                        <Button variant="contained" color="primary" type="submit">
                            Pay Now
                        </Button>
                    </form>
                </Grid>
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
                            <Typography variant="body1" color="textSecondary">Fee: {fee}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PaymentPage;
    