"use client";

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
        For in-home treatments please contact us directly using the form below
      </Typography>

      <Typography variant="body2" sx={{ textAlign: 'center', mb: 3, color: '#666' }}>
        Just want to book an appointment as simply as you'd have a question?
      </Typography>

      {alert.show && (
        <Alert
          severity={alert.type}
          sx={{ mb: 3 }}
          onClose={() => setAlert({ show: false, type: '', message: '' })}
        >
          {alert.message}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              variant="outlined"
              size="medium"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              variant="outlined"
              size="medium"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              variant="outlined"
              size="medium"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
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
      </Box>
    </div>
  );
};

export default ContactForm;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

const templateParams = {
  from_name: formData.name,
  from_email: formData.email,
  phone: formData.phone,
  subject: formData.subject,
  message: formData.message,
  to_name: 'Michael Dennis',
  to_email: 'michael@victoria-osteopathy.com' // Replace with Michael's actual email
};

await emailjs.send(serviceId, templateId, templateParams, publicKey);

showAlert('success', 'Thank you for your message! Michael will get back to you within 24 hours.');
setFormData({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});
    } catch (error) {
  console.error('EmailJS error:', error);
  showAlert('error', 'Sorry, there was an error sending your message. Please try again or call directly.');
} finally {
  setLoading(false);
}
  };

return (
  <section className="contact-form-section" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#2E5EAA', fontWeight: 'bold' }}>
              Get In Touch
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#666' }}>
              Ready to start your journey to better health? Contact Michael Dennis for professional osteopathic care in Victoria, BC.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ color: '#2E5EAA', mr: 2 }} />
              <Box>
                <Typography variant="h6" sx={{ color: '#2E5EAA', fontWeight: 'bold' }}>
                  Phone
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                  (250) 123-4567
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon sx={{ color: '#2E5EAA', mr: 2 }} />
              <Box>
                <Typography variant="h6" sx={{ color: '#2E5EAA', fontWeight: 'bold' }}>
                  Email
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                  info@victoria-osteopathy.com
                </Typography>
              </Box>
            </Box>
          </Box>

          <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
            Typical response time: Within 24 hours
          </Typography>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#2E5EAA', fontWeight: 'bold', mb: 3 }}>
              Send a Message
            </Typography>

            {alert.show && (
              <Alert severity={alert.type} sx={{ mb: 3 }}>
                {alert.message}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#2E5EAA',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#2E5EAA',
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#2E5EAA',
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#2E5EAA',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#2E5EAA',
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#2E5EAA',
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#2E5EAA',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#2E5EAA',
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#2E5EAA',
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel
                      sx={{
                        '&.Mui-focused': {
                          color: '#2E5EAA',
                        },
                      }}
                    >
                      Subject *
                    </InputLabel>
                    <Select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      label="Subject *"
                      required
                      sx={{
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#2E5EAA',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#2E5EAA',
                        },
                      }}
                    >
                      <MenuItem value="New Patient Inquiry">New Patient Inquiry</MenuItem>
                      <MenuItem value="Appointment Booking">Appointment Booking</MenuItem>
                      <MenuItem value="Treatment Question">Treatment Question</MenuItem>
                      <MenuItem value="Insurance Question">Insurance Question</MenuItem>
                      <MenuItem value="General Information">General Information</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message *"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={6}
                    variant="outlined"
                    placeholder="Please describe your condition, preferred appointment times, or any questions you have about osteopathic treatment..."
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#2E5EAA',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#2E5EAA',
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#2E5EAA',
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    startIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
                    sx={{
                      backgroundColor: '#2E5EAA',
                      color: 'white',
                      py: 1.5,
                      px: 4,
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      borderRadius: 2,
                      '&:hover': {
                        backgroundColor: '#1e4085',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(46, 94, 170, 0.3)',
                      },
                      '&:disabled': {
                        backgroundColor: '#ccc',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </section>
);
};

export default ContactForm;