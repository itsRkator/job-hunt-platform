import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (_, { getState }) => {
    const { offset, limit, filters } = getState().jobs;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestBody = {
      limit,
      offset,
      ...filters,
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(requestBody),
    };

    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }

      const data = await response.json();
      const jobs = Array.isArray(data.jdList) ? data.jdList : [];
      console.log(jobs[0]);
      return jobs;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      throw error;
    }
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
      state.offset = 0;
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
