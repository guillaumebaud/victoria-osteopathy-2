"use client";
import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
  Alert,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

const ContactForm = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

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
    } catch (error) {
      console.error('EmailJS Error:', error);
      showAlert('error', 'Sorry, there was an error sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`booking-contact-form ${className}`}>
      <Typography variant="h4" component="h3" className="booking-form-title">
        * For in-home treatments please contact us directly using the form below
      </Typography>

      <Typography variant="body2" sx={{ textAlign: 'center', mb: 3, color: '#666' }}>
        Not sure how to book an appointment or simply just have a question?<br />
        Use the form below to contact us directly
      </Typography>      {alert.show && (
        <Alert
          severity={alert.type}
          sx={{ mb: 3 }}
          onClose={() => setAlert({ show: false, type: '', message: '' })}
        >
          {alert.message}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit}>
        {/* Top row with all fields in a horizontal line */}
        <Grid container spacing={1} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={2.2}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={2.2}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={2.2}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={2.2}>
            <FormControl fullWidth size="small">
              <InputLabel>Initial Assessment*</InputLabel>
              <Select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                label="Initial Assessment*"
              >
                <MenuItem value="">Select an option...</MenuItem>
                <MenuItem value="initial-assessment">Initial Assessment</MenuItem>
                <MenuItem value="follow-up">Follow-up Treatment</MenuItem>
                <MenuItem value="consultation">Consultation</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={3.2}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="medium"
              disabled={loading}
              startIcon={loading ? <CircularProgress size={16} color="inherit" /> : <SendIcon />}
              sx={{
                backgroundColor: '#2E5EAA',
                '&:hover': {
                  backgroundColor: '#1E3A8A',
                },
                height: '40px',
                fontSize: '0.95rem',
                fontWeight: 600
              }}
            >
              {loading ? 'Sending...' : 'SEND'}
            </Button>
          </Grid>
        </Grid>

        {/* Message field - full width below */}
        <Grid container>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined"
              size="small"
              placeholder="Please describe your symptoms, preferred appointment times, or any questions you may have..."
            />
          </Grid>
        </Grid>
      </Box>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          variant="outlined"
          placeholder="Please describe your symptoms, preferred appointment times, or any questions you may have..."
        />
      </Grid>

      <Grid item xs={12}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          disabled={loading}
          startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
          sx={{
            backgroundColor: '#2E5EAA',
            '&:hover': {
              backgroundColor: '#1E3A8A',
            },
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: 600
          }}
        >
          {loading ? 'Sending...' : 'Send'}
        </Button>
      </Grid>
    </Grid>
      </Box >
    </div >
  );
};

export default ContactForm;