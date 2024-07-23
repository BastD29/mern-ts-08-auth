import { BASE_URL, VERIFY } from "../constants/endpoints";

const verify = async (token: string) => {
  console.log("token:", token);

  try {
    const url = `${BASE_URL}${VERIFY}?token=${token}`;
    console.log("url:", url);

    const response = await fetch(url, {
      method: "GET",
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("response:", response);

    if (!response.ok) {
      throw new Error("Failed to verify");
    }

    const data = await response.json();
    console.log("data:", data);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { verify };
