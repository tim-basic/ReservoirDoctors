import React, { Component } from "react";

//Page Parts
import Hero from "./index_parts/hero";
import Staff from "./index_parts/staff";

//Utils
import axios from "../node_modules/axios";

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
