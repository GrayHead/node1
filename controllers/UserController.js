let userService = require('../services/UserService.js');

class UserController {
    async getUsers(req, res) {
        let users = await userService.getUsers();
        console.log(users,'!!!!!!!!!!!!!!!!!!!!!!!!!!');
        res.json(users);
    }

}

module.exports = new UserController();
