const Users = require('../DatabaseObjects/User');
const sendOtp = require('../../../Services/twilio');
const { generateOTP, validateOTP } = require('../../../Services/SpeakEasy');
const { setData, getData } = require('../../../Services/redis')
class UserDAO {

    constructor() {
        this.key = null;
    }

    async AddUser(data) {
        // OTP Generated through speak easy library.
        const OTP = generateOTP();
        this.key = OTP.key;
        // OTP sent to the user using twilio service
        sendOtp(data.contact, OTP);
        // Store user data in Redis
        setData(`user:${data.contact}`, data);
        return { success: true, status: 200, message: "OTP sent!" }
    }

    async VerifyUser(data, login = false) {
        let user = await getData(`user:${data.contact}`);
        if (user) {
            const result = validateOTP(this.key, data.OTP);
            if (result && login) {
                return { success: true, status: 200, message: "OTP Verified!" }
            } else if (result) {
                const newUser = new Users(data)
                const res = await newUser.save()
                if (res && res._id) {
                    return { success: true, status: 200, message: "OTP Verified!" }
                }
            } else {
                return { success: false, message: "Invalid OTP Provided!" }
            }
        }
    }

    async Login(data) {
        return { status : true, message : "LOGIN"};
    }

}

module.exports = UserDAO