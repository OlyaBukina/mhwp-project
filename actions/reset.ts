"use server";

import * as z from "zod";

import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { sendEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";

export async function reset(values: z.infer<typeof ResetSchema>) {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid email!" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email not found!" };
  }

  // Generate token and send email
  const passwordResetToken = await generatePasswordResetToken(email);

  await sendEmail(
    passwordResetToken.email,
    passwordResetToken.token,
    "reset your password",
    "new-password"
  );

  return { success: "Reset email sent!" };
}
