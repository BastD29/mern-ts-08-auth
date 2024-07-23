declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    ALLOWED_ORIGIN: string;
    JWT_SECRET: string;
    SEND_GRID_API_KEY: string;
    FROM_EMAIL: string;
  }
}
