import { Request, Response } from "express";
import { users } from "../data/users";
import { v4 as uuidv4 } from "uuid";
import { sessions } from "../data/sessions";

const login = async (req: Request, res: Response) => {
  try {
    const user = users.find((user) => req.body.email === user.email);
    console.log("user:", user);

    if (!user || req.body.password !== "123") {
      return res.status(422).json({ error: "Incorrect email or password" });
    }

    const sessionToken = uuidv4();
    console.log("sessionToken:", sessionToken);

    const expiresAt = new Date().setFullYear(new Date().getFullYear() + 1);
    console.log("expiresAt:", expiresAt);

    console.log("sessions:", sessions);

    if (Object.keys(sessions).length === 0) {
      console.log("sessions is empty");
    } else {
      console.log("sessions is not empty");
    }

    sessions[sessionToken] = {
      expiresAt,
      userId: user.id,
    };

    res.cookie("session_token", sessionToken, { maxAge: expiresAt });
    // return res.status(200).json(user);
    res.send(user);
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { login };
