import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../styles/Contact.css'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id='form-container'>
      <Typography fontFamily={'Fjalla One'} variant="h4"></Typography>
      <br />
    <form ref={form} onSubmit={sendEmail} id='contact-form'>
    <TextField
          required
          id="form-name"
          name="user_name"
          label="Name"
          helperText=" "
          variant='filled'
        />
    <TextField
          required
          id="form-email"
          name="user_email"
          label="Email"
          helperText=" "
          variant='filled'
        />
    <TextField
          required
          id="form-message"
          name="user_message"
          label="Message"
          helperText=" "
          variant='filled'
          multiline
          rows={4}
        />
        <Button
          id='form-send-button'
          variant='contained'
          type='submit'
          component='label'
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Contact;