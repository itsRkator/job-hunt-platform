// src/features/jobSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (_, { getState }) => {
    const { offset, limit, filters } = getState().jobs;
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ limit, offset, ...filters }),
      }
    );
    const data = await response.json();
    // Ensure data.jdList is always an array
    const jobs = Array.isArray(data.jdList) ? data.jdList : [];
    return jobs;
  }
);

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    items: [],
    offset: 0,
    limit: 10,
    hasMore: true,
    status: "idle",
    error: null,
    filters: {},
  },
  reducers: {
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
      state.items = [];
      state.offset = 0; // Reset pagination on filter change
    },
    clearFilters(state) {
      state.filters = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        // Concatenate the new jobs with the existing items
        state.items = state.items.concat(action.payload);
        state.offset += action.payload.length;
        state.hasMore = action.payload.length === state.limit;
        state.status = "succeeded";
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.hasMore = false;
      });
  },
});

export const { setFilters, clearFilters } = jobSlice.actions;
export default jobSlice.reducer;
