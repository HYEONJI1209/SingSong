const database = require("../../models");
const signUp = database.SignUpDB;
const ManagerDB = database.ManagerLoginDB;

// 로그인
const login = async (req, res) => {
    const { userID, userPW } = req.body;
    console.log(req.body);

    try {
        // 관리자 확인
        const manager = await ManagerDB.findOne({ where: { managerID: userID } });
        if (manager) {
            // 관리자 로그인 성공
            if (manager.managerPW === userPW) {
                return res.status(200).json({ message: "관리자입니다." });
            } else {
                return res.status(401).json({ message: "비밀번호가 올바르지 않습니다." });
            }
        }

        // 일반 사용자 확인
        const user = await signUp.findOne({ where: { userID } });
        if (user) {
            // 사용자 로그인 성공
            if (user.userPW === userPW) {
                return res.status(200).json({ message: "로그인 완료" });
            } else {
                return res.status(401).json({ message: "비밀번호가 올바르지 않습니다." });
            }
        }

        return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    } catch (error) {
        console.error("로그인 중 오류 발생:", error);
        return res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
};

// 아이디 찾기
const findUserID = async (req, res) => {
    const { email, userPW } = req.body;
    console.log(req.body);

    try {
        const user = await signUp.findOne({ where: { userEmail: email, userPW } });
        if (user) {
            return res.status(200).json({ message: "아이디를 찾았습니다.", userID: user.userID });
        } else {
            return res.status(404).json({ message: "해당 이메일과 비밀번호에 일치하는 아이디가 없습니다." });
        }
    } catch (error) {
        console.error("아이디 찾기 중 오류 발생:", error);
        return res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
};

// 비밀번호 찾기
const findPassword = async (req, res) => {
    const { userID, email } = req.body;
    console.log(req.body);

    try {
        const user = await signUp.findOne({ where: { userID, userEmail: email } });
        if (user) {
            return res.status(200).json({ message: "비밀번호를 찾았습니다.", userPW: user.userPW });
        } else {
            return res.status(404).json({ message: "해당 아이디와 이메일에 일치하는 비밀번호가 없습니다." });
        }
    } catch (error) {
        console.error("비밀번호 찾기 중 오류 발생:", error);
        return res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
};

module.exports = {
    login,
    findUserID,
    findPassword
};
