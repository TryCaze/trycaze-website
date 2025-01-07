import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message, company, phone } = req.body;

    try {
      const emailResponse = await resend.emails.send({
        from: 'onboarding@resend.dev', // Replace with your sender email
        to: 'trycaze@gmail.com', // Replace with the recipient email
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nCompany: ${company}\nPhone: ${phone}`,
      });

      res.status(200).json({ success: true, id: emailResponse.id });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}