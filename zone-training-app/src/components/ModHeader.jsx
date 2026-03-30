import { C } from "../styles/colors";
import { FH, FB } from "../styles/fonts";
import { Mascot } from "./Mascot";

export function ModHeader({ num, title, tagline }) {
  return (
    <div
      style={{
        background: C.navy,
        borderRadius: 10,
        padding: "20px 24px",
        marginBottom: 28,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: FH,
            fontWeight: "bold",
            fontSize: 12,
            color: C.teal,
            letterSpacing: 2,
            marginBottom: 4,
          }}
        >
          {num}
        </div>
        <div style={{ fontFamily: FH, fontWeight: "bold", fontSize: 22, color: C.white }}>{title}</div>
        <div
          style={{
            fontFamily: FB,
            fontStyle: "italic",
            fontSize: 12,
            color: C.teal100,
            marginTop: 3,
          }}
        >
          {tagline}
        </div>
      </div>
      <Mascot size={52} />
    </div>
  );
}
