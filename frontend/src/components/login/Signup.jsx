import React, { useState } from "react";
import { SignupService } from "../../services/login/SignupService";
import { useNavigate } from "react-router-dom";
import { Whatsong } from '../../asset/img/index';

const Signup = () => {
    const [formData, setFormData] = useState({
        userID: '',
        userPW: '',
        userEmail: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // 회원가입 처리 핸들러
    const handleSign = async () => {
        try {
            const response = await SignupService(formData.userID, formData.userEmail, formData.userPW);
            console.log(response.data);

            if (response.data && response.data.message === "SUCCESS") {
                navigate('/');
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert("회원가입 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="signup">
            <div className="textpage">
                <div className="img"><img className="Whatsong" alt="song" src={Whatsong} /></div>
                <form>
                    <div className="userid">
                        <label htmlFor="username">아이디</label>
                    </div>
                    <div className="inputtype">
                        <input
                            type="text"
                            id="username"
                            name="userID"
                            value={formData.userID}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="userpass">
                        <label htmlFor="password">비밀번호</label>
                        </div>
                        <div className="inputtype">
                        <input
                            type="password"
                            id="password"
                            name="userPW"
                            value={formData.userPW}
                            onChange={handleChange}

                        />
                        </div>
                    <div className="useremail">
                        <label htmlFor="email">이메일</label>
                        </div>
                        <div className="inputtype">
                        <input
                            type="email"
                            id="email"
                            name="userEmail"
                            value={formData.userEmail}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="button" type="button" onClick={handleSign}>회원가입</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;
