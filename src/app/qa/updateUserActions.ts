"use server";

import { clerkClient } from "@clerk/nextjs/server";

export const updateUserRole = async (userId: string) => {
  const client = await clerkClient();

  if (!userId) return;

  try {
    const res = await client.users.updateUser(userId, {
        publicMetadata: { role: 'contributor' }
      })
    console.log({ message: res.publicMetadata });
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : String(err));
  }
}