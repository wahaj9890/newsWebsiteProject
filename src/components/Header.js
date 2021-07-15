import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import green from "@material-ui/core/colors/green";
import { Link, NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { alpha } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  //search box
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: green[500],
  },
  customHeight: {
    minHeight: 200,
  },
  offset: theme.mixins.toolbar,
}));

const Header = () => {
  const [search, setSearch] = useState("");
  const classes = useStyles();
  const [example, setExample] = useState("primary");
  const isCustomColor = example === "customColor";
  const isCustomHeight = example === "customHeight";
  const searchHandler = (e) => {
    console.log(search);
  };
  return (
    <React.Fragment>
      <AppBar
        color={isCustomColor || isCustomHeight ? "" : example}
        className={`${isCustomColor && classes.customColor} ${
          isCustomHeight && classes.customHeight
        }`}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News Website
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>

          <div className="searchBtn ">
            <Link to={`/${search}`} className="headingTab">
              Search
            </Link>
          </div>

          {/*  */}
          <NavLink exact to="/" className="headingTab">
            <IconButton color="inherit">Home</IconButton>
          </NavLink>
          <NavLink to="/entertainment" className="headingTab">
            <IconButton color="inherit">Entertainment</IconButton>
          </NavLink>
          <NavLink to="/sports" className="headingTab">
            <IconButton color="inherit">Sports</IconButton>
          </NavLink>
          <NavLink to="/health" className="headingTab">
            <IconButton color="inherit">Health</IconButton>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};
export default Header;
