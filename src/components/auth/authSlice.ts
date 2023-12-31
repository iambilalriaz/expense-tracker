import { RootState } from '@app/store';
import { User } from '@data-types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signInWithGoogle } from '@services/firebase';
import { getUserId, inserUser } from '@services/queries';
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
    const userId = additionalUserInfo?.isNewUser
      ? crypto.randomUUID()
      : await getUserId(user?.email as string);
    const {
      displayName: name,
      email,
      photoURL,
    } = user as {
      displayName: string;
      email: string;
      photoURL: string;
    };
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
        JSON.parse(localStorage.getItem('appUser') as string) || (null as User);
    },
  },
  extraReducers(builder) {
    builder.addCase(userLogin.pending, (state) => {
      state.isLoggingIn = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoggingIn = false;
      state.appUser = action.payload as User;
      localStorage.setItem('appUser', JSON.stringify(action.payload));
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.isLoggingIn = false;
      state.appUser = null;
    });
  },
});

export const { userLogout, getLoginState, setIsLoggingIn } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
