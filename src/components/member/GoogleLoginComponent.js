import React from 'react'
import GoogleImage from '../../image/login/googleIcon.png'


const onGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google"
}


export default function GoogleLoginComponent(props) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center w-full">
               
                <button onClick={onGoogleLogin}>
                    <img src={GoogleImage}></img>
                    </button>
                </div>
        </div>
    )
}
