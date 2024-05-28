import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInfo {
  id: string;
  name: string;
  email: string;
  gender: string;
}

interface UserState {
  token: string | null;
  userInfo: UserInfo | null;
}

const initialState: UserState = {
  token: null,
  userInfo: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
    },
    logout(state) {
      state.token = null;
      state.userInfo = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
