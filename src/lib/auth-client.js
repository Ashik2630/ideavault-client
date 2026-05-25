import { jwtClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  /** Use a public env variable for the client, falling back to localhost only in dev if not set */
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || process.env.NEXT_PUBLIC_APP_URL || undefined,
  plugins: [jwtClient()],
});

export const { signIn, signUp, signOut, useSession } = authClient;
