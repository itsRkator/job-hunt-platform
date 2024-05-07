// Filters.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../features/jobSlice";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const INITIAL_FILTERS = {
  jdUid: "",
  jdLink: "",
  jobDetailsFromCompany: "",
  maxJdSalary: 0,
  minJdSalary: 0,
  salaryCurrencyCode: "",
  location: "",
  minExp: 0,
  maxExp: 0,
  jobRole: "",
  companyName: "",
  logoUrl: "",
};

const Filters = () => {
  const dispatch = useDispatch();
  const [jobFilters, setJobFilters] = useState(INITIAL_FILTERS);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setJobFilters(
      (prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }),
      () => {
        dispatch(setFilters(jobFilters));
      }
    );
  };

  // useEffect(() => {
  //   dispatch(setFilters(jobFilters));
  // }, [jobFilters, dispatch]);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setJobFilters({ ...jobFilters, [name]: value });
  //   dispatch(fetchJobs(jobFilters)); // Pass filters here
  // };

  return (
    <Grid container spacing={2} sx={{ m: 1, alignItems: "center" }}>
      <Grid item>
        <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
          <InputLabel>Roles</InputLabel>
          <Select
            label="Roles"
            name="jobRole"
            value={jobFilters.jobRole}
            onChange={handleInputChange}
          >
            <MenuItem selected value="frontend">
              Frontend
            </MenuItem>
            <MenuItem value="ios">IOS</MenuItem>
            <MenuItem value="android">Android</MenuItem>
            <MenuItem value="tech lead">Tech Lead</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
          <InputLabel>Number of Employees</InputLabel>
          <Select
            label="Number of Employees"
            name="empCount"
            onChange={handleInputChange}
            value={jobFilters.empCount}
          >
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
            <MenuItem value={500}>500</MenuItem>
            <MenuItem selected value={1000}>
              1000
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
          <InputLabel>Experience</InputLabel>
          <Select
            label="Experience"
            name="minExp"
            value={jobFilters.minExp}
            onChange={handleInputChange}
          >
            <MenuItem value={1}>1 Year</MenuItem>
            <MenuItem value={2}>2 Years</MenuItem>
            <MenuItem value={3}>3 Years</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel>Job Type</InputLabel>
          <Select
            label="Job Type"
            name="jobType"
            value={jobFilters.jobType}
            onChange={handleInputChange}
          >
            <MenuItem value="Hybrid">Hybrid</MenuItem>
            <MenuItem value="on-site">On-Site</MenuItem>
            <MenuItem value="remote">Remote</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl sx={{ m: 1, minWidth: 235 }} size="small">
          <InputLabel>Minimum Base Pay Salary</InputLabel>
          <Select
            label="Minimum Base Pay Salary"
            name="minJdSalary"
            value={jobFilters.minJdSalary}
            onChange={handleInputChange}
          >
            <MenuItem value={10}>10 LPA</MenuItem>
            <MenuItem value={20}>20 LPA</MenuItem>
            <MenuItem value={30}>30 LPA</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <TextField
          size="small"
          name="companyName"
          label="Search Company"
          variant="outlined"
          value={jobFilters.companyName}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item>
        <Button onClick={() => setJobFilters(INITIAL_FILTERS)}>
          <Close />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filters;
