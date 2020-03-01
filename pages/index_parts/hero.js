import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

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
          gutterBottom
        >
          {props.subtitle}
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Hero;
