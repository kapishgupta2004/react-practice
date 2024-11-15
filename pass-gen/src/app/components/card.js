"use client";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { StyledButton, StyledCard } from "../styles/styles";
import { StyledList } from "../pricing/style";

export default function Card({ item }) {
  console.log(item.feature);
  return (
    <>
      <StyledCard>
        <p>{item.title}</p>
        <h1>${item.price}</h1>

        <StyledList aria-label="mailbox folders">
          {item.feature.map((item) => (
            <div key={item.id}>
              <ListItem>
                <ListItemText primary={item.name} />
              </ListItem>
              <Divider component="li" />
            </div>
          ))}
        </StyledList>
        <a href={item.link} target="_blank">
          <StyledButton variant="outlined">Purchase</StyledButton>
        </a>
      </StyledCard>
    </>
  );
}
