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

const getPrivate = async (req: Request, res: Response) => {
  try {
    const sessionToken = req.cookies["session_token"];
    console.log("sessionToken:", sessionToken);

    if (!sessionToken) {
      return res.status(401).send("Unauthorized");
    }

    const currentUserSession = sessions[sessionToken];
    console.log("currentUserSession:", currentUserSession);

    if (!currentUserSession) {
      return res.status(401).send("Unauthorized");
    }

    if (new Date(currentUserSession.expiresAt) < new Date()) {
      return res.status(401).send("Unauthorized");
    }

    res.send("Hello authorized user");
  } catch (error) {
    console.error("Error during authorization:", error);
    res.status(500).send("Internal Server Error");
  }
};

export { login, getPrivate };
