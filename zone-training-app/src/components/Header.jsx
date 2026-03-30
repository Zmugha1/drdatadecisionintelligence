import { useLocation } from "react-router-dom";
import { C } from "../styles/colors";
import { FH, FB } from "../styles/fonts";
import { Mascot } from "./Mascot";
import { useZoneNav } from "../context/ZoneNavContext";

export function Header() {
  const { nav } = useZoneNav();
  const loc = useLocation();
  const page = loc.pathname === "/" ? "landing" : loc.pathname.slice(1);

  return (
    <div
      style={{
        background: C.navy,
        borderTop: `4px solid ${C.teal}`,
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 54,
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => nav("landing")}>
        <Mascot size={38} />
        <div>
          <div style={{ fontFamily: FH, fontWeight: "bold", color: C.teal, fontSize: 18 }}>Dr. Data</div>
          <div style={{ fontFamily: FB, fontStyle: "italic", color: C.teal100, fontSize: 11 }}>Working in the Zone</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
        {page !== "overview" && (
          <button
            type="button"
            onClick={() => nav("overview")}
            style={{ fontFamily: FB, fontSize: 12, color: C.teal100, background: "none", border: "none", cursor: "pointer" }}
          >
            Program Overview
          </button>
        )}
        {page !== "dashboard" && (
          <button
            onClick={() => nav("dashboard")}
            style={{ fontFamily: FB, fontSize: 12, color: C.teal100, background: "none", border: "none", cursor: "pointer" }}
          >
            All Modules
          </button>
        )}
        {page !== "zonesystem" && (
          <button
            onClick={() => nav("zonesystem")}
            style={{ fontFamily: FB, fontSize: 12, color: C.teal100, background: "none", border: "none", cursor: "pointer" }}
          >
            My Zone
          </button>
        )}
        <button
          onClick={() => nav("diagnostic")}
          style={{
            fontFamily: FH,
            fontWeight: "bold",
            fontSize: 12,
            background: C.teal,
            color: C.white,
            border: "none",
            borderRadius: 4,
            padding: "6px 12px",
            cursor: "pointer",
          }}
        >
          Find My Zone →
        </button>
      </div>
    </div>
  );
}
