import { useState, useCallback } from "react";

const LS_KEY = "drdata_zone_v1";

export function useZoneStorage() {
  const [ls, setLs] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(LS_KEY) || "{}");
    } catch {
      return {};
    }
  });

  const save = useCallback((updates) => {
    setLs((prev) => {
      const next = { ...prev };
      Object.entries(updates).forEach(([k, v]) => {
        if (k === "completedModules") {
          const ex = prev.completedModules || [];
          next.completedModules = [...new Set([...ex, ...v])];
        } else {
          next[k] = v;
        }
      });
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  return [ls, save];
}
