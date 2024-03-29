import React from "react";
import Login from "@/modules/auth/auth";
import Head from "next/head";

const LoginPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kirish</title>
      </Head>
      <div>
        <Login />
      </div>
    </>
  );
};

export default LoginPage;
