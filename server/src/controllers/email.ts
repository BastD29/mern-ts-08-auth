import { Request, Response } from "express";
import { Resend } from "resend";
import { RESEND_API_KEY } from "../config/environments";

const sendEmail = async (req: Request, res: Response) => {
  try {
    const resend = new Resend(RESEND_API_KEY);
    console.log("resend:", resend);

    const response = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "hello world",
      html: "<strong>it works!</strong>",
    });

    res.status(200).json({ message: "Email sent successfully", response });
  } catch (error) {
    // res.status(500).json({ error: (error as Error).message });
    res.status(500).json({ message: "Failed to send email", error });
  }
};

export { sendEmail };
