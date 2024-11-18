import React, { useState } from 'react';
import useCustomLogin from '../../hooks/useCustomLogin';
import KakaoLoginCompnent from './KakaoLoginCompnent';
import NaverLoginComponent from './NaverLoginComponent';
import GoogleLoginComponent from './GoogleLoginComponent';

const initState = {
    email: '',
    pw: ''
};

export default function LoginComponent(props) {
    const [loginParam, setLoginParam] = useState({ ...initState });
    const { doLogin, moveToPath } = useCustomLogin();

    const handleChange = (e) => {
        loginParam[e.target.name] = e.target.value;
        setLoginParam({ ...loginParam });
    };

    const handleClickLogin = () => {
        doLogin(loginParam).then((data) => {
            if (data.error) {
                alert('로그인 정보가 일치하지 않습니다.');
            } else {
                moveToPath('/');
            }
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-10 space-y-8">
                <h2 className="text-4xl font-bold text-center text-blue-600">Login</h2>
                <div className="space-y-6">
                    <div className="flex items-center">
                        <label className="w-1/3 text-right font-semibold pr-4 text-lg">Email</label>
                        <input
                            className="w-2/3 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
                            name="email"
                            type="text"
                            value={loginParam.email}
                            onChange={handleChange}
                            placeholder="이메일을 입력하세요"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-right font-semibold pr-4 text-lg">Password</label>
                        <input
                            className="w-2/3 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
                            name="pw"
                            type="password"
                            value={loginParam.pw}
                            onChange={handleChange}
                            placeholder="비밀번호를 입력하세요"
                        />
                    </div>
                </div>
                <button
                    className="w-full py-4 bg-blue-500 text-white font-semibold rounded-lg text-xl hover:bg-blue-600 transition duration-200"
                    onClick={handleClickLogin}
                >
                    LOGIN
                </button>
                <div className="text-center text-gray-500">또는</div>
                <div className="flex justify-center space-x-6 mt-6">
                    <KakaoLoginCompnent />
                    <NaverLoginComponent />
                    <GoogleLoginComponent />
                </div>
            </div>
        </div>
    );
}
