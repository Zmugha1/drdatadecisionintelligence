import { C } from "../styles/colors";
import { FH } from "../styles/fonts";

export function ZoneTag({ zone, small = false }) {
  const z = {
    below: { c: C.coral, l: "BELOW THE ZONE" },
    inside: { c: C.teal, l: "INSIDE THE ZONE" },
    above: { c: C.amber, l: "ABOVE THE ZONE" },
  };
  const d = z[zone] || z.below;
  return (
    <span
      style={{
        background: d.c,
        color: C.white,
        borderRadius: 4,
        padding: small ? "2px 7px" : "3px 10px",
        fontFamily: FH,
        fontWeight: "bold",
        fontSize: small ? 9 : 11,
        letterSpacing: 0.5,
      }}
    >
      {d.l}
    </span>
  );
}
