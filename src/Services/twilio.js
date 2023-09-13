const dotenv = require('dotenv')
const twilio = require('twilio')
dotenv.config();

const sendOtp = async (contact, OTP) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = new twilio(accountSid, authToken);

  client.messages.create({
    body: `Your OTP for chat app is : ${OTP}`,
    from: '+1 980 295 2329',
    to: `${contact}`
  })
    .then(message => console.log(message.sid))
}

module.exports = sendOtp