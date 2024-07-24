import sendgrid from "@sendgrid/mail";
import {
  BASE_URL,
  FROM_EMAIL,
  SEND_GRID_API_KEY,
} from "../config/environments";

type SendMagicLinkEmailProps = {
  email: string;
  token: string;
};

if (!SEND_GRID_API_KEY) {
  throw new Error("SEND_GRID_API_KEY is not defined");
}
sendgrid.setApiKey(SEND_GRID_API_KEY);

async function sendMagicLinkEmail({ email, token }: SendMagicLinkEmailProps) {
  console.log("email:", email); // email printed as expected
  console.log("token:", token); // token printed as expected

  if (!FROM_EMAIL) {
    throw new Error("FROM_EMAIL is not defined");
  }

  console.log("FROM_EMAIL:", FROM_EMAIL);

  return sendgrid
    .send({
      to: email,
      from: FROM_EMAIL,
      subject: "Finish logging in",
      // html: `<a href="http://localhost:3000/verify?token=${token}">Log In</a>`,
      html: `<a href="${BASE_URL}/verify?token=${token}">Log In</a>`,
    })
    .catch((error) => {
      console.error("Error sending email:", error); // Log errors from SendGrid
      throw error;
    });
}

export { sendMagicLinkEmail };
