import React from "react";
import { Whatsong_2 ,Button} from '../../asset/img/index';
const Catagori = () => {
    return (
        <div className="Catagori">
            <img className="Whatsong_2" alt="song" src={Whatsong_2} />
            <div className="Catagori_1">
                <div className="catagori">
                    <div className="Select">
                        부르고자 하는 노래의 조건을 선택해 주세요!
                    </div>
                    <div className="select1">
                        <span>카테고리</span>
                        <div className="song_select">
                            <select name="select">
                                <option value="option 1">발라드</option>
                                <option value="option 2">R&B</option>
                                <option value="option 3">댄스</option>
                                <option value="option 4">힙합</option>
                            </select>
                        </div>
                    </div>

                    <div className="select1">
                        <span>연령대</span>
                        <div className="song_select">
                            <select name="select">
                                <option value="option 1">10대</option>
                                <option value="option 2">20대</option>
                                <option value="option 3">30대</option>
                                <option value="option 4">40대</option>
                            </select>
                        </div>
                    </div>

                    <div className="select1">
                        <span>카테고리</span>
                        <div className="jajang">
                            <div className="bal">
                            발라드&nbsp;&nbsp;<img className="Button" alt="Button" src={Button}></img>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Catagori;