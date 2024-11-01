import React from "react";
import { Whatsong_1, Mic } from '../../asset/img/index';
import { Link, useNavigate } from "react-router-dom";

const UserPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('login');
        navigate('/');
    };

    return (
        <div className="Userpage1">
            <span onClick={handleLogout} style={{ cursor: "pointer", color: "white", textDecoration: "underline" }}>로그아웃</span>
            <img className='Whatsong' alt='Whatsong_1' src={Whatsong_1} />
            <div className="mic">
                <Link to="/Allsong">
                    <img className="Mic" alt='Mic' src={Mic} />
                </Link>
            </div>
        </div>
    )
}

export default UserPage;