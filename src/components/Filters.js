// Filters.js
import React from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../features/jobSlice";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const Filters = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(setFilters({ [event.target.name]: event.target.value || "" }));
  };

  return (
    <Grid container spacing={1} style={{ padding: 20 }}>
      <Grid item xs={12}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
            <InputLabel>Roles</InputLabel>
            <Select
              label="Roles"
              name="jobRole"
              onChange={handleInputChange}
              value={""}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="frontend">Frontend</MenuItem>
              <MenuItem value="ios">IOS</MenuItem>
              <MenuItem value="android">Android</MenuItem>
              <MenuItem value="tech lead">Tech Lead</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
            <InputLabel>Number of Employees</InputLabel>
            <Select
              label="Number of Employees"
              name="empCount"
              onChange={handleInputChange}
              value={""}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
              <MenuItem value={500}>500</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
            <InputLabel>Experience</InputLabel>
            <Select
              label="Experience"
              name="experience"
              onChange={handleInputChange}
              value={""}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value={1}>1 Year</MenuItem>
              <MenuItem value={2}>2 Years</MenuItem>
              <MenuItem value={3}>3 Years</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel>Job Type</InputLabel>
            <Select
              label="Job Type"
              name="jobType"
              onChange={handleInputChange}
              value={""}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="Hybrid">Hybrid</MenuItem>
              <MenuItem value="on-site">On-Site</MenuItem>
              <MenuItem value="remote">Remote</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 235 }} size="small">
            <InputLabel>Minimum Base Pay Salary</InputLabel>
            <Select
              label="Minimum Base Pay Salary"
              name="minJdSalary"
              onChange={handleInputChange}
              value={""}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value={10}>10 LPA</MenuItem>
              <MenuItem value={20}>20 LPA</MenuItem>
              <MenuItem value={30}>30 LPA</MenuItem>
              <MenuItem value={50}>50 LPA</MenuItem>
            </Select>
          </FormControl>
          <TextField
            size="small"
            name="companyName"
            label="Search Company"
            variant="outlined"
            onChange={handleInputChange}
            value=""
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Filters;
