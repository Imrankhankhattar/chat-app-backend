class VerifyUserHandler {
    constructor(dataService) {
        this.store = dataService;
    }

    async execute(data) {
        let userResp = await this.store.Users.verifyUser(data);
        return userResp
    }
}

module.exports = VerifyUserHandler;