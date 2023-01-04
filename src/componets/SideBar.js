import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Button,
  Collapse,
  Grid,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import GroupsIcon from "@mui/icons-material/Groups";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  folder: {
    color: "#F9A825",
  },
}));

const SideBar = () => {
  const classes = useStyles();
  const list = ["projcet 1", "project 2"];
  const [open, setOpen] = useState(-1);

  const listItem = [
    {
      lable: "Team1",
      icon: <GroupsIcon style={{ color: "blueviolet" }} />,
    },
    {
      lable: "Team2",
      icon: <GroupsIcon style={{ color: "blueviolet" }} />,
    },
    {
      lable: "Team2",
      icon: <GroupsIcon style={{ color: "blueviolet" }} />,
    },
    {
      lable: "Team4",
      icon: <GroupsIcon style={{ color: "blueviolet" }} />,
    },
  ];

  return (
    <div
      style={{
        margin: "0",
        padding: "10px",
        width: "200px",
        height: "100%",
        backgroundColor: "#494B4C",
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        borderRadius: "6px",
      }}
    >
      <Drawer
        anchor="left"
        open={true}
        PaperProps={{
          sx: {
            backgroundColor: "#3d1369",
            color: "white",
            width: "250px",
          },
        }}
        variant="permanent"
      >
        <Grid container justifyContent="center">
          <Grid item>
            <Typography style={{ fontWeight: 900, fontSize: "30px" }}>
              Compny Logo
            </Typography>
          </Grid>
        </Grid>
        <div
          style={{
            margin: "50px 10px 10px 15px",
            padding: "10px",
            width: "200px",
            height: "500px",
            backgroundColor: "#494B4C",
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
            borderRadius: "6px",
          }}
        >
          {list.map((item, index) => {
            return (
              <List component="nav" aria-labelledby="nested-list-subheader" key={index}>
                <ListItem onClick={() => setOpen(open === index ? -1 : index)}>
                  <ListItemIcon sx={{ minWidth: "33px" }}>
                    <FolderCopyIcon className={classes.folder} />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                  <Box style={{ marginLeft: "1px" }}>
                    {open ? <ExpandLess /> : <ExpandMore />}
                    <MoreVertIcon />
                  </Box>
                </ListItem>
                <Collapse in={open === index} timeout="auto" unmountOnExit>
                  <List
                    component="div"
                    disablePadding
                    style={{ marginLeft: "25px" }}
                  >
                    {listItem.map((item, index) => {
                      return (
                        <ListItem key={index}>
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <ListItemText primary={item.lable} />
                        </ListItem>
                      );
                    })}
                    <Button
                      variant="outlined"
                      style={{
                        borderColor: "white",
                        color: "white",
                        height: "30px",
                      }}
                    >
                      <GroupsIcon style={{ color: "blueviolet" }} /> +Add Team
                    </Button>
                  </List>
                </Collapse>
              </List>
            );
          })}
          <div style={{ marginTop: open === 1 ? "100px" : "0" }}>
            <Button
              variant="outlined"
              style={{ width: "190px", backgroundColor: "#090B1F" }}
            >
              <FolderCopyIcon style={{ color: "#F9A825" }} />{" "}
              <Typography>+add projcet</Typography>
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SideBar;
