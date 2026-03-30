import { C } from "../styles/colors";
import { FH, FB } from "../styles/fonts";
import { Btn } from "../components/Btn";
import { Card } from "../components/Card";
import { ZoneDiag } from "../components/ZoneDiag";
import { LearningProgress } from "../components/LearningProgress";
import { KirkpatrickPanel } from "../components/KirkpatrickPanel";
import { useZoneNav } from "../context/ZoneNavContext";

const MODS = [
  { n: "00", id: "diagnostic", title: "Zone Diagnostic", tagline: "What jobs are you hiring AI for right now?", dur: "8 min", avail: true },
  { n: "01", id: "module1", title: "The Job and the Zone", tagline: "Every job has a Zone. Yours starts here.", dur: "20 min", avail: true },
  { n: "02", id: "module2", title: "The Voice", tagline: "Teach AI what this job sounds like when done right.", dur: "25 min", avail: true },
  { n: "03", id: null, title: "The Steps", tagline: "Break the job into named, repeatable operations.", dur: "25 min", avail: false },
  { n: "04", id: null, title: "The Flow + The Boundary", tagline: "What triggers the job. Where you say yes.", dur: "30 min", avail: false },
  { n: "05", id: null, title: "The Loop + Governance", tagline: "How the job gets better. Nothing is a black box.", dur: "25 min", avail: false },
];

export function Dashboard() {
  const { nav, ls } = useZoneNav();
  const done = ls?.completedModules || [];
  const pos = ls?.zonePosition;
  const outputs = (ls?.voice?.context ? 1 : 0) + (ls?.voiceException ? 1 : 0) + (ls?.selectedJob ? 1 : 0);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ marginBottom: 20, display: "flex", justifyContent: "flex-end" }}>
        <Btn variant="ghost" onClick={() => nav("overview")} style={{ padding: "8px 16px", fontSize: 12 }}>
          Program Overview →
        </Btn>
      </div>
      <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 280 }}>
      <div style={{ display: "flex", gap: 20, marginBottom: 36, flexWrap: "wrap", alignItems: "flex-start" }}>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div
            style={{
              fontFamily: FH,
              fontWeight: "bold",
              fontSize: 11,
              color: C.teal,
              letterSpacing: 2,
              marginBottom: 10,
            }}
          >
            YOUR ZONE POSITION
          </div>
          {pos ? (
            <ZoneDiag position={pos === "oscillating" ? null : pos} compact />
          ) : (
            <Card style={{ padding: 16, textAlign: "center" }}>
              <div style={{ fontFamily: FB, color: C.slate, fontSize: 13, marginBottom: 12 }}>
                Take the diagnostic to find your Zone.
              </div>
              <Btn onClick={() => nav("diagnostic")} style={{ padding: "8px 14px", fontSize: 12 }}>
                Start Diagnostic
              </Btn>
            </Card>
          )}
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          {[
            { l: "Modules Complete", v: done.length, c: C.teal },
            { l: "Things Defined", v: outputs, c: C.coral },
          ].map((s, i) => (
            <Card key={i} accent={s.c} style={{ padding: "14px 18px", textAlign: "center", minWidth: 110 }}>
              <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 30, color: s.c }}>{s.v}</div>
              <div style={{ fontFamily: FB, fontSize: 10, color: C.slate, marginTop: 4 }}>{s.l}</div>
            </Card>
          ))}
        </div>
      </div>

      <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 20, color: C.navy, marginBottom: 16 }}>Your Modules</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 14, marginBottom: 36 }}>
        {MODS.map((m, i) => {
          const isDone = done.includes(m.id);
          return (
            <Card key={i} accent={isDone ? C.teal : m.avail ? C.coral : C.teal100} style={{ padding: "18px", opacity: m.avail ? 1 : 0.6 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <div
                  style={{
                    fontFamily: FH,
                    fontWeight: "bold",
                    fontSize: 26,
                    color: isDone ? C.teal : m.avail ? C.navy : C.slate,
                  }}
                >
                  {m.n}
                </div>
                <div
                  style={{
                    fontFamily: FB,
                    fontSize: 10,
                    color: C.slate,
                    background: C.lightgray,
                    borderRadius: 4,
                    padding: "2px 7px",
                  }}
                >
                  {m.dur}
                </div>
              </div>
              <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 14, color: C.navy, marginBottom: 4 }}>{m.title}</div>
              <div style={{ fontFamily: FB, fontStyle: "italic", fontSize: 11, color: C.slate, marginBottom: 14, lineHeight: 1.4 }}>
                {m.tagline}
              </div>
              {m.avail ? (
                <Btn onClick={() => nav(m.id)} variant={isDone ? "ghost" : "primary"} style={{ width: "100%", padding: "9px", fontSize: 12 }}>
                  {isDone ? "Review Module" : "Start Module →"}
                </Btn>
              ) : (
                <div style={{ fontFamily: FB, fontSize: 11, color: C.slate, fontStyle: "italic" }}>Coming soon</div>
              )}
            </Card>
          );
        })}
      </div>

      <LearningProgress ls={ls} />

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        {[
          {
            acc: C.teal,
            tag: "FREE CONSULTATION",
            title: "One on One · 30 Minutes",
            desc: "I will build the full Zone System for your practice. Every job. All five things. Running on Pulse.",
            btn: "Book with Dr. Zubia →",
            v: "primary",
          },
          {
            acc: C.coral,
            tag: "WORKSHOP",
            title: "Make $$ With Your Data",
            desc: "How to Stop Guessing and Start Deciding. Hands-on session. 90-day plan included.",
            btn: "Register →",
            v: "coral",
          },
        ].map((c, i) => (
          <Card key={i} accent={c.acc} style={{ flex: 1, padding: "22px", minWidth: 230 }}>
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
            <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 17, color: C.navy, marginBottom: 7 }}>{c.title}</div>
            <div style={{ fontFamily: FB, fontSize: 12, color: C.slate, lineHeight: 1.5, marginBottom: 14 }}>{c.desc}</div>
            <Btn variant={c.v} style={{ width: "100%", padding: "9px", fontSize: 12 }}>
              {c.btn}
            </Btn>
          </Card>
        ))}
      </div>
        </div>
        <div style={{ width: 300, maxWidth: "100%", flexShrink: 0 }}>
          <KirkpatrickPanel />
        </div>
      </div>
    </div>
  );
}
