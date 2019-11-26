let authService = require('../services/AuthService');
let tokenizer = require('../helpers/tokenizer');

class AuthController {


    async authUser(req, res) {
        try {
            let authenticateUser = await authService.authenticate(req.body.name, req.body.password);

            console.log(authenticateUser);
            if (!authenticateUser) {
                throw new Error('user not found');
            }
            let tokens = tokenizer();
            //todo save in db
            authService.saveTokenToDatabase({user_id: authenticateUser.id, ...tokens});
            res.json(tokens);

        } catch (e) {
            res.json(e.message).status(403);
        }

    }

}

module.exports = new AuthController();
