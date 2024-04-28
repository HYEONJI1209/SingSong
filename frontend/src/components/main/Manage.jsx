import React from "react";

const Manage =()=>{
    return(
        <div className="Manage">
            <div className="song1">노래 등록</div>
            <div className="selectsong">
                <div className="hip">힙합</div>
                <div className="bal">발라드</div>
            </div>

            <div className="search">
                <div className="search1">
                <div>노래 제목 :</div>
                <div className="type"></div>
                </div>
                <div className="search1">
                <div>가&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;수 :</div>
                <div className="type"></div>
                </div>
                <div className="search1">
                <div>노래 연도  :</div>
                <div className="type"></div>
                </div>
            </div>
            <div className="Button">
                <button type="button" class="button">버튼</button>
            </div>
        </div>
    )
}
export default Manage;