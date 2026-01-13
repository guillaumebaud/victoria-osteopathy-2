"use client";
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Alert,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import { Send as SendIcon, Close as CloseIcon } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

const ContactForm = ({ className = "" }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    // Clear alert when closing
    setAlert({ show: false, type: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert({ show: false, type: '', message: '' }), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // EmailJS configuration - you'll need to set these up
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Michael Dennis',
        to_email: 'victoriaosteopathy@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      showAlert('success', 'Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Close dialog after 2 seconds on success
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      showAlert('error', 'Sorry, there was an error sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <Box className={className} sx={{ textAlign: 'center', p: 3 }}>
        <Typography variant="body1" sx={{ mb: 2, color: '#666', fontSize: '1.1rem' }}>
          Not sure how to book an appointment or simply just have a question?
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={handleOpen}
          sx={{
            backgroundColor: '#2E5EAA',
            '&:hover': {
              backgroundColor: '#1e4080',
            },
            px: 4,
            py: 1.5,
            fontSize: '16px',
            fontWeight: 600
          }}
        >
          Click here to contact us directly
        </Button>
      </Box>

      {/* Contact Form Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            p: 2
          }
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 30,
            top: 20,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogTitle>
          Contact Us
        </DialogTitle>

        <DialogContent>
          {alert.show && (
            <Alert
              severity={alert.type}
              sx={{ mb: 3 }}
              onClose={() => setAlert({ show: false, type: '', message: '' })}
            >
              {alert.message}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} id="contact-form">
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {/* Full Name - Full width */}
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Full Name"
                  placeholder="Enter your full name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  size="medium"
                />
              </Grid>

              {/* Phone Number - Half width */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  placeholder="e.g. (250) 123-4567"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  size="medium"
                />
              </Grid>

              {/* Email Address - Half width */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Email Address"
                  placeholder="your.email@example.com"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  size="medium"
                />
              </Grid>

              {/* Message - Full width */}
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Your Message"
                  placeholder="Tell us how we can help you..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={1}
                  variant="outlined"
                  size="medium"
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button onClick={handleClose} sx={{ color: '#666' }}>
            Cancel
          </Button>
          <Button
            type="submit"
            form="contact-form"
            variant="contained"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={16} color="inherit" /> : <SendIcon />}
            sx={{
              backgroundColor: '#2E5EAA',
              '&:hover': {
                backgroundColor: '#1e4080',
              },
              px: 3
            }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactForm;