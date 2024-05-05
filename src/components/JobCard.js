import {
  BusinessCenterOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const JobCard = ({ job }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar
              src={job.logoUrl}
              alt={`${job.companyName} logo`}
              sx={{ width: 56, height: 56 }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="subtitle1" component="div" fontWeight="bold">
              {job.jobRole}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {job.companyName}
            </Typography>
            <Chip
              icon={<LocationOnOutlined />}
              label={job.location}
              size="small"
              variant="outlined"
              sx={{ mt: 1, mr: 1 }}
            />
            <Chip
              icon={<BusinessCenterOutlined />}
              label={`${job.minExp}-${job.maxExp} yrs`}
              size="small"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 2 }}>
          {job.jobDetailsFromCompany.substring(0, 100)}...{" "}
          {/* Limiting text to emulate a brief description */}
        </Typography>
        <Typography sx={{ mt: 1, fontWeight: "medium" }}>
          Estimated Salary: ₹{job.minJdSalary} - ₹{job.maxJdSalary} LPA
        </Typography>
        <Grid container spacing={1} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Button variant="outlined" fullWidth size="small">
              View job
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" fullWidth size="small" color="primary">
              Easy Apply
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default JobCard;
