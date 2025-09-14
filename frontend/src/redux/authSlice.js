import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        user: null,
        token: null,   // ✅ add token state
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setAuthUser: (state, action) => {
            // ✅ expecting payload like: { user: {...}, token: "xxx" }
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.loading = false;
        }
    }
});

export const { setLoading, setAuthUser, logout } = authSlice.actions;

export default authSlice.reducer;
