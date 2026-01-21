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
import { Send as SendIcon, Close as CloseIcon, Lock as LockIcon, CheckCircle as CheckCircleIcon } from '@mui/icons-material';

// reCAPTCHA v3 Site Key from environment variable
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

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
  const [submitted, setSubmitted] = useState(false);

  // Load reCAPTCHA v3 script
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.grecaptcha && RECAPTCHA_SITE_KEY) {
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
    // Clear alert and submitted state when closing
    setAlert({ show: false, type: '', message: '' });
    setSubmitted(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (formData.website) {
      console.log('Bot detected via honeypot');
      // Fake success to not alert the bot
      setSubmitted(true);
      return;
    }

    setLoading(true);

    try {
      // Get reCAPTCHA token if available
      let recaptchaToken = null;
      if (recaptchaLoaded && window.grecaptcha && RECAPTCHA_SITE_KEY) {
        try {
          recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact_form' });
        } catch (recaptchaError) {
          console.warn('reCAPTCHA execution failed:', recaptchaError);
        }
      }

      // Submit to our API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          recaptchaToken: recaptchaToken
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Form submission failed');
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        website: ''
      });

      // Show success state in dialog
      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setAlert({
        show: true,
        type: 'error',
        message: 'error_with_fallback'
      });
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
          {submitted ? 'Message Sent!' : 'Contact Us'}
        </DialogTitle>

        <DialogContent>
          {submitted ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <CheckCircleIcon sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
              <Typography variant="h6" sx={{ mb: 2 }}>
                Thank you for your message!
              </Typography>
              <Typography variant="body1" sx={{ color: '#666' }}>
                We have received your inquiry and our osteopathic practitioner will get back to you as soon as possible.
              </Typography>
            </Box>
          ) : (
            <>
              {alert.show && (
                <Alert
                  severity="error"
                  sx={{ mb: 3 }}
                  onClose={() => setAlert({ show: false, type: '', message: '' })}
                >
                  Sorry, there was an error sending your message. Please try again or contact us directly at{' '}
                  <a href="mailto:victoriaosteopathy.ca@gmail.com" style={{ color: 'inherit', fontWeight: 'bold' }}>
                    victoriaosteopathy.ca@gmail.com
                  </a>
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
                  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#2E5EAA' }}>
                    View our Privacy Policy
                  </a>
                </Typography>
              </Box>
            </>
          )}
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2, justifyContent: submitted ? 'center' : 'space-between' }}>
          {submitted ? (
            <Button variant="contained" onClick={handleClose} size="medium">
              Close
            </Button>
          ) : (
            <>
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
            </>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
});

export default ContactForm;
