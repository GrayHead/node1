let userService = require('../services/UserService');
let jwtVerify = require('../helpers/jwtVerify');

let authService = require('../services/AuthService');

class UserController {
    async getUsers(req, res) {
        let users = await userService.getUsers();
        console.log(users, '!!!!!!!!!!!!!!!!!!!!!!!!!!');
        res.json(users);
    }

    async updateUser(req, res) {
        let authorizationHeaderToken = req.get('Authorization');
        console.log(authorizationHeaderToken);
        if (!authorizationHeaderToken) {
            throw new Error('no token');
        }
        jwtVerify(authorizationHeaderToken);

        let authObject = await authService.finduserByToken(authorizationHeaderToken);
        let userId = authObject.user_id;


        userService.updateUser(userId, req.body.name);
        res.json();


    }

}

module.exports = new UserController();
