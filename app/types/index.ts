import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "updatedAt" | "createdAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
