import React, { Suspense, lazy } from "react";
import Head from "next/head";
typeof window !== "undefined" && console.log(window.remote);

const RemoteTitle = lazy(() => import("remote/title"));

const Host = () => {
  return (
    <div>
      <Head>
        <title>Host</title>
        <link rel="icon" href="/nextjs-ssr/host/public/favicon.ico" />
      </Head>

      <div className="hero">
        <Suspense fallback={"loading remote title"}>
          <RemoteTitle />
        </Suspense>
        <div>
          This <b>was not</b> loaded from a remote!
        </div>
      </div>
    </div>
  );
};
//
Host.getInitialProps = async (ctx) => {
  return {};
};

export default Host;
