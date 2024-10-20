module.exports = (sequelize, Sequelize) => {
    const SignUp = sequelize.define("signupDB", {
        userID: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        userPW: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        userEmail: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        pickSong:{
            type: Sequelize.JSON,
            allowNull: false,
        }
    }, {
        freezeTableName: true
    })
    return SignUp;
};
