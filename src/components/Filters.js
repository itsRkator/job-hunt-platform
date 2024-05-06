import React from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../features/jobSlice";
import { Grid, TextField } from "@mui/material";

const Filters = () => {
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    dispatch(setFilters({ [event.target.name]: event.target.value || "" }));
  };

  return (
    <Grid container spacing={1} style={{ padding: 5 }}>
      <Grid item xs={4} sm={2} md={1}>
        <TextField
          size="small"
          name="companyName"
          label="Company Name"
          variant="standard"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={4} sm={2} md={1}>
        <TextField
          size="small"
          name="location"
          label="Location"
          variant="standard"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={4} sm={2} md={1}>
        <TextField
          size="small"
          name="role"
          label="Role"
          variant="standard"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={4} sm={2} md={1}>
        <TextField
          size="small"
          name="techStack"
          label="Tech Stack"
          variant="standard"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={4} sm={2} md={1}>
        <TextField
          size="small"
          name="minExperience"
          label="Minimum Experience"
          type="number"
          variant="standard"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={4} sm={2} md={1}>
        <TextField
          size="small"
          name="minBasePay"
          label="Minimum Base Pay"
          type="number"
          variant="standard"
          onChange={handleInputChange}
        />
      </Grid>
    </Grid>
  );
};

export default Filters;
