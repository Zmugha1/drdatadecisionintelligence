import { C } from "../styles/colors";
import { FH, FB } from "../styles/fonts";

export function ZoneDiag({ position = null, compact = false }) {
  const zones = [
    {
      id: "below",
      label: "BELOW THE ZONE",
      color: C.coral,
      desc: "Expert time burned on execution work",
      sub: "AI should be doing these steps",
    },
    {
      id: "inside",
      label: "INSIDE THE ZONE",
      color: C.teal,
      desc: "Everything else is handled",
      sub: "Only you can do this work",
    },
    {
      id: "above",
      label: "ABOVE THE ZONE",
      color: C.amber,
      desc: "The expertise is leaking",
      sub: "You accepted output without checking",
    },
  ];
  return (
    <div style={{ display: "flex", gap: compact ? 4 : 8, justifyContent: "center", flexWrap: "wrap" }}>
      {zones.map((z) => (
        <div
          key={z.id}
          style={{
            flex: 1,
            minWidth: compact ? 90 : 130,
            background: z.color,
            borderRadius: 8,
            padding: compact ? "12px 10px" : "18px 14px",
            opacity: position && position !== z.id ? 0.4 : 1,
            transform: position === z.id ? "scale(1.05)" : "scale(1)",
            transition: "all 0.3s",
            border: position === z.id ? `3px solid ${C.navy}` : "3px solid transparent",
            boxShadow: position === z.id ? "0 6px 20px rgba(0,0,0,0.2)" : "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              fontFamily: FH,
              fontWeight: "bold",
              fontSize: compact ? 8 : 10,
              color: C.navy,
              marginBottom: 5,
              letterSpacing: 0.7,
            }}
          >
            {z.label}
          </div>
          <div
            style={{
              fontFamily: FB,
              fontSize: compact ? 11 : 13,
              color: C.navy,
              fontWeight: "bold",
              marginBottom: 4,
              lineHeight: 1.3,
            }}
          >
            {z.desc}
          </div>
          <div
            style={{
              fontFamily: FB,
              fontSize: 9,
              color: z.id === "above" ? C.navy : "rgba(255,255,255,0.9)",
              lineHeight: 1.3,
            }}
          >
            {z.sub}
          </div>
          {position === z.id && (
            <div
              style={{
                marginTop: 7,
                background: C.navy,
                color: C.white,
                borderRadius: 4,
                padding: "3px 8px",
                fontSize: 9,
                fontFamily: FH,
                fontWeight: "bold",
                display: "inline-block",
              }}
            >
              YOU ARE HERE
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
