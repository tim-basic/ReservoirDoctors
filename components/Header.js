import Link from "next/link";
import React, { Component, Fragment } from "react";

export default class Header extends Component {
  render() {
    const props = this.props;
    const image = props["logo"]["url"];
    const imageAlt = props["logo"]["alt"];
    const menu = props["menu"];

    return (
      <header>
        <div className="container">
          <div className="row">
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
          </div>
        </div>

        <style jsx>
          {`
            header .row {
              height: 55px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex-direction: row;
              width: 100%;
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
          }
        `}
      </style>
    </Fragment>
  );
}
