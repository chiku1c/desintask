import { ExpandMore, HelpOutline } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import PieChartIcon from "@mui/icons-material/PieChart";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ProfileChanger from "../componets/ProfileChanger";
import UserInputFiled from "../componets/UserInputFiled";

const listItem = [
  {
    icon: <AccountCircleIcon style={{ color: "white" }} />,
  },
  {
    icon: <ContentPasteIcon style={{ color: "white" }} />,
  },
  {
    icon: <PieChartIcon style={{ color: "white" }} />,
  },
  {
    icon: <ListAltIcon style={{ color: "white" }} />,
  },
];

const UserEdit = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Box style={{ minWidth: "50px", paddingRight: "120px" }}>
        <Grid
          container
          justifyContent="flex-end"
          alignItems="start"
          spacing={6}
        >
          <Grid item>
            <Button
              style={{ height: "30px" }}
              startIcon={<HelpOutline style={{ color: "#9ea7b5" }} />}
            >
              <Typography
                style={{ textTransform: "capitalize", color: "black" }}
              >
                Help
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={{ height: "30px" }}
              endIcon={<ExpandMore style={{color:"#131314"}} />}
              startIcon={
                <Avatar
                  sx={{
                    backgroundColor: "orange",
                    height: "30px",
                    borderRadius: "6px",
                  }}
                  variant="square"
                >
                  <img
                    src={file}
                    alt="user"
                    style={{ height: 50, width: 50 }}
                  />
                </Avatar>
              }
            >
              <Typography
                style={{ textTransform: "capitalize", color: "#131314" }}
              >
                user name
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        style={{
          height: "100vh",
          width: "100%",
          position: "fixed",
          top: 55,
          left: 250,
          backgroundColor: "#cfe6df",
          // display: "inline-flex",
        }}
      >
        <Box
          style={{
            height: "100vh",
            width: "50px",
            position: "fixed",
            top: 55,
            left: 250,
            backgroundColor: "#3d1369",
          }}
        >
          {listItem.map((item, index) => {
            return (
              <ListItem key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.lable} />
              </ListItem>
            );
          })}
        </Box>
        <Box sx={{ marginLeft: "80px", display: "flex" }}>
          <Grid container>
            <Grid item xs={6}>
              <UserInputFiled
                showPassword={showPassword}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
              />
            </Grid>
            <Grid item xs={6}>
              <ProfileChanger file={file} handleChange={handleChange} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default UserEdit;
