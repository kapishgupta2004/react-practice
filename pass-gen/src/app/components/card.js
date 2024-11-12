"use client";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { StyledButton, StyledCard } from "../styles/styles";
import Link from "next/link";

export default function Card({ item }) {
  console.log(item.feature);
  return (
    <>
      <StyledCard>
        <p>{item.title}</p>
        <h1>${item.price}</h1>

        <List
          style={{
            p: 0,

            maxWidth: 500,

            borderColor: "divider",
            backgroundColor: "background.paper",
            textAlign: "center",
          }}
          aria-label="mailbox folders"
        >
          {item.feature.map((item, index) => (
            <>
              <ListItem key={index}>
                <ListItemText primary={item} />
              </ListItem>
              <Divider component="li" />
            </>
          ))}
        </List>
        <a href={item.link} target="_blank">
          <StyledButton variant="outlined">Outlined</StyledButton>
        </a>
      </StyledCard>
    </>
  );
}
