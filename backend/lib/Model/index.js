const Sequelize = require("sequelize");

//model routes
const SignUpDB = require("./login/SignUpModels");
const ManagerLoginDB = require("./login/ManagerLoginModels");
const SingaSongModel = require("./Sing/SignaSongModel");
const CategoryModel = require("./Sing/CategoryModel");

//db 연결 정보 가져오기
const { ExdbConfig } = require("../config/config");

//db 및 모델 저장
const database = {};

//db에 대한 연결 설정
const Node_db = new Sequelize(
    ExdbConfig.database,
    ExdbConfig.user,
    ExdbConfig.password,
    ExdbConfig
);

database.Sequelize = Sequelize;
database.Node_db = Node_db;

//함수 호출 및 반환
database.SignUpDB = SignUpDB(Node_db, Sequelize);
database.ManagerLoginDB = ManagerLoginDB(Node_db, Sequelize);
database.SingaSongModel = SingaSongModel(Node_db, Sequelize);
database.CategoryModel = CategoryModel(Node_db, Sequelize);

module.exports = database;