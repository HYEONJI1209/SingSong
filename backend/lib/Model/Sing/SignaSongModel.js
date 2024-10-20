module.exports = (sequelize, Sequelize) => {
    const SingaSongModel = sequelize.define("SingTable", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        //앨범 표지 경로
        // filepath:{
        //     type: Sequelize.STRING,
        //     allowNull: false,
        // },
        //가수
        singer: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        //노래의 카테고리 (배열)
        category: {
            type: Sequelize.JSON,
            allowNull: false,
        },
        //해당 노래의 연도
        year: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        freezeTableName: true
    })
    return SingaSongModel;
};
