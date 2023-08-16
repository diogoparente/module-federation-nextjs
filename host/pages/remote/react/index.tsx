import { useMicrofrontend } from "@/context/micro-frontends.context";
import useDynamicComponent from "@/hooks/use-dynamic-component";

const Remote = () => {
  const { version, scope } = useMicrofrontend({ id: "remote_react_module" });

  // BASE_URL should be localhost or S3 depending on the development mode

  const Component = useDynamicComponent({
    url: `http://localhost:8082/remoteEntry.js`,
    scope,
    module: "./App",
  });

  return Component ? Component : null;
};

export default Remote;
