import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookings: [],
  status: 'idle',
  error: null,
};

export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add async thunks for creating and fetching bookings here
  },
});

export default bookingsSlice.reducer;
