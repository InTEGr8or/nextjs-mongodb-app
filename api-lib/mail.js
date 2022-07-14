import request from 'request';

const sesUrl = process.env.SES_LAMBDA_URL;

export async function sendMail({ from, to, subject, html }) {
  try {
    const messagePackage = {
      httpMethod: "POST",
      body: {
        toEmails: [
          to
        ],
        subject: subject,
        message: html
      }
    }
    request({
      method: "POST",
      url: sesUrl,
      json: true,
      body: messagePackage
    }, function(error, response, body){
      if(error){
        throw new Error(`Could not send email: ${body}`)
      }
    })
  } catch (e) {
    throw new Error(`Could not send email: ${e.message}`);
  }
}

export const CONFIG = {
  // TODO: Replace with the email you want to use to send email
  from: process.env.EMAIL_FROM,
};
