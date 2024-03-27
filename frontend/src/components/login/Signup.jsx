import React, { useState } from "react";
import { SignupService } from "../../services/login/SignupService"; 

const Signup = () => {
    const [formData, setFormData] = useState({
        userID: '',
        userPW: '',
        userEmail: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSign = async () => {
        try {
            const response = await SignupService(formData.userID, formData.userEmail, formData.userPW);
            console.log(response.data);
        } catch (error) {
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
