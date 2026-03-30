import { C } from "../styles/colors";
import { FH } from "../styles/fonts";

export function Btn({ children, onClick, variant = "primary", disabled = false, style: s = {} }) {
  const v = {
    primary: { background: C.teal, color: C.white, border: "none" },
    coral: { background: C.coral, color: C.white, border: "none" },
    navy: { background: C.navy, color: C.white, border: "none" },
    amber: { background: C.amber, color: C.white, border: "none" },
    ghost: { background: "transparent", color: C.navy, border: `2px solid ${C.navy}` },
    ghostw: { background: "transparent", color: C.white, border: `2px solid ${C.teal100}` },
    gold: { background: C.gold, color: C.navy, border: "none" },
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        fontFamily: FH,
        fontWeight: "bold",
        borderRadius: 6,
        cursor: disabled ? "not-allowed" : "pointer",
        padding: "10px 20px",
        fontSize: 13,
        transition: "all 0.2s",
        opacity: disabled ? 0.5 : 1,
        ...v[variant],
        ...s,
      }}
    >
      {children}
    </button>
  );
}
