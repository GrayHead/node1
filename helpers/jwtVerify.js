let jwt = require('jsonwebtoken');
let {jwt_secret} = require('../constants/config');
module.exports = (token) => {
    jwt.verify(token, jwt_secret, (error) => {
        if (error) {
            throw new Error('invalid token');
        }
    })

};
