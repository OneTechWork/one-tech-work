import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, service, message } = body;

    if (!name || !email || !service || !message) {
      return Response.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "One Tech Work <onboarding@resend.dev>",
      to: ["officialonetechwork@gmail.com"],
      replyTo: email,
      subject: `New Project Inquiry — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New Project Inquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone / WhatsApp:</strong> ${phone || "Not provided"}</p>
          <p><strong>Service:</strong> ${service}</p>

          <hr />

          <h3>Project Details</h3>
          <p>${message}</p>

          <hr />

          <p style="color:#666; font-size:13px;">
            Sent from the One Tech Work website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return Response.json(
      { success: true, id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}