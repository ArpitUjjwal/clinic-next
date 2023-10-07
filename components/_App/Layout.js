import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import Whatsapp from "./Whatsapp";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dermaiims - Medical Health & Doctors React Template</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      {children}

      <Whatsapp/>
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export default Layout;
