import React, { Component } from "react";
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
    const { page } = this.props;
    return (
      <section>
        <div className="container">
          <h1>{page[0].acf.title}</h1>
          <h2>Subtitle</h2>
        </div>
      </section>
    );
  }
}
