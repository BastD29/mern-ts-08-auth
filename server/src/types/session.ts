type SessionType = {
  expiresAt: number;
  userId: number;
};

type SessionsType = {
  [key: string]: SessionType;
};

export type { SessionType, SessionsType };
