import React, { useEffect, useState } from "react";

const Selecemusic = () => {
    const [musicList, setMusicList] = useState([]);

    useEffect(() => {
        fetch("/get_song")  // 백엔드의 엔드포인트에 맞게 수정
            .then(response => response.json())
            .then(data => setMusicList(data))
            .catch(error => console.error("Error fetching music data:", error));
    }, []);

    return (
        <div className="Selectmusic">
            <div className="Headersel">
                <div className="music">등록된 음악</div>
                <div className="delete">
                    <div className="su">수정</div>
                    <div className="su">삭제</div>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="td1">No.</th>
                        <th className="td2">노래 제목</th>
                        <th className="td3">카테고리</th>
                        <th className="td4">가수</th>
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
                </tbody>
            </table>
        </div>
    );
}

export default Selecemusic;
