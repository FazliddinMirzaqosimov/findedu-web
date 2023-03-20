import Auth from "@/modules/auth/auth";
import Head from "next/head";
import React from "react";

const confirm = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tasdiqlash</title>
      </Head>
      <div>
        <Auth type="confirm" />
      </div>
    </>
  );
};

export default confirm;
