import { C } from "../styles/colors";
import { FH, FB } from "../styles/fonts";
import { Card } from "./Card";
import { KIRKPATRICK } from "../data/objectives";

export function KirkpatrickPanel() {
  return (
    <Card style={{ padding: "16px", marginBottom: 20 }}>
      <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 11, color: C.navy, letterSpacing: 1, marginBottom: 12 }}>
        4-LEVEL ALIGNMENT (KIRKPATRICK)
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {KIRKPATRICK.map((k) => (
          <div
            key={k.level}
            style={{
              background: k.color,
              color: k.textColor,
              borderRadius: 8,
              padding: "12px 14px",
            }}
          >
            <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 12, marginBottom: 6 }}>
              L{k.level} · {k.name}
            </div>
            <div style={{ fontFamily: FB, fontSize: 11, lineHeight: 1.5, marginBottom: 6, opacity: 0.95 }}>{k.measures}</div>
            <div style={{ fontFamily: FB, fontSize: 10, lineHeight: 1.4, opacity: 0.9 }}>
              <strong>Where it lives:</strong> {k.where}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 12,
          padding: "10px 12px",
          background: C.cream,
          borderRadius: 6,
          borderLeft: `3px solid ${C.teal}`,
          fontFamily: FB,
          fontSize: 12,
          color: C.navy,
          lineHeight: 1.5,
        }}
      >
        L3 and L4 are built in by design.
      </div>
    </Card>
  );
}
