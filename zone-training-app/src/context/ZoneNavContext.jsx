import { createContext, useContext } from "react";

export const ZoneNavContext = createContext(null);

export function useZoneNav() {
  const ctx = useContext(ZoneNavContext);
  if (!ctx) throw new Error("useZoneNav must be used within ZoneNavContext.Provider");
  return ctx;
}
