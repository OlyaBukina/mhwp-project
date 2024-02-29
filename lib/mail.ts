// import { Resend } from "resend";
import nodemailer from "nodemailer";

const password = process.env.META_PASSWORD;
const domain = process.env.NEXT_PUBLIC_APP_URL;

export async function sendEmail(
  email: string,
  token: string,
  subject: string,
  path: string
) {
  const resetLink = `${domain}/auth/${path}?token=${token}`;

  const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
      user: "olha.bukina91@meta.ua",
      pass: password,
    },
  };

  const transport = nodemailer.createTransport(nodemailerConfig);
  await transport
    .sendMail({
      from: "olha.bukina91@meta.ua",
      to: email,
      subject: `${subject.toUpperCase()} !`,
      html: `<p>Click <a href=${resetLink}>here</a> to ${subject}</p>`,
    })
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(`error!!!: ${error.message}`));
}

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function sendPasswordResetEmail(email: string, token: string) {
//   const resetLink = `${domain}/auth/new-password?token=${token}`;

//   await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: email,
//     subject: "Reset your password!",
//     html: `<p>Click <a href=${resetLink}>here</a> to reset password</p>`,
//   });
// }

// export async function sendVerificationEmail(email: string, token: string) {
//   const confirmLink = `${domain}/auth/new-verification?token=${token}`;

//   await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: email,
//     subject: "Confirm your email!",
//     html: `<p>Click <a href=${confirmLink}>here</a> to confirm email</p>`,
//   });
// }
