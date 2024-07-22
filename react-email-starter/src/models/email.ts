type EmailType = {
  to: string;
  subject: string;
  text: string;
};

type ResponseType = {
  email: EmailType;
};

export type { EmailType, ResponseType };
