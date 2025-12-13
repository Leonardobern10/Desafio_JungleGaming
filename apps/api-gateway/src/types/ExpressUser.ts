// src/types/ExpressUser.ts
export interface ExpressUser {
  id: string;
  email: string;
  name?: string;
}

export type AuthRequest = Request & { user: ExpressUser };
