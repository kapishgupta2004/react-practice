"use client";

import { styled } from "@mui/system";
import { Switch, Typography, List, Button } from "@mui/material";

export const StyledDiv = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledCardDiv = styled("div")(() => ({
  height: 400,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  width: "100%",
}));

export const StyledContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  gap: 10,
  background: "#ebeffa",
}));

export const StyledPage = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
  height: "calc(100% - 37px)",
  color: "white",
}));

export const StyledList = styled(List)(() => ({
  p: 0,
  maxWidth: 500,
  borderColor: "divider",
  backgroundColor: "background.paper",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  margin: "0px 10px",
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "blue",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: "red",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
  },
}));

export const StyledButton = styled(Button)(() => ({
  background: "blue",
  color: "white",
  ":hover": {
    background: "red",
  },
}));
