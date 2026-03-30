import { C } from "../styles/colors";
import { FH } from "../styles/fonts";
import { Card } from "./Card";
import { getArtifactMilestones } from "../lib/artifactProgress";

export function LearningProgress({ ls }) {
  const artifacts = getArtifactMilestones(ls);
  const doneCount = artifacts.filter((a) => a.done).length;
  const pct = Math.round((doneCount / artifacts.length) * 100);

  return (
    <Card accent={C.teal} style={{ padding: "18px", marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 11, color: C.teal, letterSpacing: 1 }}>ZONE SYSTEM PROGRESS</div>
        <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 20, color: C.teal }}>{pct}%</div>
      </div>
      <div style={{ background: C.teal100, borderRadius: 4, height: 6, marginBottom: 14 }}>
        <div style={{ background: C.teal, height: 6, borderRadius: 4, width: `${pct}%`, transition: "width 0.5s" }} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {artifacts.map((a, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              background: a.done ? C.teal : C.lightgray,
              borderRadius: 4,
              padding: "3px 9px",
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: a.done ? C.white : C.slate }} />
            <span style={{ fontSize: 11, fontFamily: FH, fontWeight: "bold", color: a.done ? C.white : C.slate }}>{a.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
