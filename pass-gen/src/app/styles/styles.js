"use client";

import { Button, getAppBarUtilityClass, Typography } from "@mui/material";
import { height, styled } from "@mui/system";

export const Aaaaa = styled(Button)(() => ({
  background: "black",
  color: "white",
}));

export const StyledCard = styled("div")(() => ({
  border: "1px lightgray solid",
  width: 240,
  height: 340,
  textAlign: "center",
  boxShadow: "1px 1px 1px 1px",
  borderRadius: "2%",
  background: "#ebeffa",
  color: "black",
  ":hover": {
    width: 250,
    height: 350,
    background: "linear-gradient(270deg, #A0A5EE, #6c6fdd)",
    color: "white",
    gap: "0px",
  },
}));

export const StyledTypography = styled(Typography)(() => ({
  background: "green",
  ":hover": {
    fontSize: 300,
    background: "red",
  },
}));
