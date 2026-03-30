import { C } from "../styles/colors";
import { FB } from "../styles/fonts";

export function ProgressBar({ current, total }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ background: C.teal100, borderRadius: 4, height: 6 }}>
        <div
          style={{
            background: C.teal,
            height: 6,
            borderRadius: 4,
            width: `${Math.round((current / total) * 100)}%`,
            transition: "width 0.4s",
          }}
        />
      </div>
      <div style={{ fontFamily: FB, fontSize: 11, color: C.slate, textAlign: "right", marginTop: 4 }}>
        Question {current + 1} of {total}
      </div>
    </div>
  );
}
