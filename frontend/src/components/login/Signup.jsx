import React, { useState } from "react";
import { SignupService } from "../../services/login/SignupService";

const Signup = () => {
    // 상태 변수 정의 및 초기화
    const [formData, setFormData] = useState({
        userID: '',
        userPW: '',
        userEmail: ''
    });

    // 입력 필드 값 변경 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, //spread 연산자 ...사용
            [name]: value
        });
    };

    // 회원가입 처리 핸들러
    const handleSign = async () => {
        try {
            // 회원가입 서비스 호출 및 응답 처리
            const response = await SignupService(formData.userID, formData.userEmail, formData.userPW);
            console.log(response.data);
        } catch (error) {
            // 오류 처리
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="username">UserID:</label>
                    <input
                        type="text"
                        id="username"
                        name="userID"
                        value={formData.userID}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="userEmail"
                        value={formData.userEmail}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="userPW"
                        value={formData.userPW}
                        onChange={handleChange}
                    />
                </div>
                <button type="button" onClick={handleSign}>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;
