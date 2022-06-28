// This project uses the nodemailer library to send email
// However, it is recommended to switch over to dedicated email services
// like Mailgun, AWS SES, etc.
import sgMail from '@sendgrid/mail';


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function sendMail({ from, to, subject, html }) {
  try {

    sgMail
      .send({ from, to, subject, html })
      .then(() => {
        console.log(`Email sent to ${to}`);
      })
      .catch((error) => {
        console.error(error);
      })

  } catch (e) {
    throw new Error(`Could not send email: ${e.message}`);
  }
}

export const CONFIG = {
  // TODO: Replace with the email you want to use to send email
  from: "replace_hardcoded@with-config.com",
};
