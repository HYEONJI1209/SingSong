import React from "react";

const Selecemusic = () => {
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
                <th className="td1">No.</th>
                <th className="td2">노래 제목</th>
                <th className="td3">카테고리</th>
                <th className="td4">가수</th>

                <tr className="tr1">
                    <td className="td1">01.</td>
                    <td className="td2">눈</td>
                    <td className="td3">발라드</td>
                    <td className="td4">정준일</td>
                </tr>
                <tr className="tr1">
                    <td className="td1">02.</td>
                    <td className="td2">달</td>
                    <td className="td3">발라드</td>
                    <td className="td4">스트레이</td>
                </tr>

            </table>
        </div>
    )
}

export default Selecemusic;