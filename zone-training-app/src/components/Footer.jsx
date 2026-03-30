import { C } from "../styles/colors";
import { FH, FB } from "../styles/fonts";

export function Footer() {
  return (
    <div style={{ background: C.navy, padding: "20px 24px", textAlign: "center", marginTop: 48 }}>
      <div style={{ fontFamily: FH, fontWeight: "bold", color: C.gold, fontSize: 14, marginBottom: 4 }}>
        Make $$ With Your Data
      </div>
      <div style={{ fontFamily: FB, color: C.teal100, fontSize: 12 }}>
        Dr. Zubia Mughal, Ed.D. | Dr. Data Decision Intelligence LLC
      </div>
      <div style={{ fontFamily: FB, color: C.slate, fontSize: 11, marginTop: 3 }}>
        STZ Framework v1.0 | drdatadecisionintelligence.com | © 2026
      </div>
    </div>
  );
}
