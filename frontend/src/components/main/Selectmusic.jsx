import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import axios from "axios";
=======
>>>>>>> d59844da2e587501f2b6ef17b301ed9888920879

const Selecemusic = () => {
    const [musicList, setMusicList] = useState([]);

    useEffect(() => {
<<<<<<< HEAD
        const fetchMusic = async () => {
            try {
                const response = await axios.get('/api/get_song');
                if (Array.isArray(response.data.songs)) {
                    setMusicList(response.data.songs);
                } else {
                    console.error("응답 데이터가 배열이 아닙니다:", response.data);
                }
            } catch (error) {
                console.error("음악 정보를 가져오는 중 오류 발생:", error);
            }
        };

        fetchMusic();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/delete_song/${id}`);
            setMusicList(prevList => prevList.filter(music => music.id !== id));
        } catch (error) {
            console.error("음악 삭제 중 오류 발생:", error);
        }
    };

=======
        fetch("/get_song")  // 백엔드의 엔드포인트에 맞게 수정
            .then(response => response.json())
            .then(data => setMusicList(data))
            .catch(error => console.error("Error fetching music data:", error));
    }, []);

>>>>>>> d59844da2e587501f2b6ef17b301ed9888920879
    return (
        <div className="Selectmusic">
            <div className="Headersel">
                <div className="music">등록된 음악</div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="td1">No.</th>
                        <th className="td2">노래 제목</th>
                        <th className="td3">카테고리</th>
                        <th className="td4">가수</th>
<<<<<<< HEAD
                        <th className="td5">작업</th>
                    </tr>
                </thead>
                <tbody>
                    {musicList.length > 0 ? (
                        musicList.map((music, index) => (
                            <tr key={music.id} className="tr1">
                                <td className="td1">{index + 1}.</td>
                                <td className="td2">{music.title}</td>
                                <td className="td3">{music.category}</td>
                                <td className="td4">{music.artist}</td>
                                <td className="td5">
                                    <button onClick={() => handleDelete(music.id)}>
                                        삭제
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="td1">등록된 음악이 없습니다.</td>
                        </tr>
                    )}
=======
                    </tr>
                </thead>
                <tbody>
                    {musicList.map((music, index) => (
                        <tr key={index} className="tr1">
                            <td className="td1">{index + 1}.</td>
                            <td className="td2">{music.title}</td>
                            <td className="td3">{music.category}</td>
                            <td className="td4">{music.singer}</td>
                        </tr>
                    ))}
>>>>>>> d59844da2e587501f2b6ef17b301ed9888920879
                </tbody>
            </table>
        </div>
    );
}

export default Selecemusic;
