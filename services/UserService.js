let db = require('../database').getInstance();

class UserService {
    async getUsers() {
        let userModel = db.getModel('User');
        console.log(userModel);
        return await userModel.findAll();
    }

}

module.exports = new UserService();
