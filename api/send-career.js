import nodemailer from 'nodemailer'
import formidable from 'formidable'

function getFirst(field) {
  return Array.isArray(field) ? field[0] : field
}

async function parseMultipart(req) {
  return new Promise((resolve, reject) => {
    const form = formidable({ maxFileSize: 5 * 1024 * 1024 }) // 5MB
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err)
      const resumeFile = files.resume
      const resume = resumeFile ? (Array.isArray(resumeFile) ? resumeFile[0] : resumeFile) : null
      resolve({
        name: getFirst(fields.name),
        email: getFirst(fields.email),
        phone: getFirst(fields.phone),
        role: getFirst(fields.role),
        resumeLink: getFirst(fields.resumeLink),
        message: getFirst(fields.message),
        resume,
      })
    })
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, role, resumeLink, message, resume } = await parseMultipart(req)

    if (!name || !email || !role) {
      return res.status(400).json({ error: 'Name, email and role are required.' })
    }

    const user = process.env.MAIL_USER
    const pass = process.env.MAIL_PASS
    const to = process.env.MAIL_TO_CAREER || process.env.MAIL_TO

    if (!user || !pass || !to) {
      console.error('Missing MAIL_USER, MAIL_PASS, or MAIL_TO_CAREER/MAIL_TO')
      return res.status(500).json({ error: 'Email is not configured.' })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    })

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Role: ${role}`,
      resumeLink ? `Resume/CV (link or paste): ${resumeLink}` : null,
      message ? `Message:\n${message}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    const attachments = []
    if (resume && resume.filepath) {
      const fs = await import('fs')
      attachments.push({
        filename: resume.originalFilename || 'resume',
        content: fs.readFileSync(resume.filepath),
      })
    }

    await transporter.sendMail({
      from: user,
      to,
      subject: `[Career] ${role} – ${name}`,
      text,
      replyTo: email,
      attachments: attachments.length ? attachments : undefined,
    })

    return res.status(200).json({ success: true, message: 'Application sent successfully.' })
  } catch (err) {
    console.error('Send career error:', err)
    return res.status(500).json({ error: err.message || 'Failed to send application.' })
  }
}
