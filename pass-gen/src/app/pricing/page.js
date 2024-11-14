"use client";

import { Switch } from "@mui/material";
import Typography from "@mui/material/Typography";
import { StyledCardDiv, StyledDiv, StyledPage } from "./style";
import Card from "../components/card";
import { useState } from "react";

// const cardData = [
//   {
//     id: 1,
//     title: "Basic",
//     price: 19.99,

//     feature: [
//       { id: 1, name: "500gb storage" },
//       { id: 2, name: "2 user allowed" },
//       { id: 3, name: "send Upto 2gb" },
//     ],
//     link: "/new1",
//   },
//   {
//     id: 2,
//     title: "Professional",
//     price: 24.99,
//     feature: [
//       { id: 1, name: "1tb storage" },
//       { id: 2, name: "5user allowed" },
//       { id: 3, name: "send Upto 10gb" },
//     ],
//     link: "/new2",
//   },
//   {
//     id: 3,
//     title: "Advance",
//     price: 39.99,
//     feature: [
//       { id: 1, name: "2tb" },
//       { id: 2, name: "10 user allowed" },
//       { id: 3, name: "send Upto 2gb" },
//     ],
//     link: "/new3",
//   },
// ];
// export default function Page() {
//   return (
//     <StyledPage>
//       <Typography>Our Pricing</Typography>
//       <StyledDiv>
//         <Typography>Monthly</Typography>
//         <Switch />
//         <Typography>Anually</Typography>
//       </StyledDiv>
//       <StyledCardDiv>
//         {cardData.map((item) => (
//           <Card key={item.id} item={item} />
//         ))}
//       </StyledCardDiv>
//     </StyledPage>
//   );
// }

// _______________________________________________________________________________________________________


const cardData = [
  {
    id: 1,
    title: "Basic",
    monthlyPrice: 19.99,
    annualPrice: 199.99,
    feature: [
      { id: 1, name: "500gb storage" },
      { id: 2, name: "2 user allowed" },
      { id: 3, name: "send Upto 2gb" },
    ],
    link: "/new1",
  },
  {
    id: 2,
    title: "Professional",
    monthlyPrice: 24.99,
    annualPrice: 249.99,
    feature: [
      { id: 1, name: "1tb storage" },
      { id: 2, name: "5 user allowed" },
      { id: 3, name: "send Upto 10gb" },
    ],
    link: "/new2",
  },
  {
    id: 3,
    title: "Advance",
    monthlyPrice: 39.99,
    annualPrice: 399.99,
    feature: [
      { id: 1, name: "2tb" },
      { id: 2, name: "10 user allowed" },
      { id: 3, name: "send Upto 2gb" },
    ],
    link: "/new3",
  },
];

export default function Page() {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleSwitchChange = () => {
    setIsAnnual((prev) => !prev);
  };

  return (
    <StyledPage>
      <Typography>Our Pricing</Typography>
      <StyledDiv>
        <Typography>Monthly</Typography>
        <Switch checked={isAnnual} onChange={handleSwitchChange} />
        <Typography>Annually</Typography>
      </StyledDiv>
      <StyledCardDiv>
        {cardData.map((item) => (
          <Card
            key={item.id}
            item={{
              ...item,
              price: isAnnual ? item.annualPrice : item.monthlyPrice,
            }}
          />
        ))}
      </StyledCardDiv>
    </StyledPage>
  );
}
