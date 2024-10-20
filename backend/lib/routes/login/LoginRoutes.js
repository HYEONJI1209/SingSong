module.exports = app => {
    const controller = require('../../controller/login/LoginController');
    const express = require('express');
    const router = express.Router();

    // 로그인
    router.post("/login", controller.login);
    // 아이디 찾기
    router.post("/find_user_id", controller.findUserID);
    // 비밀번호 찾기
    router.post("/find_password", controller.findPassword);

    app.use('/api', router);
};
