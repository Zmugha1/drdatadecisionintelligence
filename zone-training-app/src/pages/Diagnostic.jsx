import { useState } from "react";
import { C } from "../styles/colors";
import { FH, FB } from "../styles/fonts";
import { Btn } from "../components/Btn";
import { Card } from "../components/Card";
import { ProgressBar } from "../components/ProgressBar";
import { ZoneDiag } from "../components/ZoneDiag";
import { QS } from "../data/jobs";
import { ModuleObjectives } from "../components/ModuleObjectives";
import { useZoneNav } from "../context/ZoneNavContext";

export function Diagnostic() {
  const { nav, save } = useZoneNav();
  const [cur, setCur] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [sel, setSel] = useState(null);
  const [result, setResult] = useState(null);

  const pick = (opt) => {
    setSel(opt);
    setTimeout(() => {
      const na = [...answers, opt];
      if (cur < QS.length - 1) {
        setAnswers(na);
        setCur((c) => c + 1);
        setSel(null);
      } else {
        let b = 0,
          a = 0,
          ins = 0;
        na.forEach((x) => {
          b += x.b || 0;
          a += x.a || 0;
          ins += x.i || 0;
        });
        let pos = "below";
        if (a > 5 && b > 5) pos = "oscillating";
        else if (a > 5) pos = "above";
        else if (b <= 4 && ins >= 4) pos = "inside";
        else pos = "below";
        const r = { below: b, above: a, inside: ins, position: pos };
        setResult(r);
        save({ diagnosticScore: r, zonePosition: pos });
      }
    }, 320);
  };

  if (result) {
    const profiles = {
      below: {
        h: "You Are Working Below Your Zone.",
        sub: "You are spending expert time on steps AI should be handling. The Zone shift starts here.",
        c: C.coral,
      },
      above: {
        h: "You Are at Risk of Working Above Your Zone.",
        sub: "You are accepting AI outputs without interrogating whether the job was actually done right.",
        c: C.amber,
      },
      oscillating: {
        h: "You Are Oscillating.",
        sub: "Sometimes below, sometimes above — rarely inside. All five things need defining to stabilize your Zone.",
        c: C.slate,
      },
      inside: {
        h: "You Are Approaching Your Zone.",
        sub: "You understand the boundary. Now build the five things to make it systematic and compounding.",
        c: C.teal,
      },
    };
    const p = profiles[result.position];
    const cost = Math.max(result.below * 2, 1);
    return (
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 20px" }}>
        <div
          style={{
            fontFamily: FH,
            fontWeight: "bold",
            fontSize: 12,
            color: C.teal,
            letterSpacing: 2,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          YOUR ZONE POSITION
        </div>
        <ZoneDiag position={result.position === "oscillating" ? null : result.position} />
        <div style={{ textAlign: "center", margin: "28px 0" }}>
          <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 26, color: p.c, marginBottom: 10 }}>{p.h}</div>
          <div style={{ fontFamily: FB, fontSize: 14, color: C.slate, maxWidth: 480, margin: "0 auto" }}>{p.sub}</div>
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 32 }}>
          {[
            { l: "Weekly hours below your Zone", v: `~${cost} hrs`, c: C.coral },
            {
              l: "Expertise leak risk",
              v: result.above > 4 ? "HIGH" : result.above > 2 ? "MODERATE" : "LOW",
              c: result.above > 4 ? C.coral : C.teal,
            },
            {
              l: "Voice definition needed",
              v: result.inside >= 4 ? "STRONG" : "NEEDS WORK",
              c: result.inside >= 4 ? C.teal : C.amber,
            },
          ].map((s, i) => (
            <Card key={i} accent={s.c} style={{ padding: "14px 18px", textAlign: "center", minWidth: 140 }}>
              <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 20, color: s.c }}>{s.v}</div>
              <div style={{ fontFamily: FB, fontSize: 10, color: C.slate, marginTop: 4 }}>{s.l}</div>
            </Card>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn onClick={() => nav("module1")} style={{ fontSize: 14, padding: "12px 24px" }}>
            Start Module 1: The Job and the Zone →
          </Btn>
          <Btn variant="ghost" onClick={() => nav("dashboard")} style={{ fontSize: 14, padding: "12px 24px" }}>
            View All Modules
          </Btn>
        </div>
      </div>
    );
  }

  const q = QS[cur];
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 20px" }}>
      <ModuleObjectives moduleId="diagnostic" />
      <div
        style={{
          fontFamily: FH,
          fontWeight: "bold",
          fontSize: 12,
          color: C.teal,
          letterSpacing: 2,
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        ZONE DIAGNOSTIC — THE JOB EDITION
      </div>
      <ProgressBar current={cur} total={QS.length} />
      <Card accent={C.teal} style={{ padding: "28px 24px" }}>
        <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 18, color: C.navy, marginBottom: 24, lineHeight: 1.4 }}>
          {q.q}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {q.opts.map((opt, i) => (
            <button
              key={i}
              onClick={() => pick(opt)}
              style={{
                fontFamily: FB,
                fontSize: 13,
                color: sel === opt ? C.white : C.navy,
                background: sel === opt ? C.teal : C.cream,
                border: `2px solid ${sel === opt ? C.teal : C.border}`,
                borderRadius: 8,
                padding: "12px 16px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s",
              }}
            >
              {opt.t}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}
