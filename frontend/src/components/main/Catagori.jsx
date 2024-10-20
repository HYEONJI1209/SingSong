import React, { useState } from "react";
import { Whatsong_2, Button } from '../../asset/img/index';

const Catagori = () => {
    // 카테고리와 연령대의 더미 데이터를 useState로 설정
    const [categories, setCategories] = useState(["발라드", "R&B", "댄스", "힙합", "락", "재즈", "트로트"]);
    const [ages, setAges] = useState(["10대", "20대", "30대", "40대", "50대", "60대"]);

    // 여러 개의 선택된 카테고리를 저장할 상태
    const [selectedCategories, setSelectedCategories] = useState([]);

    // 카테고리 선택 시 호출되는 함수
    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;

        // 이미 선택된 카테고리인지 확인
        if (selectedCategories.includes(selectedCategory)) {
            // 이미 선택된 카테고리이면 배열에서 제거
            setSelectedCategories(selectedCategories.filter(category => category !== selectedCategory));
        } else {
            // 선택되지 않았으면 배열에 추가
            setSelectedCategories([...selectedCategories, selectedCategory]);
        }
    };

    return (
        <div className="Catagori">
            <img className="Whatsong_2" alt="song" src={Whatsong_2} />
            <div className="Catagori_1">
                <div className="catagori">
                    <div className="Select">
                        부르고자 하는 노래의 조건을 선택해 주세요!
                    </div>

                    {/* 카테고리 선택 */}
                    <div className="select1">
                        <span>카테고리</span>
                        <div className="song_select">
                            <select name="category_select" onChange={handleCategoryChange}>
                                <option value="">카테고리 선택</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* 연령대 선택 */}
                    <div className="select1">
                        <span>연령대</span>
                        <div className="song_select">
                            <select name="age_select">
                                {ages.map((age, index) => (
                                    <option key={index} value={age}>{age}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* 선택된 카테고리들을 각각의 div에 표시 */}
                    <div className="select1">
                        <span>선택된 카테고리</span>
                        <div className="jajang">
                            {selectedCategories.length > 0 ? (
                                selectedCategories.map((category, index) => (
                                    <div  key={index} className="category-box">
                                        <span>{category}</span>
                                        &nbsp;&nbsp;<img className="Button" alt="Button" src={Button} />
                                    </div>
                                 
                                ))
                            ) : (
                                <span>카테고리를 선택해 주세요</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catagori;
