import { useState } from "react";
import { C } from "../styles/colors";
import { FH, FB } from "../styles/fonts";
import { Btn } from "../components/Btn";
import { Card } from "../components/Card";
import { ModHeader } from "../components/ModHeader";
import { SecNav } from "../components/SecNav";
import { JOBS } from "../data/jobs";
import { ModuleObjectives } from "../components/ModuleObjectives";
import { useZoneNav } from "../context/ZoneNavContext";

export function Module2() {
  const { nav, ls, save } = useZoneNav();
  const [sec, setSec] = useState(0);
  const [voice, setVoice] = useState(ls?.voice || { context: "", reasoning: "", doneRight: "", doneWrong: "" });
  const [exception, setException] = useState(ls?.voiceException || "");
  const [saved, setSaved] = useState(false);
  const job = JOBS.find((j) => j.id === ls?.selectedJob) || JOBS[0];

  const assembled = [
    voice.context && `CONTEXT:\n${voice.context}`,
    voice.reasoning && `MY REASONING:\n${voice.reasoning}`,
    voice.doneRight && `DONE RIGHT:\n${voice.doneRight}`,
    voice.doneWrong && `DONE WRONG:\n${voice.doneWrong}`,
  ]
    .filter(Boolean)
    .join("\n\n");

  const saveAll = () => {
    save({ voice, voiceException: exception, completedModules: ["module1", "module2"] });
    setSaved(true);
  };

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "36px 20px" }}>
      <ModuleObjectives moduleId="module2" />
      <ModHeader num="MODULE 02 — THING 01" title="The Voice" tagline="Teach AI what this job sounds like when done right." />
      {ls?.selectedJob && (
        <div style={{ background: C.teal100, borderRadius: 6, padding: "10px 16px", marginBottom: 20, fontFamily: FB, fontSize: 13, color: C.navy }}>
          Your job: <strong>{job.job}</strong>
        </div>
      )}
      <SecNav sections={["1: What the Voice Is", "2: Voice Builder", "3: Your Exception"]} current={sec} onGo={setSec} />

      {sec === 0 && (
        <div>
          <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 24, color: C.navy, marginBottom: 8 }}>
            The Voice Is How You Teach AI to Do This Job Right.
          </div>
          <div style={{ fontFamily: FB, fontSize: 15, color: C.slate, marginBottom: 24, lineHeight: 1.7 }}>
            Without a Voice, AI produces output that looks like the job was done. But it does not sound like YOU did it. It does not apply your criteria. It does not catch what you catch. It does not avoid what you avoid. A Voice changes that.
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
            <Card accent={C.coral} style={{ flex: 1, padding: "18px", minWidth: 220 }}>
              <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 10, color: C.coral, letterSpacing: 0.8, marginBottom: 10 }}>
                JOB DONE WITHOUT A VOICE
              </div>
              <div
                style={{
                  fontFamily: FB,
                  fontSize: 12,
                  fontStyle: "italic",
                  color: C.navy,
                  background: C.lightgray,
                  borderRadius: 6,
                  padding: "12px",
                  marginBottom: 12,
                  lineHeight: 1.6,
                }}
              >
                "Prepare a brief for the upcoming client session."
              </div>
              <div style={{ fontFamily: FB, fontSize: 12, color: C.slate, lineHeight: 1.6 }}>
                AI guesses what matters. Generic format. Misses the signals only you know to look for. It sounds like any AI — not like you — because it was given no choice.
              </div>
            </Card>
            <Card accent={C.teal} style={{ flex: 1, padding: "18px", minWidth: 220 }}>
              <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 10, color: C.teal, letterSpacing: 0.8, marginBottom: 10 }}>
                JOB DONE WITH A VOICE
              </div>
              <div
                style={{
                  fontFamily: FB,
                  fontSize: 11,
                  fontStyle: "italic",
                  color: C.navy,
                  background: C.lightgray,
                  borderRadius: 6,
                  padding: "12px",
                  marginBottom: 12,
                  lineHeight: 1.6,
                }}
              >
                CONTEXT: Franchise coaching, DISC profile SC, C2 stage client. MY REASONING: Check spouse alignment first, then financial readiness, then stage velocity. DONE RIGHT: PUSH/NURTURE/PAUSE + 3-bullet reasoning. DONE WRONG: No confidence score, or spouse alignment not addressed.
              </div>
              <div style={{ fontFamily: FB, fontSize: 12, color: C.slate, lineHeight: 1.6 }}>
                AI follows your logic. Applies your criteria. The output sounds like you decided it — because you transferred your judgment first.
              </div>
            </Card>
          </div>
          <div style={{ background: C.navy, borderRadius: 8, padding: "20px 24px", marginBottom: 20 }}>
            <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 14, color: C.teal, marginBottom: 16, textAlign: "center" }}>
              The Voice is made of four things
            </div>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              {[
                ["01", "THE CONTEXT", "Who, what, what AI needs to know to start"],
                ["02", "YOUR REASONING", "How you think through this job yourself"],
                ["03", "DONE RIGHT", "What great output for this job always includes"],
                ["04", "DONE WRONG", "What immediately tells you AI misunderstood it"],
              ].map(([n, l, d], i) => (
                <div key={i} style={{ textAlign: "center", minWidth: 110 }}>
                  <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 20, color: C.gold }}>{n}</div>
                  <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 11, color: C.white, marginTop: 4 }}>{l}</div>
                  <div style={{ fontFamily: FB, fontSize: 10, color: C.teal100, marginTop: 2, lineHeight: 1.3 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <Btn onClick={() => setSec(1)}>Continue: Build the Voice →</Btn>
          </div>
        </div>
      )}

      {sec === 1 && (
        <div>
          <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 24, color: C.navy, marginBottom: 8 }}>Build the Voice for Your Job</div>
          <div style={{ fontFamily: FB, fontSize: 14, color: C.slate, marginBottom: 24, lineHeight: 1.6 }}>
            Fill in all four fields for the job you chose. Your Voice assembles in real time on the right.
          </div>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 270, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                {
                  key: "context",
                  label: "01 THE CONTEXT",
                  ph: `Who is this job for? What does AI need to know to start it correctly?\n\nFor: ${job.job}`,
                  rows: 3,
                },
                {
                  key: "reasoning",
                  label: "02 YOUR REASONING",
                  ph: `How would YOU think through this job? What do you always check first?\n\n${job.voiceQ}`,
                  rows: 4,
                },
                {
                  key: "doneRight",
                  label: "03 DONE RIGHT",
                  ph: "What does a great output for this job always include? What sections, format, language?",
                  rows: 3,
                },
                {
                  key: "doneWrong",
                  label: "04 DONE WRONG",
                  ph: "What would tell you immediately that AI did not do this job right?",
                  rows: 2,
                },
              ].map((f) => (
                <Card key={f.key} accent={C.teal} style={{ padding: "14px" }}>
                  <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 10, color: C.teal, letterSpacing: 0.8, marginBottom: 7 }}>{f.label}</div>
                  <textarea
                    value={voice[f.key]}
                    onChange={(e) => setVoice((p) => ({ ...p, [f.key]: e.target.value }))}
                    placeholder={f.ph}
                    rows={f.rows}
                    style={{
                      width: "100%",
                      fontFamily: FB,
                      fontSize: 12,
                      color: C.navy,
                      background: C.cream,
                      border: `1.5px solid ${C.border}`,
                      borderRadius: 6,
                      padding: "9px 11px",
                      resize: "vertical",
                      outline: "none",
                      boxSizing: "border-box",
                      lineHeight: 1.5,
                    }}
                  />
                </Card>
              ))}
              <Btn
                onClick={() => {
                  save({ voice });
                  setSec(2);
                }}
                disabled={!voice.context || !voice.reasoning}
              >
                Save Voice + Continue →
              </Btn>
            </div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ position: "sticky", top: 70 }}>
                <Card accent={C.navy} style={{ padding: "18px" }}>
                  <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 10, color: C.navy, letterSpacing: 0.8, marginBottom: 12 }}>
                    YOUR ASSEMBLED VOICE
                  </div>
                  {assembled ? (
                    <pre
                      style={{
                        fontFamily: FB,
                        fontSize: 12,
                        color: C.navy,
                        background: C.lightgray,
                        borderRadius: 6,
                        padding: "12px",
                        whiteSpace: "pre-wrap",
                        lineHeight: 1.7,
                        minHeight: 160,
                      }}
                    >
                      {assembled}
                    </pre>
                  ) : (
                    <div style={{ fontFamily: FB, fontStyle: "italic", color: C.slate, fontSize: 12, padding: "12px", minHeight: 160 }}>
                      Start filling in the fields — your Voice assembles here in real time...
                    </div>
                  )}
                  {assembled && (
                    <div style={{ marginTop: 10, fontFamily: FB, fontStyle: "italic", fontSize: 11, color: C.teal }}>
                      This is how you teach AI to do this job the way YOU do it.
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}

      {sec === 2 && (
        <div>
          <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 24, color: C.navy, marginBottom: 8 }}>Your Exception</div>
          <div style={{ fontFamily: FB, fontSize: 15, color: C.slate, marginBottom: 20, lineHeight: 1.7 }}>
            Every job has a moment when the obvious output is wrong. That exception is the most important part of your Voice — because it is where your judgment diverges from the algorithm's. Without it, AI will always produce the obvious answer. Even when you know it is wrong.
          </div>
          <Card accent={C.amber} style={{ padding: "18px", marginBottom: 20 }}>
            <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 10, color: C.amber, letterSpacing: 0.8, marginBottom: 8 }}>
              REAL EXCEPTION — SANDI'S COACHBOT (FRANCHISE COACHING)
            </div>
            <div style={{ fontFamily: FB, fontStyle: "italic", fontSize: 13, color: C.slate, lineHeight: 1.7 }}>"{job.exceptionEx}"</div>
          </Card>
          <Card accent={C.coral} style={{ padding: "18px", marginBottom: 20 }}>
            <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 10, color: C.coral, letterSpacing: 0.8, marginBottom: 8 }}>
              YOUR EXCEPTION FOR: {job.job.toUpperCase()}
            </div>
            <div style={{ fontFamily: FB, fontSize: 12, color: C.slate, marginBottom: 10, lineHeight: 1.5 }}>
              Describe a time when the obvious output for this job was wrong — and what you knew that the AI would not have known.
            </div>
            <textarea
              value={exception}
              onChange={(e) => setException(e.target.value)}
              rows={5}
              placeholder={`In my work on this job, there is a situation where everything points to [X] — but the right answer is [Y]. The signal that tells me this is [Z]...`}
              style={{
                width: "100%",
                fontFamily: FB,
                fontSize: 12,
                color: C.navy,
                background: C.cream,
                border: `1.5px solid ${C.border}`,
                borderRadius: 6,
                padding: "10px 12px",
                resize: "vertical",
                outline: "none",
                boxSizing: "border-box",
                lineHeight: 1.5,
              }}
            />
          </Card>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Btn onClick={saveAll} disabled={!exception || exception.length < 20}>
              {saved ? "Voice Complete — Saved to Your Zone ✓" : "Save Exception + Complete The Voice →"}
            </Btn>
            {saved && (
              <Btn variant="ghost" onClick={() => nav("zonesystem")}>
                View My Zone System →
              </Btn>
            )}
          </div>
          {saved && (
            <div style={{ marginTop: 18, background: C.teal, borderRadius: 8, padding: "16px 20px" }}>
              <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 14, color: C.white, marginBottom: 6 }}>The Voice is built.</div>
              <div style={{ fontFamily: FB, fontSize: 13, color: C.white, lineHeight: 1.6 }}>
                You have just done something most AI users never do: you taught it how you think. Load this Voice into any AI system and the job changes. It stops sounding generic. It starts sounding like you decided it.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
