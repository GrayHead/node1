let jwt = require('jsonwebtoken');
let {jwt_secret, jwt_refresj} = require('../constants/config');
module.exports = () => {


    let access_token = jwt.sign({}, jwt_secret, {expiresIn: '24h'});
    let refresh_token = jwt.sign({}, jwt_refresj, {expiresIn: '48h'});

    return {access_token, refresh_token}

};


