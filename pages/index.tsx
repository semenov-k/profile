import React from "react";
import Head from "next/head";
import { DEFAULT_LOCALE } from "../localized-data";

const Index: React.FC = () => {
  React.useEffect(() => {
    window.location.replace(`/${DEFAULT_LOCALE}`);
  });

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;