import { useState } from "react";
import { C } from "../styles/colors";
import { FH, FB } from "../styles/fonts";
import { Btn } from "../components/Btn";
import { Card } from "../components/Card";
import { ZoneTag } from "../components/ZoneTag";
import { ZoneDiag } from "../components/ZoneDiag";
import { ModHeader } from "../components/ModHeader";
import { SecNav } from "../components/SecNav";
import { JOBS } from "../data/jobs";
import { ModuleObjectives } from "../components/ModuleObjectives";
import { useZoneNav } from "../context/ZoneNavContext";

export function Module1() {
  const { nav, save } = useZoneNav();
  const [sec, setSec] = useState(0);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selfAssess, setSelfAssess] = useState(null);

  const complete = () => {
    save({ selectedJob: selectedJob?.id, zoneSelfAssessment: selfAssess, completedModules: ["module1"] });
    nav("module2");
  };

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "36px 20px" }}>
      <ModuleObjectives moduleId="module1" />
      <ModHeader num="MODULE 01" title="The Job and the Zone" tagline="Every job has a Zone. Yours starts here." />
      <SecNav sections={["1: The Harvard Insight", "2: Pick Your Job", "3: Your Zone on This Job"]} current={sec} onGo={setSec} />

      {sec === 0 && (
        <div>
          <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 24, color: C.navy, marginBottom: 12 }}>Nobody Hires AI for AI.</div>
          <div style={{ background: C.navy, borderRadius: 8, padding: "24px 28px", marginBottom: 24, textAlign: "center" }}>
            <div style={{ fontFamily: FB, fontStyle: "italic", fontSize: 18, color: C.white, lineHeight: 1.7, marginBottom: 10 }}>
              "Nobody wants a drill. They want the hole in the wall. But go one level deeper — they do not even want the hole. They want the picture hung. They want the living room to finally feel like home. That is the job."
            </div>
            <div style={{ fontFamily: FB, fontSize: 12, color: C.teal100 }}>— Clayton Christensen, Harvard Business School</div>
          </div>
          <div style={{ fontFamily: FB, fontSize: 15, color: C.slate, marginBottom: 24, lineHeight: 1.7 }}>
            The same is true for AI. Nobody hires AI for AI. They hire it to get a job done. The question is: is it doing the job at your expert level — or just close enough that you stopped checking?
          </div>
          <ZoneDiag />
          <div style={{ display: "flex", gap: 14, marginTop: 24, flexWrap: "wrap" }}>
            {[
              {
                zone: "below",
                title: "Below the Zone on a job",
                text: "Sandi spent 45 minutes before every coaching session manually reviewing notes, re-reading documents, rebuilding context from scratch. That is 45 minutes of work AI should have been handling.",
              },
              {
                zone: "inside",
                title: "Inside the Zone on a job",
                text: "AI surfaces everything about the client in 90 seconds. Sandi looks at it and decides: PUSH, NURTURE, or PAUSE. The preparation is AI's. The judgment is hers. That is the Zone.",
              },
              {
                zone: "above",
                title: "Above the Zone on a job",
                text: "A financial advisor sends AI-generated client recommendations without reading the reasoning. The expertise leaked the moment they stopped interrogating the job's output.",
              },
            ].map((ex, i) => (
              <Card
                key={i}
                accent={ex.zone === "below" ? C.coral : ex.zone === "inside" ? C.teal : C.amber}
                style={{ flex: 1, padding: "18px", minWidth: 200 }}
              >
                <ZoneTag zone={ex.zone} small />
                <div style={{ fontFamily: FB, fontSize: 12, color: C.slate, lineHeight: 1.6, marginTop: 10 }}>{ex.text}</div>
              </Card>
            ))}
          </div>
          <div style={{ marginTop: 24, padding: "18px 22px", background: C.lightgray, borderRadius: 8, borderLeft: `4px solid ${C.teal}` }}>
            <div style={{ fontFamily: FB, fontStyle: "italic", fontSize: 14, color: C.navy, lineHeight: 1.6 }}>
              "The Zone is not a fixed place. Every prompt you refine, every step you define, every flow you design — you are widening the Zone and moving deeper into it."
            </div>
            <div style={{ fontFamily: FB, fontSize: 11, color: C.slate, marginTop: 6 }}>— STZ Framework v1.0, Dr. Data Decision Intelligence LLC</div>
          </div>
          <div style={{ marginTop: 24, textAlign: "right" }}>
            <Btn onClick={() => setSec(1)}>Continue: Pick Your Job →</Btn>
          </div>
        </div>
      )}

      {sec === 1 && (
        <div>
          <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 24, color: C.navy, marginBottom: 8 }}>Pick Your Job</div>
          <div style={{ fontFamily: FB, fontSize: 14, color: C.slate, marginBottom: 24, lineHeight: 1.6 }}>
            Every example in this course will use the job you choose right now. Pick the one that is most relevant to your work this week.
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12, marginBottom: 24 }}>
            {JOBS.map((j) => (
              <div
                key={j.id}
                onClick={() => setSelectedJob(j)}
                style={{
                  background: selectedJob?.id === j.id ? C.teal + "22" : C.white,
                  border: `2px solid ${selectedJob?.id === j.id ? C.teal : C.border}`,
                  borderRadius: 10,
                  padding: "16px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow: selectedJob?.id === j.id ? "0 4px 16px rgba(59,191,191,0.2)" : "0 2px 6px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 10, color: C.teal, letterSpacing: 0.8, marginBottom: 8 }}>{j.badge}</div>
                <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 13, color: C.navy, lineHeight: 1.4 }}>{j.job}</div>
                {selectedJob?.id === j.id && (
                  <div style={{ marginTop: 8, fontFamily: FH, fontWeight: "bold", fontSize: 10, color: C.teal }}>✓ SELECTED</div>
                )}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <Btn variant="ghost" onClick={() => setSec(0)}>
              ← Back
            </Btn>
            <Btn onClick={() => setSec(2)} disabled={!selectedJob}>
              Continue: Your Zone on This Job →
            </Btn>
          </div>
        </div>
      )}

      {sec === 2 && selectedJob && (
        <div>
          <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 24, color: C.navy, marginBottom: 4 }}>Your Zone on This Job</div>
          <div style={{ fontFamily: FB, fontSize: 13, color: C.slate, marginBottom: 20 }}>
            Job selected: <strong style={{ color: C.teal }}>{selectedJob.job}</strong>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
            {[
              { z: "above", desc: selectedJob.above },
              { z: "inside", desc: selectedJob.inside },
              { z: "below", desc: selectedJob.below },
            ].map((item, i) => (
              <Card
                key={i}
                accent={item.z === "below" ? C.coral : item.z === "inside" ? C.teal : C.amber}
                style={{ padding: "16px" }}
              >
                <ZoneTag zone={item.z} small />
                <div style={{ fontFamily: FB, fontSize: 13, color: C.slate, marginTop: 8, lineHeight: 1.6 }}>{item.desc}</div>
              </Card>
            ))}
          </div>
          <div style={{ background: C.lightgray, borderRadius: 8, padding: "20px 22px", marginBottom: 20 }}>
            <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 14, color: C.navy, marginBottom: 12 }}>Where are YOU on this job right now?</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["below", "inside", "above"].map((z) => (
                <button
                  key={z}
                  onClick={() => setSelfAssess(z)}
                  style={{
                    fontFamily: FH,
                    fontWeight: "bold",
                    fontSize: 12,
                    background: selfAssess === z ? (z === "below" ? C.coral : z === "inside" ? C.teal : C.amber) : C.white,
                    color: selfAssess === z ? C.white : C.navy,
                    border: `2px solid ${z === "below" ? C.coral : z === "inside" ? C.teal : C.amber}`,
                    borderRadius: 6,
                    padding: "10px 18px",
                    cursor: "pointer",
                  }}
                >
                  {z === "below" ? "I am Below the Zone" : z === "inside" ? "I am Inside the Zone" : "I am Above the Zone"}
                </button>
              ))}
            </div>
            {selfAssess && (
              <div
                style={{
                  marginTop: 14,
                  fontFamily: FB,
                  fontStyle: "italic",
                  fontSize: 13,
                  color: C.slate,
                  lineHeight: 1.6,
                  padding: "12px 14px",
                  background: C.white,
                  borderRadius: 6,
                  borderLeft: `3px solid ${selfAssess === "below" ? C.coral : selfAssess === "inside" ? C.teal : C.amber}`,
                }}
              >
                {selfAssess === "below" &&
                  "Good. This is the easiest Zone shift to make. Once you define the five things for this job, most of what you are doing manually will be handled automatically."}
                {selfAssess === "inside" &&
                  "You are close. Defining the five things will make this systematic — so the Zone holds even when you are tired, distracted, or running five calls in a row."}
                {selfAssess === "above" &&
                  "This is an honest and important answer. The expertise leak is real. The Boundary — Thing 4 — is your most important starting point for this job."}
              </div>
            )}
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <Btn variant="ghost" onClick={() => setSec(1)}>
              ← Change Job
            </Btn>
            <Btn onClick={complete} disabled={!selfAssess}>
              Build The Voice for This Job →
            </Btn>
          </div>
        </div>
      )}
    </div>
  );
}
