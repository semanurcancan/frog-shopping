import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false
}

export const loginSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        userInfos: (state, action) => {
            state.login= action.payload.login
            //fullname ve password ve login bilgisinin değişimini tasıdı
        },
    }
})

export const selectUser = (state) => {
    return state.login
}

export const { userInfos} = loginSlice.actions


export default loginSlice.reducer;