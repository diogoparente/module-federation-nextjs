import React from "react";
import Head from "next/head";

const Remote = (props) => (
  <div>
    <Head>
      <title>remote</title>
      <link rel="icon" href="/nextjs-ssr/remote/public/favicon.ico" />
    </Head>

    <div className="page">
      <h1>Remote page</h1>
      <h3>
        This is a remote federated page from <code>remote</code>
      </h3>
      <br />
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
    <style jsx>{`
      .page {
        border: 0.125rem dashed blue;
        min-height: 10rem;
      }
    `}</style>
  </div>
);
Remote.getInitialProps = async () => {
  const swapi = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  ).then((res) => res.json());
  return swapi;
};
export default Remote;
