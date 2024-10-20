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

    // X버튼을 눌렀을 때 해당 카테고리를 제거하는 함수
    const removeCategory = (category) => {
        setSelectedCategories((prevCategories) =>
            prevCategories.filter((item) => item !== category)
        );
    };

    // 선택된 카테고리와 연령대의 한글 이름을 찾는 함수
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
                <div className="word2">전체 노래에서 검색하기</div>
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
                        {/* 선택된 카테고리 리스트 */}
                        {selectedCategories.map((category) => (
                            <span 
                                key={category} 
                                className="selected_catesong" 
                                style={{ marginRight: '8px', padding: '5px', backgroundColor: '#f0f0f0', borderRadius: '5px', display: 'inline-flex', alignItems: 'center' }}
                            >
                                {getCategoryName(category)}
                                {/* X 버튼 */}
                                <button
                                    onClick={() => removeCategory(category)}
                                    style={{ marginLeft: '10px', cursor: 'pointer', background: 'transparent', border: 'none', color: 'black'}}
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
                    <div>
                        제목 및 가수검색
                    </div>
                </div>
            </div>

            <div className="Song">
                <div className="song1">
                    <div className="no">No.</div>
                    <div className="no2">노래 제목</div>
                    <div className="no3">카테고리</div>
                    <div className="no4">가수</div>
                </div>
                <div className="song2">
                    <div className="no">01.</div>
                    <div className="no2">눈</div>
                    <div className="no3">발라드</div>
                    <div className="no4">정준일</div>
                </div>
            </div>
        </div>
    );
};

export default Allsong;
