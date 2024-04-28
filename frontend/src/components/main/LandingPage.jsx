import React from "react";
import { Whatsong} from '../../asset/img/index';
const LandingPage = () => {
    return (
        <div className="Log">
            <div className="MainLog">
                <div className="Sing">
                <img className='Whatsong' alt='Whatsong' src={Whatsong}/>
                </div>
                <div className="IDPS">
                    <div className="ID">
                        <div className="inputTitle">
                            아이디
                        </div>
                        <div className="inputWrap">
                            <input className="text" type="text" />
                        </div>
                    </div>
                    <div className="ID">
                        <div className="inputTitle">
                            비밀번호
                        </div>
                        <div className="inputWrap">
                        <input className="text" type="text" />
                        </div>
                    </div>
                    <div className="botlog">
                        <div className="log">
                            로그인
                        </div>
                        <div className="respass">
                            <span>회원가입</span>&nbsp;/&nbsp;<span>아이디 찾기</span>&nbsp;/&nbsp;<span>비밀번호 찾기</span>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default LandingPage;