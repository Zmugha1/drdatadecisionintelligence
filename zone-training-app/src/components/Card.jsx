import { C } from "../styles/colors";

export function Card({ children, style: s = {}, accent = null }) {
  return (
    <div
      style={{
        background: C.white,
        borderRadius: 10,
        border: `1.5px solid ${C.border}`,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        overflow: "hidden",
        ...s,
      }}
    >
      {accent && <div style={{ height: 4, background: accent }} />}
      {children}
    </div>
  );
}
