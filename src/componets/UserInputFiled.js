import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

export default function UserInputFiled(props) {
  const { showPassword, handleClickShowPassword, handleMouseDownPassword } =
    props;
  console.log(showPassword);
  return (
    <div>
      <Box sx={{ width: "100%", marginTop: "30px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography style={{ fontSize: "20px", fontWeight: 900 }}>
              Edit Profile
            </Typography>
          </Grid>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={6}>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">First Name</InputLabel>
                <Input id="first-name" />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Last Name</InputLabel>
                <Input id="Last-name" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Email</InputLabel>
                <Input id="email" sx={{ width: "530px" }} type="email" />
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="standard">
              <InputLabel htmlFor="component-simple">Password</InputLabel>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                sx={{ width: "530px" }}
              />
            </FormControl>
          </Grid>
          <Grid container item spacing={5} alignItems="center">
            <Grid item xs={6}>
              <Link>Forgot password?</Link>
            </Grid>
            <Grid item xs={6}>
              <Button style={{ backgroundColor: "#090B1F" }}>Save</Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
