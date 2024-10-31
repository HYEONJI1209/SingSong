import React from "react";
import { Whatsong_1, Mic } from '../../asset/img/index';
import { Link } from "react-router-dom";

const UserPage = () => {
    return (
        <div className="Userpage1">
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