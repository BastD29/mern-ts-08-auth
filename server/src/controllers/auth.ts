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

  if (!user) throw Error("No user");

  try {
    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    await sendMagicLinkEmail({ email: user.email, token });
    res.status(200).json({ message: "Check your email to finish logging in" });
  } catch (error) {
    return res.send("Error logging in. Please try again");
  }
};

const verify = async (req: Request, res: Response) => {
  const token = req.query.token as string;
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
    const userId = Number(decodedToken.userId);
    const user = USERS.find((u) => u.id === userId);

    if (!user) {
      return res.sendStatus(401);
    }

    res.send(`Authed as ${user?.name}`);
  } catch (error) {
    res.sendStatus(401);
  }
};

export { login, verify };
