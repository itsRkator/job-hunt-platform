import {
  Bolt,
  Check,
  HourglassTopSharp,
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
    <Card sx={{ m: 0.5, boxShadow: 5, maxWidth: 1000 }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Chip
              icon={<HourglassTopSharp style={{ color: "#764f3a" }} />}
              label={`Posted ${Math.floor(Math.random() * 30)} days ago`}
              size="small"
              variant="outlined"
              sx={{
                mt: 1,
                mb: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: 150,
              }}
            />
          </Grid>
          <Grid item>
            <Avatar
              src={job.logoUrl}
              alt={`${job.companyName} logo`}
              sx={{ width: 56, height: 56 }}
              variant="square"
            />
          </Grid>
          <Grid item xs={8}>
            <Typography
              color="text.secondary"
              fontWeight="bold"
            >
              {job.companyName}
            </Typography>
            <Typography variant="subtitle1" component="div">
              {job.jobRole}
            </Typography>
            <Typography variant="body1" component="div">
              {job.location}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle2"
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.secondary",
            }}
          >
            Estimated Salary: {job.salaryCurrencyCode}{" "}
            {!isNaN(job.minJdSalary) && job.minJdSalary}{" "}
            {job.minJdSalary && job.maxJdSalary ? "-" : ""}{" "}
            {!isNaN(job.maxJdSalary) && job.maxJdSalary} LPA{" "}
            <Check
              sx={{
                background: "#18ba01",
                color: "white",
                height: "15px",
                width: "15px",
                boxShadow: 1,
                borderRadius: "3px",
                m: 0.5,
              }}
            />
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography xs={12} variant="subtitle1" component="div">
              About Company:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" component="div" fontWeight="bold">
              About us
            </Typography>
            <Typography
              variant="body2"
              component="div"
              sx={{ textAlign: "justify" }}
            >
              {job.jobDetailsFromCompany}
            </Typography>
            <Typography
              component="a"
              href={job.jdLink}
              target="blank"
              sx={{
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              View Job
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ mt: 1, fontWeight: "medium" }}>
            <Grid item xs={12} color="text.secondary">
              Minimum Experience:
            </Grid>
            <Grid item xs={12}>
              {job.minExp || 0} {` Year${job.minExp > 1 ? "s" : ""}`}
            </Grid>
          </Typography>
        </Grid>
        <Grid container spacing={1} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              size="small"
              style={{
                background: "#54f0c3",
                color: "black",
                textTransform: "none",
              }}
            >
              <Bolt sx={{ m: 0.75, color: "#fecc44" }} />
              Easy Apply
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              style={{ background: "#4943da" }}
              variant="contained"
              fullWidth
              size="small"
            >
              <Avatar
                src={`https://randomuser.me/api/portraits/men/${Math.floor(
                  Math.random() * 100
                )}.jpg`}
                alt={`User Avatar`}
                sx={{
                  width: 25,
                  height: 25,
                  m: 0.5,
                  display: "flex",
                  alignItems: "center",
                  filter: "blur(1px)",
                }}
              />
              <Avatar
                src={`https://randomuser.me/api/portraits/men/${Math.floor(
                  Math.random() * 100
                )}.jpg`}
                alt={`User Avatar`}
                sx={{
                  width: 25,
                  height: 25,
                  m: 0.5,
                  display: "flex",
                  alignItems: "center",
                  filter: "blur(1px)",
                }}
              />
              <Typography
                variant="contained"
                sx={{ p: 1, textTransform: "none" }}
              >
                Unlock referral asks
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default JobCard;
