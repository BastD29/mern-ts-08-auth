import { BASE_URL, SEND_EMAIL } from "../constants/endpoints";
import { EmailType, ResponseType } from "../models/email";

const sendEmail = async (email: EmailType) => {
  try {
    const url = `${BASE_URL}${SEND_EMAIL}`;
    console.log("url:", url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch url");
    }

    const data: ResponseType = await response.json();

    return data.email;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { sendEmail };
