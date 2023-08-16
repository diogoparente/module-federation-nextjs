import React, { Suspense } from "react";
import useDynamicScript from "../hooks/use-dynamic-script";

export interface ModuleProps {
  scope: string;
  module: string;
  url: string;
}

function loadComponent(props: Omit<ModuleProps, "url">) {
  const { scope, module } = props;
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");
    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

function ModuleLoader({ url, module, scope }: ModuleProps) {
  const { ready, failed } = useDynamicScript({
    url: module && url,
  });

  if (!module) {
    return <h2>Not Remote Module specified</h2>;
  }

  if (!ready) {
    return <h2>Loading dynamic script: {url}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {url}</h2>;
  }

  const Component = React.lazy(loadComponent({ scope, module }));

  return (
    <Suspense fallback="Loading Module">
      <Component />
    </Suspense>
  );
}

const useDynamicComponent = (remote: ModuleProps) => {
  return remote ? <ModuleLoader {...remote} /> : null;
};

export default useDynamicComponent;
