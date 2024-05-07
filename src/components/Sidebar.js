import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/jobSlice";
import Filters from "./Filters";
import InfiniteScroll from "react-infinite-scroll-component";
import JobCard from "./JobCard";
import { CircularProgress, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  CurrencyRupeeOutlined,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  PersonOutlineOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, Button, Icon } from "@mui/material";

const initialDrawerWidth = 240;

const openedMixin = (theme) => ({
  width: initialDrawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 35px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  margin: "0.75rem 0 0 0.5rem",
  height: 30,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  zIndex: theme.zIndex.drawer + 1,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  height: "60px",
  //   zIndex: theme.zIndex.drawer,
  borderRadius: 8,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: initialDrawerWidth,
    width: `calc(100% - ${initialDrawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  paddingTop: 2,
  width: !open ? 100 : initialDrawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const MiniDrawer = () => {
  const dispatch = useDispatch();

  const [drawerWidth, setDrawerWidth] = useState(initialDrawerWidth);
  const [open, setOpen] = useState(false);
  const { items, hasMore } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const fetchMoreData = () => {
    if (hasMore) dispatch(fetchJobs());
  };

  const handleDrawer = () => {
    setOpen(!open);
    setDrawerWidth(open ? 65 : initialDrawerWidth); // Update the drawer width when opening/closing
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        edge="start"
        sx={{
          color: "#000",
          width: open ? `calc(100% - ${drawerWidth}px)` : `calc(100% - 100px)`,
          background: "#fff",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button color="inherit">
            <Avatar sx={{ background: "#54efc4" }}>
              <Icon>
                <svg
                  id="woot-widget-bubble-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 240 240"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M240.808 240.808H122.123C56.6994 240.808 3.45695 187.562 3.45695 122.122C3.45695 56.7031 56.6994 3.45697 122.124 3.45697C187.566 3.45697 240.808 56.7031 240.808 122.122V240.808Z"
                    fill="#FFFFFF"
                  ></path>
                </svg>
              </Icon>
            </Avatar>
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton>
            {!open ? (
              <Avatar src="https://jobs.weekday.works/_next/static/media/logo-small.08826abd.png" />
            ) : (
              <img
                alt="Full logo"
                width={130}
                src="https://jobs.weekday.works/_next/static/media/logo.268caeb2.png"
              />
            )}
          </IconButton>
          <Typography
            component="Button"
            onClick={handleDrawer}
            color="inherit"
            aria-label="open drawer"
            sx={{
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
              height: 30,
              width: 30,
              position: "fixed",
              left: !open ? 80 : drawerWidth - 40,
              top: !open ? 27 : 35,
              borderRadius: "10px",
              background: "rgb(255, 255, 255)",
              border: "2px solid rgb(233, 235, 235)",
              zIndex: 9999,
            }}
          >
            {!open ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </Typography>
        </DrawerHeader>
        <Divider />
        <Typography
          component="span"
          variant="body1"
          sx={{
            fontSize: 10,
            textAlign: "center",
            pt: 2,
            pb: 2,
            color: "rgb(117, 117, 117)",
          }}
        >
          {open ? "LOOKING FOR A JOB" : "GET JOBS"}
        </Typography>
        <List>
          {["My applied jobs", "Search jobs", "Search Salary"].map(
            (text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  display: open ? "block" : "flex",
                  flexDirection: "column",
                  alignContent: "center",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index === 0 ? (
                      <PersonOutlineOutlined />
                    ) : index === 1 ? (
                      <SearchOutlined />
                    ) : (
                      <CurrencyRupeeOutlined />
                    )}
                  </ListItemIcon>
                  {open && (
                    <ListItemText
                      primary={text}
                      sx={{
                        opacity: open ? 1 : 0,
                        color: "rgb(117, 117, 117)",
                        fontWeight: 500,
                        fontSize: 14,
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: 10,
          }}
        >
          <Avatar />
        </div>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography component="div">
          <Filters />
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={
              <CircularProgress
                style={{ display: "block", margin: "20px auto" }}
              />
            }
            endMessage={
              <div style={{ textAlign: "center", margin: "20px 0" }}>
                <b>Yay! You have seen it all</b>
              </div>
            }
            style={{ overflow: "hidden" }} // Set overflow to 'hidden' to prevent double scrollbar
          >
            <div style={{ width: "96%" }}>
              <Grid container spacing={2} sx={{ m: 1 }}>
                {items.map((job, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    md={4}
                    key={`${job.jdUid}-${index}`}
                  >
                    <JobCard job={job} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </InfiniteScroll>
        </Typography>
      </Box>
    </Box>
  );
};

export default MiniDrawer;
