import { Resend } from 'resend';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { subject, html } = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'PAWN <info@pawn-blackfeminists.org>',
      to: ['info@pawn-blackfeminists.org'],
      subject: subject,
      html: html,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
