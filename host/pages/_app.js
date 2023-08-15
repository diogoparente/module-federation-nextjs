import App from "next/app";
import Nav from "../components/nav";
import GlobalStyles from "../components/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div id="host">
        <GlobalStyles />
        <Nav />
        <Component {...pageProps} />
      </div>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};
export default MyApp;
