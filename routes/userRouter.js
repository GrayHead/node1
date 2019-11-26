let router = require('express').Router();
let userController = require('../controllers/UserController');

router.get('/', userController.getUsers);
router.patch('/', userController.updateUser);
module.exports = router;
