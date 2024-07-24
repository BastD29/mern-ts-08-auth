import { BASE_URL, ME } from "../constants/endpoints";
import { /* ResponseType, */ UserType } from "../models/user";

const getMe = async (token: string): Promise<UserType> => {
  // console.log("token:", token);

  try {
    const url = `${BASE_URL}${ME}`;
    // console.log("url:", url);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log("response:", response);

    if (!response.ok) {
      throw new Error("fetch profile failed");
    }

    const data: UserType = await response.json();
    // console.log("data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching profile data:", error);
    throw new Error("Profile fetch failed. Please try again");
  }
};

export { getMe };
