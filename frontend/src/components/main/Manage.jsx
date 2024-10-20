import React, { useState } from "react";

const Manage = () => {
    // 각 입력값을 저장하는 상태
    const [songTitle, setSongTitle] = useState("");
    const [singer, setSinger] = useState("");
    const [category, setCategory] = useState("");
    const [year, setYear] = useState("");

    // 데이터베이스로 보내는 함수
    const handleSubmit = async () => {
        const songData = {
            title: songTitle,
            singer: singer,
            category: category,
            year: year,
        };

        try {
            const response = await fetch("/song_registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(songData),
            });

            if (response.ok) {
                alert("노래가 성공적으로 등록되었습니다!");
            } else {
                alert("등록 실패. 다시 시도해주세요.");
            }
        } catch (error) {
            console.error("에러 발생:", error);
        }
    };

    return (
        <div className="Manage">
            <div className="song1">노래 등록</div>
            <div className="selectsong">
                <button onClick={() => setCategory("힙합")} className={category === "힙합" ? "active" : ""}>힙합</button>
                <button onClick={() => setCategory("발라드")} className={category === "발라드" ? "active" : ""}>발라드</button>
            </div>

            <div className="search">
                <div className="search1">
                    <div>노래 제목 :</div>
                    <input 
                        type="text" 
                        value={songTitle} 
                        onChange={(e) => setSongTitle(e.target.value)} 
                        className="type" 
                    />
                </div>
                <div className="search1">
                    <div>가&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;수 :</div>
                    <input 
                        type="text" 
                        value={singer} 
                        onChange={(e) => setSinger(e.target.value)} 
                        className="type" 
                    />
                </div>
                <div className="search1">
                    <div>노래 연도  :</div>
                    <input 
                        type="text" 
                        value={year} 
                        onChange={(e) => setYear(e.target.value)} 
                        className="type" 
                    />
                </div>
            </div>
            <div className="Button">
                <button type="button" className="button" onClick={handleSubmit}>
                    등록
                </button>
            </div>
        </div>
    );
};

export default Manage;
