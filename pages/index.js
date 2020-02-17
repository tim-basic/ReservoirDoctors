import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Media from "react-media";
//Utils
import axios from "../node_modules/axios";
import { width } from "dom-helpers";

// Get props for db and render page
export default class extends Component {
  static async getInitialProps() {
    const pages = await axios.get("http://13.54.26.50/wp-json/wp/v2/pages");
    return {
      page: pages.data.filter(page => page.slug === "reservoir-doctors")
    };
  }
  render() {
    const props = this.props.page[0].acf;
    return (
      <React.Fragment>
        <Hero title={props.title} subtitle={props.subtitle} />
        <Staff staff={props.staff} />
      </React.Fragment>
    );
  }
}

// Sections of the homepage
// Hero Section
function Hero(props) {
  const headingStyles = {
    minHeight: "100vh",
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

// Staff Section
function Staff(props) {
  const headingStyles = {
    fontWeight: "700",
    width: "100%",
    textAlign: "right",
    marginBottom: "150px"
  };
  const containerStyles = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  };

  const staffWrapper = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    minHeight: "30vh",
    alignItems: "flex-start"
  };

  const staffBlurb = {
    flex: "2.5"
  };
  const staffList = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "100px"
  };
  console.log(props.staff);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={containerStyles}>
        <Typography id="staff" style={headingStyles} variant="h2" gutterBottom>
          Staff
        </Typography>
        <Media query="(max-width: 599px)" render={() => <p>I am small!</p>} />
        <div style={staffWrapper}>
          <div style={staffBlurb}>
            {props.staff.map((person, i) => (
              <StaffBlurb blurb={person.text} key={i} num={i} />
            ))}
          </div>
          <div style={staffList}>
            {props.staff.map((person, i) => (
              <StaffTitle
                name={person.name}
                position={person.position}
                key={i}
                num={i}
              />
            ))}
          </div>
        </div>
        {/* {!this.props.isHidden && <SomeComponent/>} */}
      </Container>
    </React.Fragment>
  );
}

// helper components for Staff
function StaffBlurb(props) {
  const id = "staffBlurb_" + props.num;
  return (
    <React.Fragment>
      <div id={id}>
        <div dangerouslySetInnerHTML={{ __html: props.blurb }} />
      </div>
    </React.Fragment>
  );
}

function StaffTitle(props) {
  console.log(props);
  const id = "staffList_" + props.num;
  return (
    <React.Fragment>
      <div id={id}>
        <div>{props.name}</div>
        <div>{props.position}</div>
      </div>
    </React.Fragment>
  );
}
