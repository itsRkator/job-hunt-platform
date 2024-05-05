import React from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../features/jobSlice";
import { Grid, TextField } from "@mui/material";

const Filters = () => {
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    dispatch(setFilters({ [event.target.name]: event.target.value || '' }));
  };

  return (
    <Grid container spacing={2} style={{ padding: 20 }}>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          fullWidth
          name="companyName"
          label="Company Name"
          variant="outlined"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          fullWidth
          name="location"
          label="Location"
          variant="outlined"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          fullWidth
          name="role"
          label="Role"
          variant="outlined"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          fullWidth
          name="techStack"
          label="Tech Stack"
          variant="outlined"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          fullWidth
          name="minExperience"
          label="Minimum Experience"
          type="number"
          variant="outlined"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          fullWidth
          name="minBasePay"
          label="Minimum Base Pay"
          type="number"
          variant="outlined"
          onChange={handleInputChange}
        />
      </Grid>
    </Grid>
  );
};

export default Filters;
