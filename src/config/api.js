/**
 * API base URL for serverless mail endpoints.
 * - Vercel (same origin): leave VITE_API_URL unset → uses /api/...
 * - GoDaddy (frontend only): set VITE_API_URL to your Vercel deployment URL
 *   so forms still hit the Vercel API (e.g. https://your-app.vercel.app)
 */
const base = typeof import.meta.env.VITE_API_URL === 'string' && import.meta.env.VITE_API_URL.trim()
  ? import.meta.env.VITE_API_URL.replace(/\/$/, '')
  : ''

export const apiContact = `${base}/api/send-contact`
export const apiCareer = `${base}/api/send-career`
