type UserType = {
  email: string;
};

type ResponseType = {
  message: string;
  user: UserType;
};

export type { UserType, ResponseType };
