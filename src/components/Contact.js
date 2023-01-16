import React from 'react';
import emailjs from "emailjs-com";
import { Button, Typography, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const Contact = () => {
  return (
    <div>
      <div id="contact">
      <Typography variant="h2" className={classes.title}>Let's get to work</Typography>
      <br />
        <Typography variant="subtitle1" className={classes.body}>MitchelParkerNoble@gmail.com
      <br />
      or
      <br />
       contact me here:</Typography>

      <form onSubmit={sendEmail} className="the-form">
        <TextField
          type="text"
            className={classes.inputs}
            InputProps={{
              className: classes.input
            }}
            InputLabelProps={{
              className: classes.input
            }}
          placeholder="Name"
          name="name"
          color="white"
          required
        />

        <TextField
          type="text"
            className={classes.inputs}
            InputProps={{
              className: classes.input
            }}
            InputLabelProps={{
              className: classes.input
            }}
          placeholder="Email"
          name="email"
          required
        />

        <TextField
          type="text"
            className={classes.inputs}
            InputProps={{
              className: classes.input
            }}
            InputLabelProps={{
              className: classes.input
            }}
          placeholder="Subject"
          name="subject"
          required
        />

        <TextField
            className={classes.inputs}
            InputProps={{
              className: classes.input
            }}
            InputLabelProps={{
              className: classes.input
            }}
          multiline
          rows={12}
          required
          placeholder="Your Message"
          name="message"
        />
        <Button
          variant="outlined"
          color="primary"
          type="submit"
            className={classes.button}
            InputProps={{
              className: classes.input
            }}
            InputLabelProps={{
              className: classes.input
            }}
          value="Send"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </div>
    </div>
  );
};

export default Contact;