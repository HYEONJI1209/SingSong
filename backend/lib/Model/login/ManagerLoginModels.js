module.exports = (sequelize, Sequelize) => {
    const ManagerModels = sequelize.define("ManagerLogin", {
        ManagerID: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        ManagerPW: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        ManagerEmail: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        freezeTableName: true
    })
    return ManagerModels;
};
