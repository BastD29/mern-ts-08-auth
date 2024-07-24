import dotenv from "dotenv";

const env = process.env.NODE_ENV || "development";

dotenv.config({ path: `./environments/.env.${env}` });

const {
  NODE_ENV,
  RESEND_API_KEY,
  ALLOWED_ORIGIN,
  PORT,
  JWT_SECRET,
  SEND_GRID_API_KEY,
  FROM_EMAIL,
  BASE_URL,
} = process.env;

export {
  NODE_ENV,
  RESEND_API_KEY,
  ALLOWED_ORIGIN,
  PORT,
  JWT_SECRET,
  SEND_GRID_API_KEY,
  FROM_EMAIL,
  BASE_URL,
};
