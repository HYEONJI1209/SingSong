module.exports = app => {
    const controller = require('../../controller/login/LoginController');

    const express = require('express');
    const router = express.Router();

    router.post("/userlogin", controller.SignUpController);

    app.use('/api', router);
}