import { useState } from "react";
import { C } from "../styles/colors";
import { FH, FB } from "../styles/fonts";
import { Card } from "./Card";
import { getAssessmentRows } from "../data/objectives";

export function AssessmentArchitecturePanel() {
  const [open, setOpen] = useState(false);
  const rows = getAssessmentRows();

  return (
    <Card style={{ padding: 0, marginBottom: 28, overflow: "hidden" }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          padding: "14px 18px",
          background: C.lightgray,
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontFamily: FH, fontWeight: "bold", fontSize: 12, color: C.navy }}>View assessment criteria</span>
        <span style={{ fontFamily: FB, fontSize: 12, color: C.teal }}>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div style={{ padding: "16px 18px", borderTop: `1px solid ${C.border}` }}>
          {rows.map((row, idx) => (
            <div
              key={row.badge}
              style={{
                marginBottom: idx < rows.length - 1 ? 14 : 0,
                paddingBottom: idx < rows.length - 1 ? 14 : 0,
                borderBottom: idx < rows.length - 1 ? `1px solid ${C.border}` : "none",
              }}
            >
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: 6 }}>
                <span
                  style={{
                    background: C.navy,
                    color: C.white,
                    fontFamily: FH,
                    fontWeight: "bold",
                    fontSize: 10,
                    padding: "2px 8px",
                    borderRadius: 4,
                  }}
                >
                  {row.badge}
                </span>
                {row.isKeyArtifact && (
                  <span
                    style={{
                      background: C.teal,
                      color: C.navy,
                      fontFamily: FH,
                      fontWeight: "bold",
                      fontSize: 9,
                      padding: "2px 8px",
                      borderRadius: 4,
                    }}
                  >
                    KEY ARTIFACT
                  </span>
                )}
              </div>
              <div style={{ fontFamily: FB, fontSize: 12, color: C.navy, lineHeight: 1.5 }}>{row.assessment}</div>
              <div style={{ fontFamily: FB, fontSize: 11, fontStyle: "italic", color: C.teal, marginTop: 4 }}>{row.artifact}</div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
