import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as itemsAPI from './itemsAPI';

const initialState = {
  items: [],
  currentItem: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
    const data = await itemsAPI.fetchItems();
    return data;
});

export const fetchItemById = createAsyncThunk('items/fetchItemById', async (id) => {
    const data = await itemsAPI.fetchItemById(id);
    return data;
});

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchItemById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentItem = action.payload;
      })
      .addCase(fetchItemById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllItems = (state) => state.items.items;
export const selectItemById = (state) => state.items.currentItem;
export const selectItemsStatus = (state) => state.items.status;

export default itemsSlice.reducer;
