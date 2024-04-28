import React from "react";
import { Whatsong_1, Mic } from '../../asset/img/index';

const UserPage = () => {
    return (
        <div className="Userpage1">
           <img className='Whatsong' alt='Whatsong_1' src={Whatsong_1} />
            <div className="mic">   
                <img className="Mic" alt='Mic' src={Mic} />
                </div>
        </div>
    )
}

export default UserPage;