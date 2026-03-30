import { useState, useEffect } from "react";
import { C } from "../styles/colors";
import { FH } from "../styles/fonts";
import { MODULE_OBJECTIVES } from "../data/objectives";

function sessionKey(moduleId) {
  return `drdata_sess_modobj_${moduleId}`;
}

export function ModuleObjectives({ moduleId }) {
  const data = MODULE_OBJECTIVES[moduleId];
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setDismissed(sessionStorage.getItem(sessionKey(moduleId)) === "1");
  }, [moduleId]);

  useEffect(() => {
    const key = sessionKey(moduleId);
    if (sessionStorage.getItem(key) === "1") return;
    const t = setTimeout(() => {
      sessionStorage.setItem(key, "1");
      setDismissed(true);
    }, 4000);
    return () => clearTimeout(t);
  }, [moduleId]);

  if (!data) return null;

  const dismiss = () => {
    sessionStorage.setItem(sessionKey(moduleId), "1");
    setDismissed(true);
  };

  const expand = () => {
    sessionStorage.removeItem(sessionKey(moduleId));
    setDismissed(false);
  };

  if (dismissed) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, fontSize: 12, color: C.slate }}>
        <span
          style={{
            background: C.teal100,
            color: C.navy,
            borderRadius: 4,
            padding: "2px 8px",
            fontFamily: FH,
            fontWeight: "bold",
            fontSize: 10,
          }}
        >
          {data.objs.length} performance objectives
        </span>
        <button
          type="button"
          onClick={expand}
          style={{ background: "none", border: "none", color: C.teal, cursor: "pointer", fontSize: 11 }}
        >
          Show objectives
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: C.navy, borderRadius: 10, padding: "16px 20px", marginBottom: 24 }}>
      <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 10, color: C.teal, letterSpacing: 1.5, marginBottom: 12 }}>
        AFTER THIS MODULE YOU WILL BE ABLE TO
      </div>
      {data.objs.map((obj, i) => (
        <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
          <div
            style={{
              background: C.coral,
              color: C.white,
              fontFamily: FH,
              fontWeight: "bold",
              fontSize: 10,
              padding: "2px 7px",
              borderRadius: 4,
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            {obj.verb}
          </div>
          <div style={{ fontSize: 12, color: C.teal100, lineHeight: 1.6 }}>{obj.text}</div>
        </div>
      ))}
      <div style={{ background: C.teal, borderRadius: 6, padding: "10px 14px", marginTop: 12, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <span style={{ fontFamily: FH, fontWeight: "bold", fontSize: 10, color: C.navy, letterSpacing: 1 }}>ARTIFACT YOU WILL BUILD:</span>
        <span style={{ fontSize: 12, color: C.white }}>{data.artifact}</span>
      </div>
      <button
        type="button"
        onClick={dismiss}
        style={{
          marginTop: 12,
          background: "transparent",
          border: `1px solid ${C.teal100}`,
          color: C.teal100,
          borderRadius: 6,
          padding: "6px 14px",
          fontSize: 12,
          fontFamily: FH,
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Got it — let's start →
      </button>
    </div>
  );
}
