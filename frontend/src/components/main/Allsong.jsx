import React, { useState, useEffect } from "react";
import { Whatsong_2 } from '../../asset/img/index';
import { useNavigate } from "react-router-dom";

const Allsong = () => {
    const categoryList = [
        { value: "카테고리", name: "카테고리" },
        { value: "발라드", name: "발라드" },
        { value: "R&B", name: "R&B" },
        { value: "댄스", name: "댄스" },
        { value: "힙합", name: "힙합" },
        { value: "재즈", name: "재즈" },
        { value: "트로트", name: "트로트" },
        { value: "락", name: "락" },
        { value: "동요", name: "동요" },
    ];
    const navigate = useNavigate();
    const [allSongs, setAllSongs] = useState([]);
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("카테고리");
    const [searchTerm, setSearchTerm] = useState("");
    const [likedSongs, setLikedSongs] = useState([]);


    useEffect(() => {
        getSongs();
    }, []);

    useEffect(() => {
        filterSongs();
    }, [selectedCategory, allSongs, searchTerm]);

    const getSongs = async () => {
        try {
            const response = await fetch('/api/get_song');
            const data = await response.json();

            if (Array.isArray(data.songs)) {
                setAllSongs(data.songs);
                setFilteredSongs(data.songs);
            } else {
                console.error("Received data is not an array", data);
            }
        } catch (error) {
            console.error("Error fetching songs:", error);
        }
    };

    const filterSongs = () => {
        const filtered = allSongs.filter(song => {
            const matchesCategory = selectedCategory === "카테고리" || song.category === selectedCategory;
            const matchesSearchTerm =
                (song.title?.includes(searchTerm) || song.artist?.includes(searchTerm));
            return matchesCategory && matchesSearchTerm;
        });
        setFilteredSongs(filtered);
    };


    const handleCategorySelect = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleLogout = () => {
        localStorage.removeItem('login');
        navigate('/');
    };

    const toggleLike = (songTitle) => {
        if (likedSongs.includes(songTitle)) {
            // 이미 좋아요한 노래이면 제거
            setLikedSongs(likedSongs.filter(title => title !== songTitle));
        } else {
            // 좋아요하지 않은 노래이면 추가
            setLikedSongs([...likedSongs, songTitle]);
        }
    };



    return (
        <div className="Allsong">
            <div className="topword">
                <div><img className="Whatsong_2" alt="song" src={Whatsong_2} /></div>
                {/* <div className="word">My page</div> */}
                <span onClick={handleLogout} style={{ cursor: "pointer", color: "white", textDecoration: "underline" }}>로그아웃</span>
            </div>

            <div className="fillter">
                <div className="word2">전체 노래에서 검색하기</div>
            </div>
            <div className="catabox">
                <div className="select1">
                    <div className="song_select">
                        <select value={selectedCategory} onChange={handleCategorySelect}>
                            {categoryList.map((item) => (
                                <option value={item.value} key={item.value}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="select2">
                    <input
                        type="text"
                        placeholder="제목 및 가수 검색"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
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
                {filteredSongs.map((song, index) => (
                    <div className="song2" key={index}>
                        <div className="no">{index + 1}.</div>
                        <div className="no2">{song.title}</div>
                        <div className="no3">{song.category}</div>
                        <div className="no4">{song.singer}</div>
                        <div className="">
                            <button
                                onClick={() => toggleLike(song.title)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "24px" // 하트 크기를 키우는 스타일
                                }}
                            >
                                {likedSongs.includes(song.title) ? "❤️" : "🤍"}
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Allsong;
