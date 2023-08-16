import { AppProps, AppContext } from "next/app";
import Nav from "../components/nav";
import GlobalStyles from "../styles/globalStyles";
import {
  MicroFrontendStore,
  MicrofrontendProvider,
} from "@/context/micro-frontends.context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MicrofrontendProvider values={pageProps}>
      <GlobalStyles />
      <Nav />
      <Component {...pageProps} />
    </MicrofrontendProvider>
  );
}

MyApp.getInitialProps = async (
  _ctx: AppContext
): Promise<{ pageProps: MicroFrontendStore }> => {
  // process jwt

  return {
    pageProps: {
      ["remote_react_module"]: {
        version: "v1-0-0",
        scope: "remote_react_module",
      },
    },
  };
};

export default MyApp;
