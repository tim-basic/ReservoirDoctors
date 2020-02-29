import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Media from "react-media";
<<<<<<< Updated upstream
=======
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
        <VerticalTabs />
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          gutterBottom>
=======
          gutterBottom
        >
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "row"
    // height: 224
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          // variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </div>
    </Container>
  );
}
>>>>>>> Stashed changes
