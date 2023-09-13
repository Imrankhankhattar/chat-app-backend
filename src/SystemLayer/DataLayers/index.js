const UserDAO = require('../PersistenceDataLayer/DataAccessLayers/UserDAO');

function DataService(data) {
    this.data = data;

    this.Users = {
        data: this.data,

        addUser: async function (userData) {
            return await new UserDAO().AddUser(userData);
        },
        verifyUser: async function (userData) {
            return await new UserDAO().VerifyUser(userData);
        },
        login: async function (data) {
            return await new UserDAO().Login(data);
        }

    }
}

module.exports = DataService;