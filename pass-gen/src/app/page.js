import styles from "./styles/styles.module.scss";
// import variables from "./styles/variables.module.scss"
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { StyledCard, StyledTypography } from "./styles/styles";

export default function Home() {
  return (
    <div>
      <div className={styles.styledDiv}>
        <div className={styles.child}>
          <h1> HOME</h1>
          <p>
            A home page is the main web page that a visitor will view when they
            navigate to a website via a search engine, and it may also function
            as a landing page to attract visitors.[3] In some cases, the home
            page is a site directory, particularly when a website has multiple
            home pages. Good home page design is usually a high priority for a
            website;[4] for example, a news website may curate headlines and
            first paragraphs of top stories, with links to full articles.[5][6]
            According to Homepage Usability, the home page is the "most
            important page on any website" and receives the most views of any
            page.[7] A poorly designed home page can overwhelm and deter
            visitors from the site.[6] One important use of home pages is
            communicating the identity and value of a company
          </p>
        </div>
        <div className={styles.col}>
          <h1>SERVICES</h1>
          <p>
            A service provider company plays a vital role in delivering
            essential services that meet the diverse needs of its clients. These
            services range from IT solutions, customer support, and cloud
            computing to specialized consulting, maintenance, and managed
            services. By leveraging expert knowledge, advanced technology, and
            streamlined processes, the company ensures that its clients receive
            efficient, reliable, and customized solutions that drive their
            success. The company’s commitment to quality service and customer
            satisfaction fosters long-term partnerships and helps businesses
            operate smoothly, improve productivity, and maintain a competitive
            edge in their respective markets
          </p>

          <h1>CONTACT</h1>
          <p>
            mobile : 8989897778 <br /> mail : aasdg2828@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
