import { RootState } from '@app/store';
import { User } from '@data-types';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { inserUser, signInWithGoogle } from '@services/firebase';

type InitialState = {
  appUser: User | null;
  isLoggingIn: boolean;
};
const initialState: InitialState = {
  appUser: null,
  isLoggingIn: false,
};

export const userLogin = createAsyncThunk('auth/login', async () => {
  try {
    const { user, additionalUserInfo } = await signInWithGoogle();
    const {
      displayName: name,
      email,
      photoURL,
    } = user as {
      displayName: string;
      email: string;
      photoURL: string;
    };
    const userId = crypto.randomUUID();
    await inserUser(userId, name, email, photoURL);
    const appUser = {
      userId,
      name,
      email,
      photoURL,
      isNewUser: additionalUserInfo?.isNewUser,
    };
    return appUser;
  } catch {
    return null;
  }
});
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggingIn: (state, action) => {
      state.isLoggingIn = action.payload;
    },
    userLogout: (state) => {
      localStorage.clear();
      state.appUser = null;
    },
    getLoginState: (state) => {
      state.appUser =
        JSON.parse(localStorage.getItem('appUser')) || (null as User);
    },
  },
  extraReducers(builder) {
    builder.addCase(
      userLogin.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.appUser = action.payload;
        localStorage.setItem('appUser', JSON.stringify(action.payload));
      }
    );
    builder.addCase(userLogin.rejected, (state) => {
      state.appUser = null;
    });
  },
});

export const { userLogout, getLoginState, setIsLoggingIn } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
