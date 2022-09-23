import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//action
export const fetchUser = createAsyncThunk('fetchUser', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();

})

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload;
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            console.log('Error', action.payload)
            state.isError = true;
        });

    }
});



export default userSlice.reducer;