const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/book', (req, res) => {
  const { date, serviceId } = req.body;

  // Send booking confirmation email
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-password',
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'customer-email@gmail.com',
    subject: 'Booking Confirmation',
    text: `You have booked a ${date} appointment for ${serviceId}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.send('Booking confirmed!');
});

module.exports = router;
