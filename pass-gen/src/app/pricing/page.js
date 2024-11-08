"use client";

import { Grid2, Switch } from "@mui/material";
import Typography from "@mui/material/Typography";
import { StyledDiv, StyledTypography } from "./style";
import Card from "../components/card";
import { lightBlue } from "@mui/material/colors";

const cardData = [
  {
    id: 1,
    title: "Basic",
    price: 19.99,
    feature: ["500gb storage", "2 user allowed", "send Upto 2gb"],
  },
  {
    id: 2,
    title: "Professional",
    price: 24.99,
    feature: ["1tb storage", "5user allowed", "send Upto 10gb"],
  },
  {
    id: 3,
    title: "Advance",
    price: 39.99,
    feature: ["2tb", "10 user allowed", "send Upto 2gb"],
  },
];

export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#cfddfa",
        height: "100%",
      }}
    >
      <StyledTypography>Our Pricing</StyledTypography>
      <StyledDiv>
        <Typography>Monthly</Typography>
        <Switch />
        <Typography>Anually</Typography>
      </StyledDiv>
      <div
        style={{
          display: "flex",
          gap: 5,
        }}
      >
        {cardData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
