import React, { createContext, useContext, PropsWithChildren } from "react";

interface MicroFrontend {
  version: string;
  scope: string;
}

export interface MicroFrontendStore {
  [microfrontendId: string]: MicroFrontend;
}

interface MicrofrontendContextProps extends MicroFrontendStore {}

const defaultState: MicrofrontendContextProps = {};

const MicrofrontendContext =
  createContext<MicrofrontendContextProps>(defaultState);

export const MicrofrontendProvider = ({
  children,
  values,
}: PropsWithChildren<{ values: MicroFrontendStore }>) => {
  return (
    <MicrofrontendContext.Provider value={values}>
      {children}
    </MicrofrontendContext.Provider>
  );
};

const useMicrofrontends = () => {
  return useContext(MicrofrontendContext);
};

export const useMicrofrontend = ({ id }: { id: string }) => {
  const microfrontend = useMicrofrontends()[id] ?? null;
  const { version, scope } = microfrontend;

  return { version, scope };
};
