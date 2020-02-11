import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

//Utils
import axios from "../node_modules/axios";

export default class extends Component {
  static async getInitialProps() {
    const pages = await axios.get("http://13.54.26.50/wp-json/wp/v2/pages");
    return {
      page: pages.data.filter(page => page.slug === "reservoir-doctors")
    };
  }
  render() {
    const props = this.props.page[0].acf;

    return <Hero title={props.title} subtitle={props.subtitle} />;
  }
}

function Hero(props) {
  const headingStyles = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    maxWidth: "960px",
    fontWeight: "700"
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography
          style={headingStyles}
          variant="h1"
          component="h2"
          gutterBottom>
          {props.subtitle}
        </Typography>
      </Container>
    </React.Fragment>
  );
}
