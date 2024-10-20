const express = require("express");
const app = express();
app.use(express.json());

let songDataList = []; // 데이터 저장소

// 데이터 저장 (POST)
app.post("/song_registration", (req, res) => {
    const { title, singer, category, year, pick } = req.body;
    songDataList.push({ title, singer, category, year, pick });
    res.status(200).send("데이터가 성공적으로 저장되었습니다.");
});

// 데이터 조회 (GET)
app.get("/songs", (req, res) => {
    res.status(200).json(songDataList);
});

app.listen(3000, () => {
    console.log("서버가 3000번 포트에서 실행 중입니다.");
});
