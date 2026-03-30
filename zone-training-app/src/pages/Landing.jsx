import { C } from "../styles/colors";
import { FH, FB } from "../styles/fonts";
import { Btn } from "../components/Btn";
import { Card } from "../components/Card";
import { ZoneTag } from "../components/ZoneTag";
import { ZoneDiag } from "../components/ZoneDiag";
import { Mascot } from "../components/Mascot";
import { JOBS, FIVE } from "../data/jobs";
import { useZoneNav } from "../context/ZoneNavContext";

export function Landing() {
  const { nav } = useZoneNav();

  return (
    <div>
      <div style={{ background: C.navy, padding: "48px 24px 40px", textAlign: "center" }}>
        <Mascot size={72} />
        <div
          style={{
            fontFamily: FH,
            fontWeight: "bold",
            fontSize: 34,
            color: C.white,
            maxWidth: 640,
            margin: "20px auto 12px",
            lineHeight: 1.2,
          }}
        >
          Stop Doing the Work.
          <br />
          <span style={{ color: C.teal }}>Start Running the Job.</span>
        </div>
        <div
          style={{
            fontFamily: FB,
            fontSize: 15,
            color: C.teal100,
            maxWidth: 520,
            margin: "0 auto 28px",
            lineHeight: 1.6,
          }}
        >
          Every job you do has a Zone. Below it, you are doing work AI should be handling. Above it, you have handed too much away. Inside it — everything else is handled, and only you can do what only you can do.
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn onClick={() => nav("diagnostic")} style={{ fontSize: 15, padding: "13px 28px" }}>
            Find My Zone Position →
          </Btn>
          <Btn variant="ghostw" onClick={() => nav("module1")} style={{ fontSize: 15, padding: "13px 28px" }}>
            Start with a Job
          </Btn>
        </div>
        <div style={{ fontFamily: FB, fontStyle: "italic", color: C.white, fontSize: 13, marginTop: 18 }}>
          Make $$ With Your Data — drdatadecisionintelligence.com
        </div>
      </div>

      <div style={{ padding: "52px 24px", textAlign: "center" }}>
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
          THE HARVARD INSIGHT
        </div>
        <div
          style={{
            fontFamily: FH,
            fontWeight: "bold",
            fontSize: 28,
            color: C.navy,
            marginBottom: 10,
            lineHeight: 1.3,
          }}
        >
          "Nobody wants a drill.
          <br />
          They want the hole in the wall."
        </div>
        <div style={{ fontFamily: FB, fontStyle: "italic", fontSize: 13, color: C.slate, marginBottom: 4 }}>
          Clayton Christensen, Harvard Business School
        </div>
        <div style={{ background: C.navy, borderRadius: 8, padding: "18px 28px", maxWidth: 580, margin: "24px auto 0" }}>
          <div style={{ fontFamily: FB, fontSize: 15, color: C.teal100, lineHeight: 1.7 }}>
            Nobody hires AI for AI. They hire it to get a job done. The question is whether it is doing the job right — or just close enough that you stopped checking.
          </div>
        </div>
      </div>

      <div style={{ background: C.lightgray, padding: "48px 24px", textAlign: "center" }}>
        <div
          style={{
            fontFamily: FH,
            fontWeight: "bold",
            fontSize: 11,
            color: C.coral,
            letterSpacing: 2,
            marginBottom: 8,
          }}
        >
          EVERY JOB HAS A ZONE
        </div>
        <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 26, color: C.navy, marginBottom: 28 }}>
          Where Are You on YOUR Jobs?
        </div>
        <ZoneDiag />
      </div>

      <div style={{ padding: "52px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div
            style={{
              fontFamily: FH,
              fontWeight: "bold",
              fontSize: 11,
              color: C.teal,
              letterSpacing: 2,
              marginBottom: 8,
            }}
          >
            SIX JOBS. SIX ZONES.
          </div>
          <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 26, color: C.navy }}>Whose job is this?</div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 14,
            maxWidth: 860,
            margin: "0 auto",
          }}
        >
          {JOBS.map((j, i) => (
            <Card key={i} accent={i % 2 === 0 ? C.coral : C.teal} style={{ padding: "18px" }}>
              <div
                style={{
                  fontFamily: FH,
                  fontWeight: "bold",
                  fontSize: 10,
                  color: i % 2 === 0 ? C.coral : C.teal,
                  letterSpacing: 0.8,
                  marginBottom: 8,
                }}
              >
                {j.badge}
              </div>
              <div
                style={{
                  fontFamily: FH,
                  fontWeight: "bold",
                  fontSize: 13,
                  color: C.navy,
                  lineHeight: 1.4,
                  marginBottom: 10,
                }}
              >
                {j.job}
              </div>
              <ZoneTag zone="inside" small />
            </Card>
          ))}
        </div>
      </div>

      <div style={{ background: C.navy, padding: "52px 24px", textAlign: "center" }}>
        <div
          style={{
            fontFamily: FH,
            fontWeight: "bold",
            fontSize: 11,
            color: C.teal,
            letterSpacing: 2,
            marginBottom: 8,
          }}
        >
          FIVE THINGS EVERY JOB NEEDS DEFINED
        </div>
        <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 26, color: C.white, marginBottom: 32 }}>
          Define these five things for any job.
          <br />
          That is your Zone System.
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: 900,
            margin: "0 auto 28px",
          }}
        >
          {FIVE.map((f, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: `1px solid ${C.teal100}`,
                borderRadius: 8,
                padding: "18px 14px",
                textAlign: "center",
                minWidth: 140,
                flex: 1,
              }}
            >
              <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 24, color: C.gold, marginBottom: 6 }}>{f.n}</div>
              <div
                style={{
                  fontFamily: FH,
                  fontWeight: "bold",
                  fontSize: 11,
                  color: C.white,
                  letterSpacing: 0.8,
                  marginBottom: 6,
                }}
              >
                {f.name}
              </div>
              <div style={{ fontFamily: FB, fontSize: 11, color: C.teal100, lineHeight: 1.4 }}>{f.desc}</div>
              <div style={{ fontFamily: FB, fontSize: 9, color: C.slate, marginTop: 6 }}>{f.stz}</div>
            </div>
          ))}
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: `1px solid ${C.teal200}`,
            borderRadius: 6,
            padding: "14px 20px",
            maxWidth: 600,
            margin: "0 auto",
            fontFamily: FB,
            fontSize: 13,
            color: C.teal100,
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: C.white }}>GOVERNANCE</strong> — Every job that runs through your Zone System leaves a record. Every decision is logged. You can always ask why the job produced what it produced. Nothing is a black box.
        </div>
      </div>

      <div style={{ background: C.teal, padding: "40px 24px", textAlign: "center" }}>
        <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 24, color: C.white, marginBottom: 10 }}>
          Your Zone starts with a single job.
        </div>
        <div style={{ fontFamily: FB, fontSize: 14, color: C.navy, marginBottom: 24 }}>
          8 questions. 5 minutes. Your personalized Zone position on the jobs you do every week.
        </div>
        <Btn variant="navy" onClick={() => nav("diagnostic")} style={{ fontSize: 15, padding: "13px 32px" }}>
          Take the Zone Diagnostic →
        </Btn>
      </div>
    </div>
  );
}
