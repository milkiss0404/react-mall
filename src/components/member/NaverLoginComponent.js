import React from 'react'
import { getKakaoLoginLink } from '../../api/kakaoAPI'
import { Link } from 'react-router-dom'
import naverImage from '../../image/login/naverIcon.png';

const onNaverLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/naver"
}


export default function NaverLoginComponent(props) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center w-full">
         
                    <button onClick={onNaverLogin}>
                        <img src={naverImage} alt="Naver Login"   />
                 
                        </button>
            </div>
        </div>
    )
}
