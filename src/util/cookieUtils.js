import { Cookies } from "react-cookie";


const cookies = new Cookies()


export const setCookie = (name, value, days = 1) => {
    const expires = new Date()
    expires.setUTCDate(expires.getUTCDate() + days) //보관기한
    return cookies.set(name,value,{expires:expires,path:'/'})  //제일 하위 경로로 잡아줘야 쿠키를 다쓸수있음
}


export const getCookie = (name) => {
    return cookies.get(name)
}

export const removeCookie = (name,path ='/') => {
    cookies.remove(name,{path:path}) //여기에있는 쿠키를 지워라
}