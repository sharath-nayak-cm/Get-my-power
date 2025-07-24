import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import api from "./APIService";

import type { Hotel } from "../types/hotel";

type HotelState = {
  list: Hotel[];        
  loading: boolean;
  error?: string;
};

export const fetchHotels = createAsyncThunk('hotels/fetch', async () => {
  const res = await api.get<Hotel[]>('/restaurants');
  return res.data;
});

export const addHotel = createAsyncThunk('hotels/add', async (hotel: Hotel) => {
  const res = await api.post('/restaurants', hotel);
  return res.data;
});

 const initialState: HotelState = {
  list: [],              
  loading: false,
  error: undefined,
};

const hotelSlice = createSlice({
    name: "hotel",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchHotels.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error';
      })
      .addCase(addHotel.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
    }
})


export default hotelSlice.reducer