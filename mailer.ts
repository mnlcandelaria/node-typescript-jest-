import * as nodemailer from "nodemailer";

export const mailer = async (to: string, subject: string) => {
  const testAccount = await nodemailer.createTestAccount()
  
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    }
  });

  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>',
    to,
    subject: "Hello ✔",
    text: subject,
    html: subject
  });

  console.log('Message sent: %s', info.messageId);
  console.log(nodemailer.getTestMessageUrl(info));
}