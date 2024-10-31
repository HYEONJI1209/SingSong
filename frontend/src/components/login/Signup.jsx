import React, { useState } from "react";
import { SignupService } from "../../services/login/SignupService";
import { useNavigate } from "react-router-dom";

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

            if (response.data.success) {
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
