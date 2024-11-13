import styles from "./styles/styles.module.scss";
// import variables from "./styles/variables.module.scss"
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { StyledCard, StyledTypography } from "./styles/styles";
import { Card, Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
   

      <div className={styles.styledDiv}>
        hello
        <div className={styles.child}>my sample next js</div>
        <div className={styles.col}>
          <h1>practicing saas variables</h1>
        </div>
      </div>
      <h1>kapish</h1>

      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <StyledCard>
        <StyledTypography variant="h1">Heelo</StyledTypography>
      </StyledCard>
    </div>
  );
}
