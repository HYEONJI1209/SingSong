const database = require("../../Model");
const songDB = database.SingaSongModel;

const SONG_REGISTRATION = async (req, res) => {
    const { title, singer, category, year } = req.body;
    console.log(req.body);

    try {
        // 새로운 노래 생성
        const newSong = await songDB.create({
            title,
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

//노래 수정
const SONG_UPDATE = async (req, res) => {
    const { id, title, singer, category, year } = req.body;
    console.log(req.body);

    try {
        // 노래를 ID로 찾기
        const songToUpdate = await songDB.findByPk(id);

        if (!songToUpdate) {
            return res.status(404).json({ message: "노래를 찾을 수 없습니다." });
        }

        // 노래 정보 업데이트
        const updatedSong = await songToUpdate.update({
            title: title || songToUpdate.title,
            singer: singer || songToUpdate.singer,
            category: category || songToUpdate.category,
            year: year || songToUpdate.year,
        });

        return res.status(200).json({ message: "노래가 성공적으로 수정되었습니다.", song: updatedSong });
    } catch (error) {
        console.error("노래 수정 중 오류 발생:", error);
        return res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
};


//노래 삭제
const SONG_DELETE = async (req, res) => {
    const { id } = req.params;
    console.log(`삭제할 노래 ID: ${id}`);

    try {
        // 노래를 ID로 찾기
        const songToDelete = await songDB.findByPk(id);

        if (!songToDelete) {
            return res.status(404).json({ message: "노래를 찾을 수 없습니다." });
        }

        // 노래 삭제
        await songToDelete.destroy();

        return res.status(200).json({ message: "노래가 성공적으로 삭제되었습니다." });
    } catch (error) {
        console.error("노래 삭제 중 오류 발생:", error);
        return res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
};

//모든 노래 조회
const SONG_GET_ALL = async (req, res) => {
    try {
        const songs = await songDB.findAll();

        return res.status(200).json({ message: "모든 노래 데이터를 가져왔습니다.", songs });
    } catch (error) {
        console.error("모든 노래 데이터 가져오는 중 오류 발생:", error);
        return res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
};

module.exports = {
    SONG_REGISTRATION,
    SONG_UPDATE,
    SONG_DELETE,
    SONG_GET_ALL
};
