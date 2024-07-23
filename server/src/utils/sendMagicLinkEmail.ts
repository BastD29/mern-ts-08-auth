import sendgrid from "@sendgrid/mail";
import { FROM_EMAIL } from "../config/environments";

type SendMagicLinkEmailProps = {
  email: string;
  token: string;
};

function sendMagicLinkEmail({ email, token }: SendMagicLinkEmailProps) {
  if (!FROM_EMAIL) {
    throw new Error("FROM_EMAIL is not defined");
  }

  return sendgrid.send({
    to: email,
    from: FROM_EMAIL,
    subject: "Finish logging in",
    html: `<a href="http://localhost:3000/verify?token=${token}">Log In</a>`,
  });
}

export { sendMagicLinkEmail };
