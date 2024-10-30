import React, { useState } from "react";
import { Whatsong_2 } from '../../asset/img/index';

const Allsong = () => {
    const categoryList = [
        { value: "category", name: "카테고리" },
        { value: "ballad", name: "발라드" },
        { value: "rnb", name: "R&B" },
        { value: "dance", name: "댄스" },
        { value: "hiphop", name: "힙합" },
        { value: "jaze", name: "재즈" },
        { value: "trote", name: "트로트" },
        { value: "rock", name: "락" },
    ];

    const ageList = [
        { value: "age", name: "연령대" },
        { value: "10s", name: "10대" },
        { value: "20s", name: "20대" },
        { value: "30s", name: "30대" },
        { value: "40s", name: "40대" },
    ];

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedAges, setSelectedAges] = useState([]);
    const [likedSongs, setLikedSongs] = useState([]);

    const handleCategorySelect = (e) => {
        const value = e.target.value;
        setSelectedCategories((prevCategories) => {
            if (prevCategories.includes(value)) {
                return prevCategories.filter((category) => category !== value);
            } else {
                return [...prevCategories, value];
            }
        });
    };

    const handleAgeSelect = (e) => {
        const value = e.target.value;
        setSelectedAges((prevAges) => {
            if (prevAges.includes(value)) {
                return prevAges.filter((age) => age !== value);
            } else {
                return [...prevAges, value];
            }
        });
    };

    // 카테고리 제거 함수
    const removeCategory = (category) => {
        setSelectedCategories((prevCategories) =>
            prevCategories.filter((item) => item !== category)
        );
    };

    // 찜 기능을 위한 함수
    const toggleLike = (song) => {
        setLikedSongs((prevLikedSongs) => {
            if (prevLikedSongs.includes(song)) {
                return prevLikedSongs.filter((likedSong) => likedSong !== song);
            } else {
                return [...prevLikedSongs, song];
            }
        });
    };

    // 한글 이름 변환 함수
    const getCategoryName = (value) => {
        const category = categoryList.find((item) => item.value === value);
        return category ? category.name : '';
    };

    const getAgeName = (value) => {
        const age = ageList.find((item) => item.value === value);
        return age ? age.name : '';
    };

    return (
        <div className="Allsong">
            <div className="topword">
                <div><img className="Whatsong_2" alt="song" src={Whatsong_2} /></div>
                <div className="word">My page</div>
            </div>

            <div className="fillter">
                <div className="word2">전체 노래</div>
            </div>
            <div className="catabox">
                <div className="select1">
                    <div className="song_select">
                        <select value="category" onChange={handleCategorySelect}>
                            {categoryList.map((item) => (
                                <option value={item.value} key={item.value}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="selected_categories">
                        {selectedCategories.map((category) => (
                            <span
                                key={category}
                                className="selected_catesong"
                                style={{ marginRight: '8px', padding: '5px', backgroundColor: '#f0f0f0', borderRadius: '5px', display: 'inline-flex', alignItems: 'center' }}
                            >
                                {getCategoryName(category)}
                                <button
                                    onClick={() => removeCategory(category)}
                                    style={{ marginLeft: '10px', cursor: 'pointer', background: 'transparent', border: 'none', color: 'black' }}
                                >
                                    X
                                </button>
                            </span>
                        ))}
                    </div>
                </div>
                <div className="select2">
                    <div className="song_select">
                        <select value="age" onChange={handleAgeSelect}>
                            {ageList.map((item) => (
                                <option value={item.value} key={item.value}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="selected_ages">
                        <span>{selectedAges.map(getAgeName).join(' ')}</span>
                    </div>
                    <div>제목 및 가수 검색</div>
                </div>
            </div>

            <div className="Song">
                <div className="song1">
                    <div className="no">No.</div>
                    <div className="no2">노래 제목</div>
                    <div className="no3">카테고리</div>
                    <div className="no4">가수</div>
                    <div className="no5"></div>

                </div>
                {/* 예시 노래 리스트 */}
                <div className="song2">
                    <div className="no">01.</div>
                    <div className="no2">눈</div>
                    <div className="no3">발라드</div>
                    <div className="no4">정준일</div>
                    <div className="no5">
                        <button
                            onClick={() => toggleLike("눈")}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "24px" // 하트 크기를 키우는 스타일
                            }}
                        >
                            {likedSongs.includes("눈") ? "❤️" : "🤍"}
                        </button>
                    </div>
                </div>
                <div className="song2">
                    <div className="no">02.</div>
                    <div className="no2">달</div>
                    <div className="no3">R&B</div>
                    <div className="no4">스트레이</div>
                    <div className="no5">
                        <button
                            onClick={() => toggleLike("달")}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "24px" // 하트 크기를 키우는 스타일
                            }}
                        >
                            {likedSongs.includes("달") ? "❤️" : "🤍"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allsong;
