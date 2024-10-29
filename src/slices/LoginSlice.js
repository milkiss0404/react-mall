import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberAPI";

const initState = {
    email:''
}


export const loginPostAsync = createAsyncThunk('loginPostAsync',(param)=>loginPost(param))

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState :initState,
    reducers: {
        login: (state, action) => {
            console.log("login.........", action)
            console.log(action.payload)
            return {email:action.payload.email}

        },
        logout: () => {
            return {...initState}
        }
    },
    extraReducers: (builder) => {  //createAsync 는 extraReducers에등록
        builder.addCase(loginPostAsync.fulfilled, (state, action) => {
            console.log("fulfilled") // 비동기 작업이 성공적으로 완료된 경우
            
            console.log(action.payload)
            console.log(action.state)
            const payload = action.payload

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