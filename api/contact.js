import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';
import { IncomingForm } from 'formidable';

// Email transporter configuration
const createTransporter = () => {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('Gmail credentials are not configured. Please check your environment variables.');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// Email template for Contact form
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
          <p>This email was sent from the NAK IT Contact Form</p>
          <p>Submitted on: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    // Parse form data
    const form = new IncomingForm({
      maxFileSize: 10 * 1024 * 1024, // 10MB
      keepExtensions: true,
    });

    const [fields, files] = await form.parse(req);

    const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
    const company = Array.isArray(fields.company) ? fields.company[0] : fields.company || '';
    const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const mobile = Array.isArray(fields.mobile) ? fields.mobile[0] : fields.mobile || '';
    const topic = Array.isArray(fields.topic) ? fields.topic[0] : fields.topic;
    const message = Array.isArray(fields.message) ? fields.message[0] : fields.message || '';

    const file = files.file ? (Array.isArray(files.file) ? files.file[0] : files.file) : null;

    // Validation
    if (!name || !email || !topic) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (Name, Email, Topic).',
      });
    }

    // Check Gmail configuration
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return res.status(500).json({
        success: false,
        error: 'Email service is not configured. Please contact the administrator.',
      });
    }

    // Create email transporter
    const transporter = createTransporter();

    // Prepare attachments
    const attachments = [];
    if (file) {
      const fileContent = fs.readFileSync(file.filepath);
      attachments.push({
        filename: file.originalFilename || 'attachment',
        content: fileContent,
      });
    }

    // Email options
    const mailOptions = {
      from: `"NAK IT Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.MAIL_TO || 'careers@nakitgroup.com',
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
      attachments,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Clean up uploaded file
    if (file && file.filepath) {
      try {
        fs.unlinkSync(file.filepath);
      } catch (err) {
        console.error('Error deleting file:', err);
      }
    }

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to send message. Please try again later.',
    });
  }
}