import { createAsyncThunk } from "@reduxjs/toolkit";
import { emailAvailability } from "../routes/user.routes";


export const checkEmailAvailability = createAsyncThunk(
    'auth/checkEmailAvailability',
    async ({ email }, {
        rejectWithValue 
    }) => {
        try {
            const { data } = await emailAvailability(email)
            console.log(data);
        } catch (err) {
            return rejectWithValue(null)
        }
    }
)