import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const EMAIL_TO = process.env.EMAIL_TO || SMTP_USER;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !EMAIL_TO) {
  console.error('Missing required SMTP configuration. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and EMAIL_TO in your .env file.');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required.' });
  }

  const mailOptions = {
    from: `${name || 'Portfolio Visitor'} <${SMTP_USER}>`,
    to: EMAIL_TO,
    replyTo: email,
    subject: `Portfolio message from ${name || 'visitor'}`,
    text: `Name: ${name || 'Anonymous'}\nEmail: ${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Email send failed:', error);
    return res.status(500).json({ error: 'Unable to send email. Please try again later.' });
  }
});

const PORT = process.env.PORT || 4174;
app.listen(PORT, () => {
  console.log(`Email API server is running on http://localhost:${PORT}`);
});
