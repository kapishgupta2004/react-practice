"use client";

import { styled } from "@mui/system";
import { Typography } from "@mui/material";

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

export const List = styled("List")(() => ({
  p: 0,
  maxWidth: 500,
  borderColor: "divider",
  backgroundColor: "background.paper",
  textAlign: "center",
}));
