module.exports = app => {
    const controller = require('../../controller/sing/SingController');
    const express = require('express');
    const router = express.Router();

    router.post("/song_registration", controller.SONG_REGISTRATION);

    app.use('/api', router);
};
