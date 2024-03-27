const database = require("../../Model");
const signUp = database.SignUpDB;
const bcrypt = require('bcrypt');

const SignUpController = async (req, res) => {
        const userData = {
        userID: req.body.userID,
        userPW: bcrypt.hashSync(req.body.userPW, 10),
        userEmail: req.body.userEmail,
    }

    signUp.create(userData)
    .then(data => {
        if (data != null) {
            res.send({ data: data, message: "SUCCESS" });
        } else {
            res.send({ data: null, message: "FAIL" });
        }
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });

};

module.exports = { SignUpController };


    // try {
    //     console.log(req.body);
    //     if (!req.body) {
    //         return res.status(400).send({ message: "Request body is missing or empty" });
    //     }

    //     const { userID, userPW, userEmail } = req.body;

    //     if (!userID || !userPW || !userEmail) {
    //         return res.status(400).send({ message: "Missing required fields in request body" });
    //     }

    //     const Sign = await signUp.create({
    //         userID: userID,
    //         userPW: userPW,
    //         userEmail: userEmail,
    //     });

    //     return res.status(200).json({
    //         success: true,
    //         message: "회원가입이 완료되었습니다.",
    //         data: Sign,
    //     });
    // } catch (error) {
    //     return res.status(500).json({ error: `회원가입에 실패했습니다: ${error.message}` });
    // }