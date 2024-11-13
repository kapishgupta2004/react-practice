"use client";

import { Grid2, Switch } from "@mui/material";
import Typography from "@mui/material/Typography";
import { StyledDiv } from "./style";
import Card from "../components/card";
import { useState } from 'react';

const cardData = [
  {
    id: 1,
    title: "Basic",
    price: 19.99,
    feature: ["500gb storage", "2 user allowed", "send Upto 2gb"],
    link: "/new1",
  },
  {
    id: 2,
    title: "Professional",
    price: 24.99,
    feature: ["1tb storage", "5user allowed", "send Upto 10gb"],
    link: "/new2",
  },
  {
    id: 3,
    title: "Advance",
    price: 39.99,
    feature: ["2tb", "10 user allowed", "send Upto 2gb"],
    link: "/new3",
  },
];



// Custom hook for dropdown visibility
export const useDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };


  console.log("isDropdownOpen: ", isDropdownOpen)

  return {
    isDropdownOpen,
    toggleDropdown,
  };
};


export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        height: "100%",
        color: "white",
      }}
    >
      <Typography>Our Pricing</Typography>
      <StyledDiv>
        <Typography>Monthly</Typography>
        <Switch />
        <Typography>Anually</Typography>
      </StyledDiv>
      <div
        style={{
          height: 400,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        {cardData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
