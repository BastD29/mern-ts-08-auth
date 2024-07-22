import { Request, Response } from "express";
import { USERS } from "../data/users";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/environments";

const login = async (req: Request, res: Response) => {
  const user = USERS.find((u) => u.email === req.body.email);

  if (!user) throw Error("No user");

  try {
    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    // await sendMagicLinkEmail({ email: user.email, token });
  } catch (error) {
    return res.send("Error logging in. Please try again");
  }

  // res.send("Check your email to finish logging in");
  res.status(200).json({ message: "Check your email to finish logging in" });
};

export { login };
