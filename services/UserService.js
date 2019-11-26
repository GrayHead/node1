let db = require('../database').getInstance();

class UserService {
    async getUsers() {
        let userModel = db.getModel('User');
        console.log(userModel);
        return await userModel.findAll();
    }


    async updateUser(id, newName) {
        let userModel = db.getModel('User');
        userModel.update({name: newName}, {where: {id}});


    }
}

module.exports = new UserService();
