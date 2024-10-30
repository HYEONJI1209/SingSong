module.exports = (sequelize, Sequelize) => {
    const CategoryModel = sequelize.define("CategoryModel", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, {
        freezeTableName: true
    })
    return CategoryModel;
};
