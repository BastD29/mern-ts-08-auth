import { BASE_URL, LOGIN } from "../constants/endpoints";
import { ResponseType } from "../models/login";

const login = async (email: string) => {
  try {
    const url = `${BASE_URL}${LOGIN}`;
    console.log("url:", url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    console.log("response:", response);

    if (!response.ok) {
      throw new Error("Failed to fetch email");
    }

    const data: ResponseType = await response.json();

    return data.email;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { login };
