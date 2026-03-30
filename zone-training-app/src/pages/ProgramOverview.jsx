import { useState } from "react";
import { C } from "../styles/colors";
import { FH, FB } from "../styles/fonts";
import { Card } from "../components/Card";
import {
  TLO,
  PROGRAM_OBJECTIVES,
  MODULE_OBJECTIVES,
  KIRKPATRICK,
  getAssessmentRows,
  ASSESSMENT_MODULE_KEYS,
} from "../data/objectives";

const TABS = [
  "Terminal objective",
  "Program performance objectives",
  "Module performance objectives",
  "4-level alignment",
  "Assessment architecture",
];

const LIVE_KEYS = new Set(["diagnostic", "module1", "module2"]);

export function ProgramOverview() {
  const [tab, setTab] = useState(0);
  const [expandedMod, setExpandedMod] = useState(null);

  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: "36px 20px" }}>
      <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 22, color: C.navy, marginBottom: 8 }}>Program Overview</div>
      <div style={{ fontFamily: FB, fontSize: 13, color: C.slate, marginBottom: 20, lineHeight: 1.5 }}>
        Working in the Zone — performance objectives, artifacts, and 4-level alignment.
      </div>

      <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 24, borderBottom: `1px solid ${C.border}`, paddingBottom: 4 }}>
        {TABS.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => setTab(i)}
            style={{
              padding: "10px 14px",
              background: tab === i ? C.teal100 : "transparent",
              border: "none",
              borderBottom: tab === i ? `3px solid ${C.teal}` : "3px solid transparent",
              color: tab === i ? C.teal : C.slate,
              fontWeight: tab === i ? 700 : 400,
              fontSize: 12,
              cursor: "pointer",
              fontFamily: FB,
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 0 && (
        <div>
          <Card accent={C.navy} style={{ padding: "24px", marginBottom: 20 }}>
            <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 10, color: C.teal, letterSpacing: 1.5, marginBottom: 10 }}>
              TERMINAL LEARNING OBJECTIVE
            </div>
            <div style={{ fontSize: 15, color: C.teal100, lineHeight: 1.75 }}>
              {TLO.text.split(TLO.keyPhrase).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <span style={{ color: C.gold, fontWeight: "bold" }}>{TLO.keyPhrase}</span>}
                </span>
              ))}
            </div>
          </Card>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 14, marginBottom: 20 }}>
            <Card style={{ padding: "18px" }}>
              <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 11, color: C.slate, marginBottom: 8 }}>Standard course</div>
              <div style={{ fontFamily: FB, fontSize: 13, color: C.slate, lineHeight: 1.6 }}>
                Content delivery and completion checks. Evidence of learning often stops at recall.
              </div>
            </Card>
            <Card accent={C.teal} style={{ padding: "18px" }}>
              <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 11, color: C.teal, marginBottom: 8 }}>Working in the Zone</div>
              <div style={{ fontFamily: FB, fontSize: 13, color: C.navy, lineHeight: 1.6 }}>
                You build real artifacts (Voice, Zone position, Zone System) that transfer directly into practice.
              </div>
            </Card>
          </div>
          <div style={{ padding: "14px 18px", background: C.lightgray, borderRadius: 8, fontFamily: FB, fontSize: 13, color: C.navy, lineHeight: 1.6 }}>
            The outputs are not evidence of learning. They are the beginning of transfer.
          </div>
        </div>
      )}

      {tab === 1 && (
        <div>
          <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 12, color: C.teal, letterSpacing: 1, marginBottom: 14 }}>
            PROGRAM-LEVEL PERFORMANCE OBJECTIVES
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {PROGRAM_OBJECTIVES.map((po) => (
              <Card key={po.id} style={{ padding: "14px 18px" }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start", flexWrap: "wrap" }}>
                  <span
                    style={{
                      background: C.teal,
                      color: C.white,
                      fontFamily: FH,
                      fontWeight: "bold",
                      fontSize: 10,
                      padding: "2px 8px",
                      borderRadius: 4,
                    }}
                  >
                    {po.id}
                  </span>
                  <span style={{ fontFamily: FH, fontWeight: "bold", fontSize: 13, color: C.coral }}>{po.verb}</span>
                  <span style={{ fontFamily: FB, fontSize: 13, color: C.slate, flex: 1, lineHeight: 1.55 }}>{po.text}</span>
                </div>
                <div style={{ marginTop: 8, fontFamily: FB, fontSize: 10, color: C.slate }}>Bloom: {po.bloom}</div>
              </Card>
            ))}
          </div>
          <div
            style={{
              marginTop: 16,
              padding: "12px 14px",
              background: C.cream,
              borderRadius: 6,
              borderLeft: `3px solid ${C.coral}`,
              fontFamily: FB,
              fontSize: 12,
              color: C.navy,
              lineHeight: 1.55,
            }}
          >
            Bloom&apos;s Revised Taxonomy: verbs signal the cognitive work each performance objective requires.
          </div>
        </div>
      )}

      {tab === 2 && (
        <div>
          <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 12, color: C.teal, letterSpacing: 1, marginBottom: 14 }}>
            MODULE PERFORMANCE OBJECTIVES
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {ASSESSMENT_MODULE_KEYS.map((key) => {
              const m = MODULE_OBJECTIVES[key];
              const live = LIVE_KEYS.has(key);
              const open = expandedMod === key;
              return (
                <Card key={key} accent={live ? C.teal : C.teal100} style={{ padding: 0, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => setExpandedMod(open ? null : key)}
                    style={{
                      width: "100%",
                      padding: "16px 18px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                      <div>
                        <span style={{ fontFamily: FH, fontWeight: "bold", fontSize: 14, color: C.navy }}>
                          {m.num} · {m.title}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: FH,
                          fontWeight: "bold",
                          fontSize: 10,
                          padding: "3px 10px",
                          borderRadius: 4,
                          background: live ? C.teal : C.lightgray,
                          color: live ? C.white : C.slate,
                        }}
                      >
                        {live ? "LIVE" : "COMING SOON"}
                      </span>
                    </div>
                  </button>
                  {open && (
                    <div style={{ padding: "0 18px 18px", borderTop: `1px solid ${C.border}` }}>
                      {m.objs.map((obj, i) => (
                        <div key={i} style={{ display: "flex", gap: 10, marginTop: 10, alignItems: "flex-start" }}>
                          <span style={{ fontFamily: FH, fontWeight: "bold", fontSize: 11, color: C.coral, flexShrink: 0 }}>{obj.verb}</span>
                          <span style={{ fontFamily: FB, fontSize: 12, color: C.slate, lineHeight: 1.55 }}>{obj.text}</span>
                        </div>
                      ))}
                      <div style={{ marginTop: 12, fontFamily: FB, fontSize: 12, color: C.navy }}>
                        <strong>Artifact:</strong> <span style={{ fontStyle: "italic", color: C.teal }}>{m.artifact}</span>
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {tab === 3 && (
        <div>
          <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 12, color: C.navy, marginBottom: 14 }}>
            4-level alignment (Kirkpatrick)
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 12 }}>
            {KIRKPATRICK.map((k) => (
              <div
                key={k.level}
                style={{
                  background: k.color,
                  color: k.textColor,
                  borderRadius: 10,
                  padding: "16px 18px",
                }}
              >
                <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 14, marginBottom: 8 }}>
                  Level {k.level} · {k.name}
                </div>
                <div style={{ fontFamily: FB, fontSize: 12, lineHeight: 1.55, marginBottom: 8 }}>{k.measures}</div>
                <div style={{ fontFamily: FB, fontSize: 11, lineHeight: 1.45, opacity: 0.95 }}>
                  <strong>Where it lives:</strong> {k.where}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 16,
              padding: "12px 14px",
              background: C.navy,
              borderRadius: 8,
              fontFamily: FB,
              fontSize: 13,
              color: C.teal100,
              lineHeight: 1.55,
            }}
          >
            L3 and L4 are built in by design.
          </div>
        </div>
      )}

      {tab === 4 && (
        <div>
          <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 12, color: C.teal, letterSpacing: 1, marginBottom: 14 }}>
            ASSESSMENT ARCHITECTURE
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {getAssessmentRows().map((row) => (
              <Card key={row.badge} style={{ padding: "14px 18px" }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start", flexWrap: "wrap" }}>
                  <span
                    style={{
                      background: C.navy,
                      color: C.white,
                      fontFamily: FH,
                      fontWeight: "bold",
                      fontSize: 11,
                      padding: "4px 10px",
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
                        padding: "3px 8px",
                        borderRadius: 4,
                      }}
                    >
                      KEY ARTIFACT
                    </span>
                  )}
                </div>
                <div style={{ fontFamily: FB, fontSize: 13, color: C.navy, marginTop: 10, lineHeight: 1.55 }}>{row.assessment}</div>
                <div style={{ fontFamily: FB, fontSize: 12, fontStyle: "italic", color: C.teal, marginTop: 8 }}>{row.artifact}</div>
              </Card>
            ))}
          </div>
          <div
            style={{
              marginTop: 16,
              padding: "12px 14px",
              background: C.lightgray,
              borderRadius: 8,
              fontFamily: FB,
              fontSize: 13,
              color: C.navy,
              lineHeight: 1.55,
            }}
          >
            No knowledge quiz at the end.
          </div>
        </div>
      )}
    </div>
  );
}
