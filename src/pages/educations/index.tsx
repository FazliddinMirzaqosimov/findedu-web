import EducationPage from "@/modules/education/Educations";
import Head from "next/head";
import React from "react";

const Education = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>O&apos;quv markazlar</title>
      </Head>
      <EducationPage />
    </>
  );
};

export default Education;
