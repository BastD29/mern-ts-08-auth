import dotenv from "dotenv";

const env = process.env.NODE_ENV || "development";

dotenv.config({ path: `./environments/.env.${env}` });

const { NODE_ENV, RESEND_API_KEY } = process.env;

export { NODE_ENV, RESEND_API_KEY };
