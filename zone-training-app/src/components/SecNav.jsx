import { C } from "../styles/colors";
import { FB } from "../styles/fonts";

export function SecNav({ sections, current, onGo }) {
  return (
    <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
      {sections.map((t, i) => (
        <div
          key={i}
          onClick={() => i <= current && onGo(i)}
          style={{
            flex: 1,
            padding: "9px 10px",
            borderRadius: 6,
            cursor: i <= current ? "pointer" : "default",
            background: i === current ? C.teal : i < current ? C.teal100 : C.lightgray,
            fontFamily: FB,
            fontWeight: i === current ? "bold" : "normal",
            fontSize: 11,
            color: i === current ? C.white : C.slate,
            textAlign: "center",
            transition: "all 0.2s",
          }}
        >
          {t}
        </div>
      ))}
    </div>
  );
}
