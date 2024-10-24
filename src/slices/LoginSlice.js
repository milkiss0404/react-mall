import { createSlice } from "@reduxjs/toolkit";

const initState = {

}

const loginSlice = createSlice({
    name: 'loginSlice',
    reducers: {
        login: () => {
            console.log("login--------------------------------")
        },
        logout: () => {
            
        }
    }
    
})