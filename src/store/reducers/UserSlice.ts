import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  userName: string
  repoName: string
}

const initialState: UserState = {
  userName: '',
  repoName: '',
}

export const userSlice = createSlice({
  name: 'searchUser',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<string>) {
      state.userName = action.payload
    },
    setRepName(state, action: PayloadAction<string>) {
      state.repoName = action.payload
    }
  }
})

export default userSlice.reducer;
