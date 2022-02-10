import React from "react";
import Head from "next/head";
import { DEFAULT_LOCALE } from "../localized-data";
import { useRouter } from "next/router";

const Index: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.replace(`/${DEFAULT_LOCALE}`);
  });

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;