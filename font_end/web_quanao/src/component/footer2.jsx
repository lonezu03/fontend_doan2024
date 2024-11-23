import React from 'react';
import { Facebook, Instagram, Message } from '@mui/icons-material';
import { FaFacebookMessenger } from 'react-icons/fa'; // Import riêng biểu tượng từ react-icons
import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'grey.900', color: 'grey.200', py: 6 }}>
      <Container maxWidth="lg">
        {/* Thông tin dự án */}
        <Box textAlign="center" mb={4}>
          <Typography variant="body1" gutterBottom>
            The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style.
          </Typography>
        </Box>

        {/* Các mục menu */}
        <Grid container spacing={4} textAlign={{ xs: 'center', md: 'left' }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Minimal
            </Typography>
            <Box>
              <Link href="#" color="inherit" underline="hover" display="block">
                About us
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Contact us
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                FAQs
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Box>
              <Link href="#" color="inherit" underline="hover" display="block">
                Terms and Conditions
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Privacy Policy
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Box>
              <Link href="mailto:support@minimals.cc" color="inherit" underline="hover" display="block">
                support@minimals.cc
              </Link>
              <Typography variant="body2">© All rights reserved.</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Biểu tượng mạng xã hội */}
        <Box mt={4} textAlign="center">
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            {/* Sử dụng react-icons cho Facebook Messenger */}
            <IconButton href="#" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
              <FaFacebookMessenger size={24} />
            </IconButton>

            {/* Instagram icon từ MUI */}
            <IconButton href="#" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
              <Instagram />
            </IconButton>

            {/* Message icon từ MUI (thay thế cho FacebookMessenger) */}
            <IconButton href="#" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
              <Message />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
