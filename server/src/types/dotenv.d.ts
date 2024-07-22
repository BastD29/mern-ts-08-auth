declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    RESEND_API_KEY: string;
    ALLOWED_ORIGIN: string;
  }
}
