module.exports = app => {
    const controller = require('../../controller/sing/SingController');
    const express = require('express');
    const router = express.Router();

    router.post("/song_registration", controller.SONG_REGISTRATION);
    router.put("/put_song", controller.SONG_UPDATE);
    router.delete("/delete_song/:id", controller.SONG_DELETE);
    router.get("/get_song", controller.SONG_GET_ALL);


    //찜기능
    router.post("/pick_song", controller.AddPickSong);

    app.use('/api', router);
};
