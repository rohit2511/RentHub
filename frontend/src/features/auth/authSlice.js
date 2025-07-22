import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import * as authAPI from './authAPI';
import { setAuthToken } from '../../lib/axios';

const token = localStorage.getItem('token');
const initialState = {
  user: null,
  token: token || null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

if (token) {
    setAuthToken(token);
    try {
        const decoded = jwtDecode(token);
        // You might want to fetch user profile here instead of just decoding
        initialState.user = { email: decoded.sub };
    } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem('token');
        initialState.token = null;
    }
}

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
    try {
        const data = await authAPI.loginUser(credentials);
        localStorage.setItem('token', data.access_token);
        setAuthToken(data.access_token);
        const decoded = jwtDecode(data.access_token);
        // After login, you could fetch the full user profile
        return { token: data.access_token, user: { email: decoded.sub } };
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const register = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
    try {
        const user = await authAPI.registerUser(userData);
        return user;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      setAuthToken(null);
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.detail || 'Login Failed';
      })
      .addCase(register.fulfilled, (state) => {
        state.status = 'succeeded'; // Or redirect to login
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.detail || 'Registration Failed';
      });
  },
});

export const { logout } = authSlice.actions;

export const selectIsAuthenticated = (state) => !!state.auth.token;
export const selectUser = (state) => state.auth.user;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;
