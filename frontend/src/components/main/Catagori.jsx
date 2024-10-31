import React, { useState } from "react";
import { Whatsong_2, Button } from '../../asset/img/index';
import { useNavigate } from 'react-router-dom';

const Catagori = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState(["발라드", "R&B", "댄스", "힙합", "락", "재즈", "트로트"]);
    const [ages, setAges] = useState(["10대", "20대", "30대", "40대", "50대", "60대"]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedAge, setSelectedAge] = useState("");

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;

        if (selectedCategories.includes(selectedCategory)) {
            setSelectedCategories(selectedCategories.filter(category => category !== selectedCategory));
        } else {
            setSelectedCategories([...selectedCategories, selectedCategory]);
        }
    };

    const handleAgeChange = (event) => {
        setSelectedAge(event.target.value);
    };

    const handleConfirm = () => {
        // 선택된 카테고리와 연령대를 쿼리 파라미터로 전달
        navigate(`/Allsong?categories=${encodeURIComponent(JSON.stringify(selectedCategories))}&age=${encodeURIComponent(selectedAge)}`);
    };

    return (
        <div className="Catagori">
            <img className="Whatsong_2" alt="song" src={Whatsong_2} />
            <div className="Catagori_1">
                <div className="catagori">
                    <div className="Select">부르고자 하는 노래의 조건을 선택해 주세요!</div>

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

                    <div className="select1">
                        <span>연령대</span>
                        <div className="song_select">
                            <select name="age_select" onChange={handleAgeChange}>
                                <option value="">연령대 선택</option>
                                {ages.map((age, index) => (
                                    <option key={index} value={age}>{age}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="select1">
                        <span>선택된 카테고리</span>
                        <div className="jajang">
                            {selectedCategories.length > 0 ? (
                                selectedCategories.map((category, index) => (
                                    <div key={index} className="category-box">
                                        <span>{category}</span>
                                        &nbsp;&nbsp;<img className="Button" alt="Button" src={Button} />
                                    </div>
                                ))
                            ) : (
                                <span>카테고리를 선택해 주세요</span>
                            )}
                        </div>
                    </div>

                    <button onClick={handleConfirm}>확인</button>
                </div>
            </div>
        </div>
    );
};

export default Catagori;
