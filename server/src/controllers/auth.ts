import { Request, Response } from "express";
import { USERS } from "../data/users";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../config/environments";
import { sendMagicLinkEmail } from "../utils/sendMagicLinkEmail";

interface AuthTokenPayload extends JwtPayload {
  userId: string;
}

const login = async (req: Request, res: Response) => {
  const user = USERS.find((u) => u.email === req.body.email);
  console.log("user:", user);

  if (!user) {
    console.error("No user found with this email"); // send this in the frontend
    throw new Error("No user");
  }

  try {
    if (!JWT_SECRET) {
      console.error("JWT_SECRET is not defined");
      throw new Error("JWT_SECRET is not defined");
    }

    console.log("JWT_SECRET:", JWT_SECRET);

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("token in login:", token); // token is effectively printed as expected (not undefined)

    await sendMagicLinkEmail({ email: user.email, token });
    res.status(200).json({ message: "Check your email to finish logging in" });
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).send("Error logging in. Please try again");
  }
};

const verify = async (req: Request, res: Response) => {
  console.log("req.query:", req.query);

  const token = req.query.token as string;
  console.log("token in verify:", token);

  if (token == null) return res.sendStatus(401);

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    const decodedToken = jwt.verify(
      token,
      JWT_SECRET
    ) as unknown as AuthTokenPayload;
    console.log("decodedToken:", decodedToken);

    const userId = Number(decodedToken.userId);
    console.log("userId:", userId);

    const user = USERS.find((u) => u.id === userId);
    console.log("user:", user);

    if (!user) {
      return res.sendStatus(401);
    }

    res.send(`Authed as ${user?.name}`);
  } catch (error) {
    res.sendStatus(401);
  }
};

export { login, verify };
