import React, { Component } from "react";
//Utils
import axios from "../node_modules/axios";

export default class extends Component {
  render() {
    //console.log(this.props.page[0]);
    // const { page } = this.props;
    // const { page1 } = this.props;
    // console.log(this.props);

    return (
      <section>
        <div className="container">
          {/* <h1>{page[0].acf.title}</h1> */}
          <h2>Subtitle</h2>
        </div>
      </section>
    );
  }
}
