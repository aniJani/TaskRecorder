const express = require('express');
const {
    createUser
} = require('../controllers/userController');

const router = express.Router();

//create user
router.post('/create/:id', createUser);

module.exports = router;
