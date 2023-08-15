import { Suspense, lazy } from "react";
import App from "next/app";
import dynamic from "next/dynamic";
const Nav = lazy(() => {
  console.log(import("host/nav"));
  return import("host/nav");
});

function MyApp({ Component, pageProps }) {
  return (
    <div id="remote" style={{ border: "2px dashed blue" }}>
      <Suspense fallback={"loading"}>
        <Nav />
      </Suspense>
      <Component {...pageProps} />
    </div>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};
export default MyApp;
