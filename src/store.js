import { configureStore } from "@reduxjs/toolkit";
import  loginSlice  from "./slices/LoginSlice";
// store금고 ,창고 처럼 상태를 저장하는거임
export default configureStore({
//reducer 라고 금고 나누는거임
    reducer: {
     "loginSlice":loginSlice
    }
}) 