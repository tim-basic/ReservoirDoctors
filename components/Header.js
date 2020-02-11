import Link from "next/link";
import React, { Component, Fragment } from "react";
import Container from "@material-ui/core/Container";

export default class Header extends Component {
  render() {
    const props = this.props;
    const image = props["logo"]["url"];
    const imageAlt = props["logo"]["alt"];
    const menu = props["menu"];

    const containerStyles = {
      paddingTop: "20px",
      paddingBottom: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "fixed"
    };

    return (
      <header>
        <Container maxWidth="lg" style={containerStyles}>
          <div id="logo">
            <img src={image} alt={imageAlt} />
          </div>
          <nav role="navigation" aria-label="navigation">
            <ul>
              {menu.map(item => (
                <MenuItem text={item.text} link={item.link} />
              ))}
            </ul>
          </nav>
        </Container>

        <style jsx>
          {`
            header {
              display: flex;
              justify-content: center;
            }
            header img {
              height: 100px;
            }
            nav ul {
              padding: 0;
              margin: 0;
            }
          `}
        </style>
      </header>
    );
  }
}

function MenuItem(props) {
  const href = "/#" + props.link;
  const id = props.link + "_nav";
  const item = props.text;

  return (
    <Fragment>
      <li>
        <Link href={href}>
          <a id={id}>{item}</a>
        </Link>
      </li>
      <style jsx>
        {`
          li {
            display: inline-flex;
            margin-bottom: 0;
            margin-left: 15px;
          }
          a {
            text-transform: capitalize;
            text-decoration: none;
            color: #000;
            font-size: 1.6rem;
            font-weight: 500;
          }
        `}
      </style>
    </Fragment>
  );
}
