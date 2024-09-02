import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  id: string;
  name: string;
  email: string;
  // add other user fields here if needed
};

interface AuthState {
  accessToken: string;
  refreshToken: string;
  user: User | null;  // Update the type here
}

const initialState: AuthState = {
  accessToken: '',
  refreshToken: '',
  user: null,  // Initialize as null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<{ accessToken: string; refreshToken: string; user: User }>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.accessToken = '';
      state.refreshToken = '';
      state.user = null;
    },
    userRegistration: (state, action: PayloadAction<{ token: string }>) => {
      // Handle user registration
    },
  },
});

export const { userLoggedIn, userLoggedOut, userRegistration } = authSlice.actions;

export default authSlice.reducer;
