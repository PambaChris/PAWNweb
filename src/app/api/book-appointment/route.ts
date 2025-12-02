import { Resend } from 'resend';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, date, time, reason } = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'PAWN <info@pawn-blackfeminists.org>',
      to: ['info@pawn-blackfeminists.org'],
      subject: 'New Appointment Request',
      html: `
        <h1>New Appointment Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Preferred Time:</strong> ${time}</p>
        <p><strong>Reason for Appointment:</strong></p>
        <p>${reason}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
