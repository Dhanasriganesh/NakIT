import nodemailer from 'nodemailer'
import formidable from 'formidable'
import fs from 'fs'

const getFirst = (field) => (Array.isArray(field) ? field[0] : field)

function createContactEmailTemplate(data) {
  const topicLabels = {
    strategy: 'Strategy / innovation',
    platforms: 'Platforms / engineering',
    ai: 'AI & automation',
    careers: 'Careers',
    media: 'Media / partnerships',
  }
  const topicText = topicLabels[data.topic] || data.topic || 'N/A'

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; }
    .container { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); color: white; padding: 20px; border-radius: 8px; margin-bottom: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { margin: 20px 0; }
    .field { margin-bottom: 20px; padding: 15px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #1e3a5f; }
    .field-label { font-weight: 600; color: #1e293b; margin-bottom: 5px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
    .field-value { color: #475569; font-size: 16px; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header"><h1>New Contact Form Submission</h1></div>
    <div class="content">
      <div class="field"><div class="field-label">Full Name</div><div class="field-value">${(data.name || 'N/A').replace(/</g, '&lt;')}</div></div>
      <div class="field"><div class="field-label">Company</div><div class="field-value">${(data.company || 'Not provided').replace(/</g, '&lt;')}</div></div>
      <div class="field"><div class="field-label">Email Address</div><div class="field-value">${(data.email || 'N/A').replace(/</g, '&lt;')}</div></div>
      <div class="field"><div class="field-label">Mobile Number</div><div class="field-value">${(data.mobile || 'N/A').replace(/</g, '&lt;')}</div></div>
      <div class="field"><div class="field-label">Topic</div><div class="field-value">${topicText.replace(/</g, '&lt;')}</div></div>
      <div class="field"><div class="field-label">Message</div><div class="field-value">${(data.message || 'No message provided').replace(/</g, '&lt;').replace(/\n/g, '<br>')}</div></div>
      ${data.hasFile ? '<div class="field"><div class="field-label">Supporting File</div><div class="field-value">File attached</div></div>' : ''}
    </div>
    <div class="footer">
      <p>Sent from NAK IT Contact Form · ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const form = formidable({
      maxFileSize: 10 * 1024 * 1024, // 10MB
      keepExtensions: true,
    })

    const [fields, files] = await form.parse(req)

    const name = getFirst(fields.name)
    const company = getFirst(fields.company) || ''
    const email = getFirst(fields.email)
    const mobile = getFirst(fields.mobile) || ''
    const topic = getFirst(fields.topic)
    const message = getFirst(fields.message) || ''
    const file = files.file ? (Array.isArray(files.file) ? files.file[0] : files.file) : null

    if (!name || !email || !topic) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (Name, Email, Topic).',
      })
    }

    const user = process.env.GMAIL_USER || process.env.MAIL_USER
    const pass = process.env.GMAIL_APP_PASSWORD || process.env.MAIL_PASS
    const to = process.env.MAIL_TO_CONTACT || process.env.MAIL_TO

    if (!user || !pass || !to) {
      console.error('Missing GMAIL_USER/GMAIL_APP_PASSWORD or MAIL_USER/MAIL_PASS, and MAIL_TO')
      return res.status(500).json({
        success: false,
        error: 'Email service is not configured. Please contact the administrator.',
      })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    })

    const attachments = []
    if (file?.filepath) {
      try {
        attachments.push({
          filename: file.originalFilename || 'attachment',
          content: fs.readFileSync(file.filepath),
        })
      } finally {
        try {
          fs.unlinkSync(file.filepath)
        } catch (e) {
          console.error('Cleanup file:', e)
        }
      }
    }

    await transporter.sendMail({
      from: `"NAK IT Contact" <${user}>`,
      to,
      replyTo: email,
      subject: `New Contact Form: ${topic} – ${name}`,
      html: createContactEmailTemplate({
        name,
        company,
        email,
        mobile,
        topic,
        message,
        hasFile: !!file,
      }),
      attachments: attachments.length ? attachments : undefined,
    })

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
    })
  } catch (err) {
    console.error('Error in /api/send-contact:', err)
    return res.status(500).json({
      success: false,
      error: err.message || 'Failed to send message. Please try again later.',
    })
  }
}
