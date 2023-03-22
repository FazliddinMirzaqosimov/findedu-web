import Auth from "@/modules/auth/auth";
import Head from "next/head";

const register = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Royhatdan O&apos;tish</title>
      </Head>
      <div>
        <Auth type="register" />
      </div>
    </>
  );
};

export default register;
