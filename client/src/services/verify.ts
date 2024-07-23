import { BASE_URL, VERIFY } from "../constants/endpoints";

const verify = async (token: string): Promise<string> => {
  console.log("token:", token);

  try {
    const url = `${BASE_URL}${VERIFY}?token=${token}`;
    console.log("url:", url);

    const response = await fetch(url);

    console.log("response:", response);

    if (!response.ok) {
      throw new Error("Verification failed");
    }

    const data = await response.json();
    console.log("data:", data);

    return data;
  } catch (error) {
    console.error("Error verifying token:", error);
    throw new Error("Verification failed. Please try again");
  }
};

export { verify };
