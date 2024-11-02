import React, { useState } from "react";

const Manage = () => {
    const [songTitle, setSongTitle] = useState("");
    const [singer, setSinger] = useState("");
    const [category, setCategory] = useState("");
    const [year, setYear] = useState("");

    const loginInfo = JSON.parse(localStorage.getItem('login'));
    const username = loginInfo ? loginInfo.userId : "사용자";

    const handleSubmit = async () => {

        if (!songTitle || !singer || !category || !year) {
            alert("모든 필드를 채워주세요.");
            return;
        }

        const songData = {
            title: songTitle,
            singer: singer,
            category: category,
            year: year,
        };

        try {
            const response = await fetch("/api/song_registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(songData),
            });

            if (response.ok) {
                alert("노래가 성공적으로 등록되었습니다!");
                setSongTitle("");
                setSinger("");
                setCategory("");
                setYear("");
            } else {
                alert("등록 실패. 다시 시도해주세요.");
            }
        } catch (error) {
            console.error("에러 발생:", error);
        }
    };

    // 로그아웃 함수
    const handleLogout = () => {
        localStorage.removeItem('login');
        window.location.href = "/";
    };

    return (
        <div className="Manage">
            <div className="username">
            <div className="song1">노래 등록</div>
            <div className="name">
                <span>{username}님, 반갑습니다!</span>
                <span onClick={handleLogout} style={{ cursor: "pointer", color: "white", textDecoration: "underline" }}>로그아웃</span>
            </div>
            </div>
            <div className="selectsong">
                <button onClick={() => setCategory("힙합")} className={`hiphop ${category === "힙합" ? "active" : ""}`}>힙합</button>
                <button onClick={() => setCategory("발라드")} className={`ballad ${category === "발라드" ? "active" : ""}`}>발라드</button>
                <button onClick={() => setCategory("재즈")} className={`jazz ${category === "재즈" ? "active" : ""}`}>재즈</button>
                <button onClick={() => setCategory("R&B")} className={`rb ${category === "R&B" ? "active" : ""}`}>R&B</button>
                <button onClick={() => setCategory("댄스")} className={`dance ${category === "댄스" ? "active" : ""}`}>댄스</button>
                <button onClick={() => setCategory("동요")} className={`kids ${category === "동요" ? "active" : ""}`}>동요</button>
                <button onClick={() => setCategory("락")} className={`lock ${category === "락" ? "active" : ""}`}>락</button>
                <button onClick={() => setCategory("트로트")} className={`trot ${category === "트로트" ? "active" : ""}`}>트로트</button>
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
