import React, { useState } from "react";
import { Whatsong } from '../../asset/img/index';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const LandingPage = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/login', {
                userID: userId,
                userPW: password,
            });

            if (response.status === 200) {
                navigate('/UserPage');
            } else {
                alert(response.data.message);
            }

        } catch (error) {
            console.error("로그인 요청 중 오류 발생:", error);
            alert("로그인 중 문제가 발생했습니다.");
        }
    };

    return (
        <div className="Log">
            <div className="MainLog">
                <div className="Sing">
                    <img className='Whatsong' alt='Whatsong' src={Whatsong} />
                </div>
                <div className="IDPS">
                    <div className="ID">
                        <div className="inputTitle">아이디</div>
                        <div className="inputWrap">
                            <input className="text" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
                        </div>
                    </div>
                    <div className="ID">
                        <div className="inputTitle">비밀번호</div>
                        <div className="inputWrap">
                            <input className="text" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="botlog">
                        <div className="log" onClick={handleLogin}>
                            로그인
                        </div>
                        <div className="respass">
                            <Link to="/signup">회원가입</Link>&nbsp;/&nbsp;<span>아이디 찾기</span>&nbsp;/&nbsp;<span>비밀번호 찾기</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
