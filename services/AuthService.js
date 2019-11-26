let instance = require('../database').getInstance();


class AuthService {

    async authenticate(name, password) {
        let model = instance.getModel('User');
        let findOne = await model.findOne({where: {name, password}});

        return findOne && findOne.dataValues;

    }

    saveTokenToDatabase(obect) {
        console.log(obect);
        let model = instance.getModel('Auth');
        model.create(obect);


    }

    async finduserByToken(token) {
        let model = instance.getModel('Auth');
        let authObject = await model.findOne({where: {access_token: token}});
        return authObject && authObject.dataValues;


    }

}

module.exports = new AuthService();
