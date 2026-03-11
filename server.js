import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import multer from 'multer';
import { readFileSync } from 'fs';

// Load .env file
const envResult = dotenv.config();

if (envResult.error) {
  console.warn('⚠️  Warning: Could not load .env file:', envResult.error.message);
} else {
  console.log('✅ .env file loaded');
}

// Debug: Check if .env file exists and can be read
try {
  const envContent = readFileSync('.env', 'utf8');
  console.log('📄 .env file found, size:', envContent.length, 'characters');
  if (envContent.length < 50) {
    console.warn('⚠️  .env file seems very small - make sure it contains your SMTP credentials');
  }
} catch (err) {
  console.error('❌ Cannot read .env file:', err.message);
}

const app = express();
const PORT = process.env.PORT || 3001;

// Configure multer for file uploads
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email transporter configuration (using Gmail service)
const createTransporter = () => {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('Gmail credentials are not configured. Please check your .env file.');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// Email template for ApplicationFormSection (name, email, role, message)
const createApplicationEmailTemplate = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f5f5f5;
        }
        .container {
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #3b82f6 0%, #ef4444 100%);
          color: white;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .content {
          margin: 20px 0;
        }
        .field {
          margin-bottom: 20px;
          padding: 15px;
          background: #f9fafb;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .field-label {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 5px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .field-value {
          color: #4b5563;
          font-size: 16px;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          text-align: center;
          color: #6b7280;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎯 New Career Application</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="field-label">Full Name</div>
            <div class="field-value">${data.name || 'N/A'}</div>
          </div>
          <div class="field">
            <div class="field-label">Email Address</div>
            <div class="field-value">${data.email || 'N/A'}</div>
          </div>
          <div class="field">
            <div class="field-label">Mobile Number</div>
            <div class="field-value">${data.mobile || 'N/A'}</div>
          </div>
          <div class="field">
            <div class="field-label">Role of Interest</div>
            <div class="field-value">${data.role || 'N/A'}</div>
          </div>
          <div class="field">
            <div class="field-label">Message</div>
            <div class="field-value">${data.message || 'No message provided'}</div>
          </div>
          ${data.hasFile ? '<div class="field"><div class="field-label">Resume/Portfolio</div><div class="field-value">📎 File attached</div></div>' : ''}
        </div>
        <div class="footer">
          <p>This email was sent from the ABSN IT Careers Application Form</p>
          <p>Submitted on: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Email template for Contact form (name, company, email, mobile, topic, message)
const createContactEmailTemplate = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f5f5f5;
        }
        .container {
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #3b82f6 0%, #ef4444 100%);
          color: white;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .content {
          margin: 20px 0;
        }
        .field {
          margin-bottom: 20px;
          padding: 15px;
          background: #f9fafb;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .field-label {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 5px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .field-value {
          color: #4b5563;
          font-size: 16px;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          text-align: center;
          color: #6b7280;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="field-label">Full Name</div>
            <div class="field-value">${data.name || 'N/A'}</div>
          </div>
          <div class="field">
            <div class="field-label">Company</div>
            <div class="field-value">${data.company || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="field-label">Email Address</div>
            <div class="field-value">${data.email || 'N/A'}</div>
          </div>
          <div class="field">
            <div class="field-label">Mobile Number</div>
            <div class="field-value">${data.mobile || 'N/A'}</div>
          </div>
          <div class="field">
            <div class="field-label">Topic</div>
            <div class="field-value">${data.topic || 'N/A'}</div>
          </div>
          <div class="field">
            <div class="field-label">Message</div>
            <div class="field-value">${data.message || 'No message provided'}</div>
          </div>
          ${data.hasFile ? '<div class="field"><div class="field-label">Supporting File</div><div class="field-value">📎 File attached</div></div>' : ''}
        </div>
        <div class="footer">
          <p>This email was sent from the ABSN IT Contact Form</p>
          <p>Submitted on: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Email template for Careers page (firstName, lastName, email, phone, subject, message)
const createEmailTemplate = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f5f5f5;
        }
        .container {
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #3b82f6 0%, #ef4444 100%);
          color: white;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .content {
          margin: 20px 0;
        }
        .field {
          margin-bottom: 20px;
          padding: 15px;
          background: #f9fafb;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .field-label {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 5px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .field-value {
          color: #4b5563;
          font-size: 16px;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          text-align: center;
          color: #6b7280;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎯 New Career Application</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="field-label">Full Name</div>
            <div class="field-value">${data.firstName || ''} ${data.lastName || ''}</div>
          </div>
          <div class="field">
            <div class="field-label">Email Address</div>
            <div class="field-value">${data.email || 'N/A'}</div>
          </div>
          <div class="field">
            <div class="field-label">Phone Number</div>
            <div class="field-value">${data.phone || 'N/A'}</div>
          </div>
          <div class="field">
            <div class="field-label">Subject</div>
            <div class="field-value">${data.subject || 'N/A'}</div>
          </div>
          <div class="field">
            <div class="field-label">Message</div>
            <div class="field-value">${data.message || 'No message provided'}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the ABSN IT Careers Application Form</p>
          <p>Submitted on: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Careers application endpoint for ApplicationFormSection (with file upload)
app.post('/api/careers/apply', upload.single('file'), async (req, res) => {
  try {
    console.log('Received application request');
    const { name, email, mobile, role, message } = req.body;
    const file = req.file;

    console.log('Form data:', { name, email, mobile, role, message: message ? 'provided' : 'empty', hasFile: !!file });

    // Validation
    if (!name || !email || !role) {
      console.log('Validation failed - missing required fields');
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields.',
      });
    }

    // Check Gmail configuration
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Gmail credentials missing!');
      return res.status(500).json({
        success: false,
        error: 'Email service is not configured. Please contact the administrator.',
      });
    }

    // Create email transporter
    let transporter;
    try {
      transporter = createTransporter();
      console.log('Email transporter created successfully');
    } catch (transporterError) {
      console.error('Error creating transporter:', transporterError);
      return res.status(500).json({
        success: false,
        error: transporterError.message || 'Email service configuration error.',
      });
    }

    // Email options
    const mailOptions = {
      from: `"ABSN IT Careers" <${process.env.GMAIL_USER}>`,
      to: process.env.MAIL_TO || 'ganeshdhanasri7@gmail.com',
      subject: `New Career Application: ${role} - ${name}`,
      html: createApplicationEmailTemplate({
        name,
        email,
        mobile,
        role,
        message,
        hasFile: !!file,
      }),
      attachments: file
        ? [
          {
            filename: file.originalname || 'resume',
            path: file.path,
          },
        ]
        : [],
    };

    console.log('Attempting to send email...');
    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');

    // Clean up uploaded file
    if (file) {
      const fs = await import('fs');
      try {
        fs.unlinkSync(file.path);
        console.log('File cleaned up');
      } catch (err) {
        console.error('Error deleting file:', err);
      }
    }

    res.json({
      success: true,
      message: 'Application submitted successfully!',
    });
  } catch (error) {
    console.error('Error in /api/careers/apply:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      response: error.response,
      stack: error.stack,
    });
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to send application. Please try again later.',
    });
  }
});

// Careers application endpoint for Careers page (firstName, lastName, etc.)
app.post('/api/careers', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, message } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields.',
      });
    }

    // Create email transporter
    const transporter = createTransporter();

    // Email options
    const mailOptions = {
      from: `"NAK IT Careers" <${process.env.GMAIL_USER}>`,
      to: process.env.MAIL_TO || 'ganeshdhanasri7@gmail.com',
      subject: `New Career Application: ${subject} - ${firstName} ${lastName}`,
      html: createEmailTemplate({
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
      }),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Application submitted successfully!',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send application. Please try again later.',
    });
  }
});

// Contact form endpoint
app.post('/api/contact', upload.single('file'), async (req, res) => {
  try {
    console.log('Received contact form request');
    const { name, company, email, mobile, topic, message } = req.body;
    const file = req.file;

    console.log('Form data:', { name, company, email, mobile, topic, message: message ? 'provided' : 'empty', hasFile: !!file });

    // Validation
    if (!name || !email || !topic) {
      console.log('Validation failed - missing required fields');
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (Name, Email, Topic).',
      });
    }

    // Check Gmail configuration
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Gmail credentials missing!');
      return res.status(500).json({
        success: false,
        error: 'Email service is not configured. Please contact the administrator.',
      });
    }

    // Create email transporter
    let transporter;
    try {
      transporter = createTransporter();
      console.log('Email transporter created successfully');
    } catch (transporterError) {
      console.error('Error creating transporter:', transporterError);
      return res.status(500).json({
        success: false,
        error: transporterError.message || 'Email service configuration error.',
      });
    }

    // Email options
    const mailOptions = {
      from: `"ABSN IT Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.MAIL_TO || 'ganeshdhanasri7@gmail.com',
      subject: `New Contact Form: ${topic} - ${name}`,
      html: createContactEmailTemplate({
        name,
        company,
        email,
        mobile,
        topic,
        message,
        hasFile: !!file,
      }),
      attachments: file
        ? [
          {
            filename: file.originalname || 'attachment',
            path: file.path,
          },
        ]
        : [],
    };

    console.log('Attempting to send email...');
    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');

    // Clean up uploaded file
    if (file) {
      const fs = await import('fs');
      try {
        fs.unlinkSync(file.path);
        console.log('File cleaned up');
      } catch (err) {
        console.error('Error deleting file:', err);
      }
    }

    res.json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      response: error.response,
      stack: error.stack,
    });
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to send message. Please try again later.',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email will be sent to: ${process.env.MAIL_TO || 'careers@nakitgroup.com'}`);

  // Check configuration
  console.log('\n📋 Environment Variables Check:');
  console.log(`   GMAIL_USER: ${process.env.GMAIL_USER ? process.env.GMAIL_USER : 'NOT SET ✗'}`);
  console.log(`   GMAIL_APP_PASSWORD: ${process.env.GMAIL_APP_PASSWORD ? 'SET ✓ (hidden)' : 'NOT SET ✗'}`);
  console.log(`   MAIL_TO: ${process.env.MAIL_TO || 'NOT SET'}`);

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.warn('\n⚠️  WARNING: Gmail credentials not found in .env file!');
    console.warn('   Required: GMAIL_USER and GMAIL_APP_PASSWORD');
    console.warn('   Make sure to restart the server after updating .env file');
  } else {
    console.log('\n✅ Gmail configuration loaded successfully!');
    console.log('   Using Gmail service for email delivery');
  }
  console.log('');
});