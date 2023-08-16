// import RemotePage from "remote/remote";
// const Remote = RemotePage;
// Remote.getInitialProps = RemotePage.getInitialProps;

import useDynamicComponent from "@/hooks/use-dynamic-component";

const Remote = () => {
  const Component = useDynamicComponent({
    url: "https://remote-react-module.vercel.app/RemoteEntry.js",
    scope: "remote_react_module",
    module: "./Kylo",
  });

  return Component ? Component : null;
};

export default Remote;
