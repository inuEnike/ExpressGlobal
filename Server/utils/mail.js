import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "mail.expressglobaldeliveryuk.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.MAILER_NAME,
    pass: process.env.MAILER_PASSWORD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.error("Error verifying transporter:", error);
  } else {
    console.log("Transporter is ready to send emails", success);
  }
});

transporter.on("error", function (error) {
  console.error("Error occurred with transporter:", error);
});
