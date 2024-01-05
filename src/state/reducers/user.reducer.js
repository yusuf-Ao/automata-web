import { createSlice } from "@reduxjs/toolkit";
import { checkEmailAvailability } from "../actions/user.actions";



const userSlice = createSlice({
    name: 'user',
    initialState: {
        userLoading: false,
    },

    extraReducers: (builder) => {
        builder.addCase(checkEmailAvailability.pending,
        (state, action) => {
            state.userLoading = true
        })
        builder.addCase(checkEmailAvailability.fulfilled,
        (state, action) => {
            state.userLoading = false
        })
        builder.addCase(checkEmailAvailability.rejected,
        (state, action) => {
            state.userLoading = false
        })
    }
})

export default userSlice.reducer;