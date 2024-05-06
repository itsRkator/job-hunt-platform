import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./features/jobSlice";
import Filters from "./components/Filters";
import InfiniteScroll from "react-infinite-scroll-component";
import JobCard from "./components/JobCard";
import { CircularProgress, Grid } from "@mui/material";

const App = () => {
  const dispatch = useDispatch();
  const { items, hasMore } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const fetchMoreData = () => {
    if (hasMore) dispatch(fetchJobs());
  };
  return (
    <div>
      <Filters />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div style={{ textAlign: "center" }}>
            <CircularProgress />
          </div>
        }
        endMessage={
          <div style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </div>
        }
      >
        <Grid container spacing={2}>
          {items.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={`${job.jdUid}-${index}`}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </div>
  );
};

export default App;
