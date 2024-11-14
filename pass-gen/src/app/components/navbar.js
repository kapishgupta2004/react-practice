"use client";

import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useState } from "react";
import { StyledContainer } from "../pricing/style";

const navdata = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/",
    subMenu: [
      {
        id: 1,
        name: "about me",
      },
    ],
  },
  {
    id: 3,
    name: "SERVICE",
    link: "/",
  },
  {
    id: 4,
    name: "PRICING",
    link: "/pricing",
  },
  {
    id: 5,
    name: "CONTACT",
    link: "/",
  },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledContainer>
      {navdata.map((nav) => (
        <div key={nav.id}>
          {nav.subMenu ? (
            <>
              <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {nav.name}
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                {nav.subMenu.map((item) => (
                  <MenuItem key={item.id} onClick={handleClose}>
                    {item.name}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Link href={nav.link}>
              <Button>{nav.name}</Button>
            </Link>
          )}
        </div>
      ))}
    </StyledContainer>
  );
}
