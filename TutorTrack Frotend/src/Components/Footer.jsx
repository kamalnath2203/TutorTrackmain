import React from 'react';
import { Container, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>Contact Us</Typography>
                        <Typography variant="body2" className="contact-info">Email: TutorTrackEnquiry@gmail.com</Typography>
                        <Typography variant="body2" className="contact-info">Phone: +91 7603986044</Typography>
                        <Typography variant="body2" className="contact-info">Address: Kovaipudur,Coimbatore 641 042</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>Follow Us</Typography>
                        <div className="social-icons">
                            <IconButton color="inherit" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Facebook />
                            </IconButton>
                            <IconButton color="inherit" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter />
                            </IconButton>
                            <IconButton color="inherit" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <Instagram />
                            </IconButton>
                            <IconButton color="inherit" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedIn />
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>Important Links</Typography>
                        <Link href="#" variant="body2" display="block" color="inherit">Privacy Policy</Link>
                        <Link href="#" variant="body2" display="block" color="inherit">Terms of Service</Link>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
