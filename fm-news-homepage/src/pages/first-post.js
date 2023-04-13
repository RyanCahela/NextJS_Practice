import React from "react";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";

function firstPost() {
  return (
    <Layout>
      <Head>
        <title>first post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log("script loaded correctly, window.FB has been populated")
        }
      />
      <div className="">
        <p className="">This is the first post</p>
      </div>
    </Layout>
  );
}

export default firstPost;
