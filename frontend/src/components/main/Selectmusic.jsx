import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Selecemusic = () => {
    const [musicList, setMusicList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
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

    const handleLogout = () => {
        localStorage.removeItem('login');
        navigate('/');
    };

    return (
        <div className="Selectmusic">
            <div className="Headersel">
                <div className="music">등록된 음악</div>
                <span onClick={handleLogout} style={{ cursor: "pointer", color: "white", textDecoration: "underline" }}>로그아웃</span>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="td1">No.</th>
                        <th className="td2">노래 제목</th>
                        <th className="td3">카테고리</th>
                        <th className="td4">가수</th>
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
                                <td className="td4">{music.singer}</td>
                                <td className="td5">
                                    <button className="button" onClick={() => handleDelete(music.id)}>
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
                </tbody>
            </table>
        </div>
    );
}

export default Selecemusic;