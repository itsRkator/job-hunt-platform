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
          <CircularProgress style={{ display: "block", margin: "20px auto" }} />
        }
        endMessage={
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <b>Yay! You have seen it all</b>
          </div>
        }
        style={{ overflow: "hidden" }} // Set overflow to 'hidden' to prevent double scrollbar
      >
        <div style={{ width: "96.25%" }}>
          <Grid container spacing={2} sx={{ m: 2 }}>
            {items.map((job, index) => (
              <Grid item xs={12} sm={8} md={4} key={`${job.jdUid}-${index}`}>
                <JobCard job={job} />
              </Grid>
            ))}
          </Grid>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default App;
