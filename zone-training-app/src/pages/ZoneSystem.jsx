import { C } from "../styles/colors";
import { FH, FB } from "../styles/fonts";
import { Btn } from "../components/Btn";
import { Card } from "../components/Card";
import { ZoneTag } from "../components/ZoneTag";
import { ZoneDiag } from "../components/ZoneDiag";
import { JOBS } from "../data/jobs";
import { TLO_ZONE_FRAMING } from "../data/objectives";
import { artifactDoneCount } from "../lib/artifactProgress";
import { AssessmentArchitecturePanel } from "../components/AssessmentArchitecturePanel";
import { useZoneNav } from "../context/ZoneNavContext";

export function ZoneSystem() {
  const { ls, nav } = useZoneNav();
  const job = JOBS.find((j) => j.id === ls?.selectedJob);
  const hasVoice = !!(ls?.voice?.context);
  const pos = ls?.zonePosition;

  const five = [
    {
      name: "THE VOICE",
      desc: "What does this job sound like when done right?",
      built: hasVoice,
      content: hasVoice ? `Context defined. Reasoning captured. Done Right documented. Exception logged.` : null,
      mod: "module2",
      color: C.teal,
    },
    {
      name: "THE STEPS",
      desc: "What are the named operations inside this job?",
      built: false,
      content: null,
      mod: null,
      color: C.coral,
    },
    {
      name: "THE FLOW",
      desc: "What triggers this job and what runs in what order?",
      built: false,
      content: null,
      mod: null,
      color: C.navy,
    },
    {
      name: "THE BOUNDARY",
      desc: "What do you approve before the job is done?",
      built: false,
      content: null,
      mod: null,
      color: C.amber,
    },
    {
      name: "THE LOOP",
      desc: "How does this job get better every time it runs?",
      built: false,
      content: null,
      mod: null,
      color: C.slate,
    },
  ];
  const builtCount = five.filter((f) => f.built).length;
  const artifactCount = artifactDoneCount(ls);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <div
          style={{
            fontFamily: FH,
            fontWeight: "bold",
            fontSize: 12,
            color: C.teal,
            letterSpacing: 2,
            marginBottom: 8,
          }}
        >
          YOUR ZONE SYSTEM
        </div>
        <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 30, color: C.navy, marginBottom: 6 }}>Your Job Portfolio — Version 1.0</div>
        <div style={{ fontFamily: FB, fontStyle: "italic", fontSize: 14, color: C.slate }}>
          Built from your expertise. Every job defined. Every decision traceable.
        </div>
      </div>

      <div style={{ background: C.navy, borderRadius: 8, padding: "14px 18px", marginBottom: 20 }}>
        <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 10, color: C.teal, letterSpacing: 1.5, marginBottom: 6 }}>
          TERMINAL LEARNING OBJECTIVE
        </div>
        <div style={{ fontSize: 13, color: C.teal100, lineHeight: 1.7 }}>{TLO_ZONE_FRAMING}</div>
        {artifactCount > 0 && (
          <div style={{ marginTop: 8, fontFamily: FH, fontWeight: "bold", fontSize: 11, color: C.gold }}>
            {artifactCount === 7 ? "Terminal objective achieved." : `${artifactCount} of 7 artifacts built toward this objective.`}
          </div>
        )}
      </div>

      {pos && (
        <div style={{ marginBottom: 32 }}>
          <ZoneDiag position={pos === "oscillating" ? null : pos} compact />
        </div>
      )}

      {job ? (
        <Card accent={C.teal} style={{ padding: "20px", marginBottom: 24 }}>
          <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 11, color: C.teal, letterSpacing: 1, marginBottom: 8 }}>YOUR SELECTED JOB</div>
          <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 18, color: C.navy, marginBottom: 8 }}>{job.job}</div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <ZoneTag zone={ls?.zoneSelfAssessment || "below"} small />
            <span style={{ fontFamily: FB, fontSize: 11, color: C.slate }}>{builtCount} of 5 things defined</span>
          </div>
        </Card>
      ) : (
        <Card accent={C.coral} style={{ padding: "20px", marginBottom: 24, textAlign: "center" }}>
          <div style={{ fontFamily: FB, fontSize: 14, color: C.slate, marginBottom: 12 }}>You have not selected a job yet. Start with Module 1.</div>
          <Btn onClick={() => nav("module1")}>Go to Module 1 →</Btn>
        </Card>
      )}

      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 14 }}>
        <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 18, color: C.navy }}>Five Things</div>
        <div
          style={{
            background: C.teal,
            color: C.white,
            borderRadius: 4,
            padding: "2px 10px",
            fontFamily: FB,
            fontSize: 11,
            fontWeight: "bold",
          }}
        >
          {builtCount} of 5 built
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
        {five.map((f, i) => (
          <Card key={i} style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  background: f.built ? f.color : C.lightgray,
                  width: 86,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 0",
                  flexShrink: 0,
                }}
              >
                <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 13, color: f.built ? C.white : C.slate }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  style={{
                    fontFamily: FH,
                    fontWeight: "bold",
                    fontSize: 8,
                    color: f.built ? C.white : C.slate,
                    letterSpacing: 0.5,
                    marginTop: 2,
                    textAlign: "center",
                    lineHeight: 1.2,
                    padding: "0 4px",
                  }}
                >
                  {f.name}
                </div>
              </div>
              <div style={{ flex: 1, padding: "14px 18px" }}>
                <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 13, color: C.navy, marginBottom: 3 }}>{f.name}</div>
                <div style={{ fontFamily: FB, fontStyle: "italic", fontSize: 11, color: C.slate, marginBottom: f.built ? 8 : 4 }}>{f.desc}</div>
                {f.built ? (
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ fontFamily: FB, fontSize: 12, color: C.teal }}>{f.content}</span>
                    <Btn variant="ghost" onClick={() => nav(f.mod)} style={{ padding: "4px 10px", fontSize: 11 }}>
                      Review →
                    </Btn>
                  </div>
                ) : (
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontFamily: FB, fontStyle: "italic", fontSize: 11, color: C.slate }}>
                      {i === 0 ? "Complete Module 2 to build the Voice" : `Complete Module ${i + 2} to build this`}
                    </div>
                    {i < 2 && (
                      <Btn onClick={() => nav(`module${i + 2}`)} style={{ padding: "6px 12px", fontSize: 11 }}>
                        Build This →
                      </Btn>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ background: C.navy, borderRadius: 8, padding: "16px 20px", marginBottom: 28, textAlign: "center" }}>
        <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 11, color: C.teal, letterSpacing: 1, marginBottom: 6 }}>GOVERNANCE</div>
        <div style={{ fontFamily: FB, fontSize: 13, color: C.teal100, lineHeight: 1.6 }}>
          Every job that runs through your Zone System leaves a record. Every decision is logged. Every recommendation shows its reasoning. You can always ask why the job produced what it produced. Nothing is a black box.
        </div>
      </div>

      <AssessmentArchitecturePanel />

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        {[
          {
            acc: C.teal,
            tag: "FREE CONSULTATION",
            title: "One on One · 30 Minutes",
            desc: "I do not want to sell you anything. I want to understand what job YOU are struggling to get done — then show you exactly what Pulse looks like for YOUR practice.",
            btn: "Book with Dr. Zubia →",
            v: "primary",
            sub: "See me before you leave today.",
          },
          {
            acc: C.coral,
            tag: "WORKSHOP",
            title: "Make $$ With Your Data",
            desc: "How to Stop Guessing and Start Deciding. A hands-on session. We map your data, build your decision picture, create your 90-day plan.",
            btn: "Register for Workshop →",
            v: "coral",
            sub: "drdatadecisionintelligence.com",
          },
        ].map((c, i) => (
          <Card key={i} accent={c.acc} style={{ flex: 1, padding: "24px", minWidth: 230 }}>
            <div
              style={{
                fontFamily: FH,
                fontWeight: "bold",
                fontSize: 10,
                color: c.acc,
                letterSpacing: 1,
                marginBottom: 7,
              }}
            >
              {c.tag}
            </div>
            <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 18, color: C.navy, marginBottom: 8 }}>{c.title}</div>
            <div style={{ fontFamily: FB, fontSize: 12, color: C.slate, lineHeight: 1.6, marginBottom: 16 }}>{c.desc}</div>
            <Btn variant={c.v} style={{ width: "100%", padding: "10px", fontSize: 12 }}>
              {c.btn}
            </Btn>
            <div style={{ fontFamily: FB, fontStyle: "italic", fontSize: 10, color: C.slate, marginTop: 7, textAlign: "center" }}>{c.sub}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
