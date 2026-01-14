"use client";
import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
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
import { Send as SendIcon, Close as CloseIcon, Lock as LockIcon } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

// reCAPTCHA v3 Site Key - Replace with your actual key from Google reCAPTCHA console
const RECAPTCHA_SITE_KEY = "6Lf6NlMpAAAAAMUJ1nZDUGbEYyZIHw7RtwfrGq-h";

const ContactForm = forwardRef(({ className = "" }, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openDialog: () => setOpen(true)
  }));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    website: '' // Honeypot field - should remain empty
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  // Load reCAPTCHA v3 script
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.grecaptcha && RECAPTCHA_SITE_KEY !== "YOUR_RECAPTCHA_SITE_KEY") {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.onload = () => setRecaptchaLoaded(true);
      document.head.appendChild(script);
    } else if (window.grecaptcha) {
      setRecaptchaLoaded(true);
    }
  }, []);

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

    // Honeypot check - if filled, it's a bot
    if (formData.website) {
      console.log('Bot detected via honeypot');
      // Fake success to not alert the bot
      showAlert('success', 'Thank you for your message! We will get back to you soon.');
      return;
    }

    setLoading(true);

    try {
      // Get reCAPTCHA token if available
      let recaptchaToken = null;
      if (recaptchaLoaded && window.grecaptcha && RECAPTCHA_SITE_KEY !== "YOUR_RECAPTCHA_SITE_KEY") {
        try {
          recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact_form' });
        } catch (recaptchaError) {
          console.warn('reCAPTCHA execution failed:', recaptchaError);
        }
      }

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
        to_email: 'victoriaosteopathy@gmail.com',
        recaptcha_token: recaptchaToken || 'not_available'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      showAlert('success', 'Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        website: ''
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
            {/* Honeypot field - hidden from users, bots will fill it */}
            <TextField
              name="website"
              value={formData.website}
              onChange={handleChange}
              sx={{
                position: 'absolute',
                left: '-9999px',
                opacity: 0,
                height: 0,
                width: 0,
                overflow: 'hidden'
              }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
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
                  rows={3}
                  variant="outlined"
                  size="medium"
                />
              </Grid>
            </Grid>
          </Box>

          {/* Privacy Notice */}
          <Box
            sx={{
              mt: 3,
              p: 2,
              backgroundColor: '#f0f7ff',
              borderRadius: 1,
              border: '1px solid #cce0ff',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 1.5
            }}
          >
            <LockIcon sx={{ color: '#2E5EAA', fontSize: 20, mt: 0.3 }} />
            <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6 }}>
              <strong>Your privacy matters to us.</strong> Your information is securely processed through our form service and forwarded to our osteopathic practitioner. It will only be used to respond to your inquiry or arrange a booking. We never sell or use your data for advertising.{' '}
              <a href="/victoria-osteopathy/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#2E5EAA' }}>
                View our Privacy Policy
              </a>
            </Typography>
          </Box>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2, justifyContent: 'space-between' }}>
          <Button variant="text" onClick={handleClose} sx={{ color: '#666' }}>
            Cancel
          </Button>
          <Button
            type="submit"
            form="contact-form"
            variant="contained"
            size="medium"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={16} color="inherit" /> : <SendIcon />}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});

export default ContactForm;