import App from "next/app";
import React from "react";
import Layout from "../components/Layout";
import axios from "../node_modules/axios";

class MyApp extends App {
  static async getInitialProps(appContext) {
    const myVar = await axios.get("http://13.54.26.50/wp-json/wp/v2/pages");
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return {
      header: myVar.data.filter(page => page.slug === "logo-menus-footer"),
      pages: appProps["pageProps"]
    };
  }
  render() {
    const { Component, pages } = this.props;

    const { acf } = this.props["header"][0];
    const { title } = acf;
    const { logo } = acf;
    const { menu } = acf;
    const { footer } = acf;

    return (
      <Layout logo={logo} menu={menu} footer={footer} title={title}>
        <Component {...pages} />
      </Layout>
    );
  }
}

export default MyApp;
