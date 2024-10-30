module.exports = app => {
    const controller = require('../../controller/sing/CategoryController');
    const express = require('express');
    const router = express.Router();

    router.post("/post_category", controller.PostCategory);
    router.put("/put_category", controller.UpdateCategory);
    router.delete("/delete_category/:id", controller.DeleteCategory);
    router.get("/get_category", controller.GetAllCategories);

    app.use('/api', router);
};
