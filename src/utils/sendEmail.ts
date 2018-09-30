import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "process.env.MAILGUN_DOMAIN"
});

const sendEmail = (subject: string, html: string) => {
  const emailData = {
    from: "xxxx@gmail.com",
    to: "xxxx@gmail.com",
    subject,
    html
  };
  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
  const emailSubject = `Hello! ${fullName}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://buber.com/verification/${key}/">here</a>`;
  return sendEmail(emailSubject, emailBody);
};
