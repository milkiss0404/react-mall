import axios from "axios"
import { API_SERVER_HOST } from "./todoApi"




const rest_api_key = 'edba67a462801cf41ac2447d06e382f2'
const requestUri = 'http://localhost:8080/oauth2/authorization/kakao'


const access_token_url = 'https://kauth.kakao.com/oauth/token'

export const getKakaoLoginLink = () => {

    const kakaoURL = `${requestUri}`

    return kakaoURL
}



export const getAccess = async (authCode) => {
    const header = { headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' } }

    const params = {
        grant_type: 'authorization_code',
        client_id: rest_api_key,
        code:authCode
    }

    const res = await axios.post(access_token_url, params, header)
    
    const accessToken = res.data.access_token

    return accessToken
}


export const getMemberWithAccessToken = async (accessToken) => {
    const res = await axios.get(`${API_SERVER_HOST}/api/member/kakao?accessToken=${accessToken}`)
    return res.data
}