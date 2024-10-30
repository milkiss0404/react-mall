import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberAPI";
import { getCookie, removeCookie, setCookie} from "../util/cookieUtils";

const initState = {
    email:''
}

const loadMemberCookie = () => {
    const memberInfo = getCookie('member')

    return memberInfo
}


export const loginPostAsync = createAsyncThunk('loginPostAsync',(param)=>loginPost(param))

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState :loadMemberCookie() || initState,
    reducers: {
        login: (state, action) => {
            console.log("login.........", action)
            console.log(action.payload)
            return {email:action.payload.email}

        },
        logout: () => {

            removeCookie('member')

            return {...initState}
        }
    },
    extraReducers: (builder) => {  //createAsync 는 extraReducers에등록
        builder.addCase(loginPostAsync.fulfilled, (state, action) => {
            console.log("fulfilled") // 비동기 작업이 성공적으로 완료된 경우
            
            const payload = action.payload

            if (!payload.error) {
                setCookie("member",JSON.stringify(payload),1) //로그인을 하면 메모리상에도 보관을하고 쿠키에도 보관을하고
            }


            return payload

        })
        builder.addCase(loginPostAsync.pending, (state, action) => {
            console.log("pending") // 비동기 작업이 시작되었고 아직 완료되지 않은 경우
        })
        builder.addCase(loginPostAsync.rejected, (state, action) => {
            console.log("rejected") // 비동기 작업이 실패한 경우
        })

    }
    
})


export const { login, logout } = loginSlice.actions

export default loginSlice.reducer