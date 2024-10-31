import axios from "axios";
import { getCookie, setCookie } from "./cookieUtils";
import { API_SERVER_HOST } from "../api/todoApi";

const jwtAxios = axios.create()

const refreshJWT = async (accessToken, refreshToken) => {

    const host = API_SERVER_HOST

    const header = { headers: { "Authorization": `Bearer ${accessToken}` } }

    const res = await axios.get(`${host}/api/member/refresh?refreshToken=${refreshToken}`, header)

    console.log("----------------------")
    console.log(res.data)

    return res.data
}


//before request
const beforeReq = (config) => {
    console.log("before request.............")

    const memberInfo = getCookie("member")

    if (!memberInfo) {
        console.log("Member NOT FOUND")
        return Promise.reject(  //  비동기 처리에 응답은 전부 Promise 객체로 옴
            {
                response:
                {
                    data:
                        { error: "REQUIRE_LOGIN" }
                }
            }
        )
    }

    const { accessToken } = memberInfo

    // Authorization 헤더 처리 
    config.headers.Authorization = `Bearer ${accessToken}`

    return config
}

//fail request
const requestFail = (err) => {
    console.log("request error............")

    return Promise.reject(err)
}

//before return response
const beforeRes = async (res) => {
    console.log("before return response...........")


    //console.log(res)

    //'ERROR_ACCESS_TOKEN'
    const data = res.data

    if (data && data.error === 'ERROR_ACCESS_TOKEN') {  //access 토큰이 만료되면 ! access토큰과 refresh토큰을 같이보내주세요

        const memberCookieValue = getCookie("member")

        const result = await refreshJWT(memberCookieValue.accessToken, memberCookieValue.refreshToken)

        memberCookieValue.accessToken = result.accessToken
        memberCookieValue.refreshToken = result.refreshToken

        setCookie("member", JSON.stringify(memberCookieValue), 1)

        //원래의 호출 
        const originalRequest = res.config

        originalRequest.headers.Authorization = `Bearer ${result.accessToken}`

        return await axios(originalRequest)

    }

    return res
}


//fail response  백엔드에서 서버오류라고 상태코드를 보내주진 않음 오류 메시지는 보내줌
const responseFail = (err) => {
    console.log("response fail error.............")
    return Promise.reject(err);
}

jwtAxios.interceptors.request.use(beforeReq, requestFail)

jwtAxios.interceptors.response.use(beforeRes, responseFail)

export default jwtAxios
