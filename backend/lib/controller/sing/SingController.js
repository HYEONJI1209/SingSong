const database = require("../../Model");
const signUp = database.SingaSongModel;

const SONG_REGISTRATION = async (req, res) => {
    const { title, singer, category, year } = req.body; // 요청 본문에서 데이터 추출
    console.log(req.body);

    try {
        // // 유효성 검사
        // if (!title || !filepath || !singer || !category || !year) {
        //     return res.status(400).json({ message: "모든 필드를 입력해야 합니다." });
        // }

        // 새로운 노래 생성
        const newSong = await signUp.create({
            title,
            // filepath,
            singer,
            category,
            year,
        });

        return res.status(201).json({ message: "노래가 성공적으로 등록되었습니다.", song: newSong });
    } catch (error) {
        console.error("노래 등록 중 오류 발생:", error);
        return res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
};


module.exports = { SONG_REGISTRATION };
