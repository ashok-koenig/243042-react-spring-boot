import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        return res.data;
    }
)

const userSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state)=> {
            state.loading = true;
            state.error = null
        }).addCase(fetchUsers.fulfilled, (state, action)=> {
            state.loading = false;
            state.data = action.payload
        }).addCase(fetchUsers.rejected, (state)=> {
            state.loading = false
            state.error = "Failed to load users"
        })
    }
})

export default userSlice.reducer