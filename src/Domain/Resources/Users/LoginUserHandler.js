const { setData, getData } = require('../../../Services/redis')
const { generateOTP, validateOTP } = require('../../../Services/SpeakEasy')
class LoginUserHandler {
    constructor(dataService) {
        this.store = dataService;
    }

    async execute(data) {
        let userResp = await this.store.Users.verifyUser(data, true);
        if (userResp) {
            let loggedIn = await this.store.Users.login(data);
            return loggedIn;
        }
    }
}

module.exports = LoginUserHandler;