import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

export default class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Meta title={this.props.title} />
        <Header {...this.props} />
        <main className="content">{this.props.children}</main>
        <Footer />
      </Fragment>
    );
  }
}
