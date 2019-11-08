let Sequelize = require('sequelize');
let fs = require('fs');
let {resolve} = require('path');

module.exports = (() => {


    let instance;

    function initInstance() {
        //create connection
        const sequelize = new Sequelize('test', 'root', 'root', {host: 'localhost', dialect: 'mysql'});
        const models = {};

        // init your models
        function getModels() {
            fs.readdir('./database/models', (err, files) => {
                files.forEach(file => {
                    console.log(file);
                    let [modelName] = file.split('.');
                    models[modelName] = sequelize.import(`../database/models/${modelName}`);
                });
            })
        }

        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        }
    }


    return {

        getInstance: () => {
            if (!instance) {
                instance = initInstance();
            }
            return instance;

        }
    }

})();
